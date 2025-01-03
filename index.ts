import * as gcp from "@pulumi/gcp";
import * as azure from "@pulumi/azure-native";
import * as aws from "@pulumi/aws";
import * as azgcl from './azure-geo-code-list';
import * as awsgcl from './aws-geo-code-list';

// GCP creates a new DNS zone and record set for each GCP computing region.
// It cannot discern by states or other boundaries.
async function createGcpResources() {
  const available = await gcp.compute.getRegions({});
  const regionNames = available.names;

  // Create a Google Cloud DNS Zone
  const dnsZone = new gcp.dns.ManagedZone("test", {
    dnsName: "gcp.geoip-test.mindflakes.com.",
    description: "GCP zone for testing the GeoIP lookup",
  });

  // Create a Google Cloud DNS Record Set
  // We want to test with CNAME records, so we need to create a CNAME record for
  // each region
  // Just set examples
  new gcp.dns.RecordSet("geoip-test", {
    managedZone: dnsZone.name,
    name: "test.gcp.geoip-test.mindflakes.com.",
    type: "CNAME",
    ttl: 60,
    routingPolicy: {
      geos: regionNames.map((region) => {
        return {
          location: region,
          rrdatas: [`test-result-${region}.gcp.geoip-test.mindflakes.com.`],
        };
      })
    },
  });
}

// Azure is special in that it can only make 200 endpoints per profile.
// We make a top level profile for determining geoip by continent GEO.
// Then we make a sub profile for each GEO with all the endpoints in that continent GEO
// excluding the endpoints with subregions.
async function createAzureResources() {
  // Create a new Azure Traffic Manager Profile for each GEO
  const continentRegions = azgcl.default.properties.geographicHierarchy.regions;

  // Create an Azure Traffic Manager Profile for continent detection
  const continentEndpoints = continentRegions.map((continentRegion) => {
    return {
      type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
      // I guess it can't have slashes
      name: continentRegion.name.replace(/\//g, '-'),
      alwaysServe: azure.network.AlwaysServe.Enabled,
      target: `test-result-${continentRegion.code.toLowerCase()}.azure.geoip-test.mindflakes.com`,
      endpointStatus: azure.network.EndpointStatus.Enabled,
      geoMapping: [
        continentRegion.code,
      ]
    };
  });

  new azure.network.Profile("geoip-test-WORLD", {
    resourceGroupName: "geoip-test",
    location: "global",
    trafficRoutingMethod: "Geographic",
    dnsConfig: {
      relativeName: 'world-geoip-test',
    },
    // Unused but needed for bringup
    monitorConfig: {
      protocol: "http",
      port: 80,
      path: "/"
    },
    endpoints: continentEndpoints,
  });

  // Create an Azure Traffic Manager Profile for each continent GEO.
  // There may be regions that have subregions. For those, don't include the region itself but the subregions.
  azgcl.default.properties.geographicHierarchy.regions.forEach((continentRegion) => {
    const continentCode = continentRegion.code;
    type Region = {
      readonly code: string;
      readonly name: string;
      readonly regions: readonly Region[];
    }
    // flatMap the region, subregions.
    const countryOrStateProvinceRegions = continentRegion.regions.flatMap<Region, Region>(
      (countryOrStateRegion) => {
        if (countryOrStateRegion.regions.length > 0) {
          return countryOrStateRegion.regions;
        } else {
          return [countryOrStateRegion];
        }
      });

    const continentRegionTestEndpoints = countryOrStateProvinceRegions.map((countyOrStateProvinceRegion) => {
      return {
        type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
        name: countyOrStateProvinceRegion.name,
        alwaysServe: azure.network.AlwaysServe.Enabled,
        target: `test-result-${countyOrStateProvinceRegion.code.toLowerCase()}.azure.geoip-test.mindflakes.com`,
        endpointStatus: azure.network.EndpointStatus.Enabled,
        geoMapping: [
          countyOrStateProvinceRegion.code,
        ]
      };
    });

    new azure.network.Profile(`geoip-test-${continentCode}`, {
      resourceGroupName: "geoip-test",
      location: "global",
      trafficRoutingMethod: "Geographic",
      dnsConfig: {
        relativeName: `${continentCode.toLowerCase()}-geoip-test`,
      },
      // Unused but needed for bringup
      monitorConfig: {
        protocol: "http",
        port: 80,
        path: "/"
      },
      endpoints: [
        ...continentRegionTestEndpoints,
        {
          type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
          name: 'ERROR',
          alwaysServe: azure.network.AlwaysServe.Enabled,
          target: `test-result-error-unknown-wrong-continent-maybe.azure.geoip-test.mindflakes.com`,
          endpointStatus: azure.network.EndpointStatus.Enabled,
          geoMapping: [
            'WORLD',
          ]
        }
      ],
    });
  });
}

// Similar limitations to Azure, AWS can only have 100 endpoints per zone.
async function createAwsResources() {
  const hostedZone = new aws.route53.Zone("aws.geoip-test.mindflakes.com", {
    name: "aws.geoip-test.mindflakes.com",
  });


  // // Get the list of unique country names
  awsgcl.default.GeoLocationDetailsList
    .filter((geoLocation, index, self) =>
      geoLocation.CountryCode &&
      self.findIndex(g => g.CountryCode === geoLocation.CountryCode) === index
  ).filter((geoLocation) => {
    return geoLocation.CountryCode != undefined;
  }).filter((geoLocation) => {
    return geoLocation.CountryCode != "*";
  }).forEach((geoLocation) => {
      new aws.route53.Record(`geo-ip-test-${geoLocation.CountryCode.toLowerCase()}`, {
        zoneId: hostedZone.zoneId,
        name: `test`,
        type: "CNAME",
        ttl: 60,
        records: [
          `test-result-${geoLocation.CountryCode.toLowerCase()}.example.com`,
        ],
        geolocationRoutingPolicies: [{
          country: geoLocation.CountryCode,
        }],
        setIdentifier: geoLocation.CountryName,
      });
    });

}

export = async () => {
  await Promise.all([
    createGcpResources(),
    createAzureResources(),
    createAwsResources(),
  ]);
}
