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
  const delegatedSet = new aws.route53.DelegationSet("geoip-test", {
    referenceName: "geoip-test",
  });

  // Create an upper zone with the continent Location data. These are identified by having a
  const rootHostedZone = new aws.route53.Zone("aws.geoip-test.mindflakes.com", {
    name: "aws.geoip-test.mindflakes.com",
    delegationSetId: delegatedSet.id
  });

  // Create a record set for each continent
  // Continents are identified by having a ContinentName
  const continentGeoLocations = awsgcl.default.GeoLocationDetailsList.filter(
    (geoLocation) => geoLocation.ContinentName !== undefined
  );

  const continentRecords = continentGeoLocations.map((geoLocation) =>
    new aws.route53.Record(`geo-ip-test-${geoLocation.ContinentCode.toLowerCase()}`, {
      zoneId: rootHostedZone.zoneId,
      name: `test`,
      type: "CNAME",
      ttl: 60,
      records: [
        `test.${geoLocation.ContinentCode.toLowerCase()}-geoip-test.aws.geoip-test.mindflakes.com`,
      ],
      geolocationRoutingPolicies: [{
        continent: geoLocation.ContinentCode,
      }],
      setIdentifier: geoLocation.ContinentName,
    })
  );
  // Add a default record for unknown locations
  // {
  //   "CountryCode": "*",
  //     "CountryName": "Default"
  // }
  new aws.route53.Record(`geo-ip-test-default`, {
    zoneId: rootHostedZone.zoneId,
    name: `test`,
    type: "CNAME",
    ttl: 60,
    records: [
      `test-result-error-unknown-wrong-continent-maybe.aws.geoip-test.mindflakes.com`,
    ],
    geolocationRoutingPolicies: [{
      country: "*",
    }],
    setIdentifier: "Default",
  });

  continentGeoLocations.forEach((geoLocation) => {
    const continentZone = new aws.route53.Zone(`${geoLocation.ContinentCode.toLowerCase()}-geoip-test.aws.geoip-test.mindflakes.com`, {
      name: `${geoLocation.ContinentCode.toLowerCase()}-geoip-test.aws.geoip-test.mindflakes.com`,
    });
    new aws.route53.Record(`${geoLocation.ContinentName}-ns`, {
      zoneId: rootHostedZone.zoneId,
      name: `${geoLocation.ContinentCode.toLowerCase()}-geoip-test`,
      type: "NS",
      ttl: 60,
      records: continentZone.nameServers.apply((nameServers) => nameServers),
    });
    // Inside of each continent zone, make a record for each country or state
    const countryOrStateProvinceGeoLocations = awsgcl.default.GeoLocationDetailsList.filter(
      (countryOrStateProvinceGeoLocation) => countryOrStateProvinceGeoLocation.ContinentCode === geoLocation.ContinentCode
    ).filter(
      (geoLocation) => geoLocation.CountryName !== undefined && geoLocation.CountryCode !== undefined
    )
    const countryOrStateProvinceRecords = countryOrStateProvinceGeoLocations.map(
      (countryOrStateProvinceGeoLocation) => {
        let name = countryOrStateProvinceGeoLocation.CountryName;
        let code = countryOrStateProvinceGeoLocation.CountryCode;
        if (countryOrStateProvinceGeoLocation.SubdivisionName !== undefined && countryOrStateProvinceGeoLocation.SubdivisionCode !== undefined) {
          name = `${countryOrStateProvinceGeoLocation.CountryName}-${countryOrStateProvinceGeoLocation.SubdivisionName}`;
          code = `${countryOrStateProvinceGeoLocation.CountryCode}-${countryOrStateProvinceGeoLocation.SubdivisionCode}`;
        }
        let routingPolicy: {
          country: string;
          subdivision?: string;
        };
        if (countryOrStateProvinceGeoLocation.SubdivisionName !== undefined && countryOrStateProvinceGeoLocation.SubdivisionCode !== undefined) {
          routingPolicy = {
            country: countryOrStateProvinceGeoLocation.CountryCode,
            subdivision: countryOrStateProvinceGeoLocation.SubdivisionCode,
          };
        } else {
          routingPolicy = {
            country: countryOrStateProvinceGeoLocation.CountryCode,
          };
        }
        new aws.route53.Record(`geo-ip-test-${name}`, {
          zoneId: continentZone.zoneId,
          name: `test.${geoLocation.ContinentCode.toLowerCase()}-geoip-test.aws.geoip-test.mindflakes.com`,
          type: "CNAME",
          ttl: 60,
          records: [
            `test-result-${code.toLowerCase()}.aws.geoip-test.mindflakes.com`,
          ],
          geolocationRoutingPolicies: [routingPolicy],
          setIdentifier: code,
        })
      });
    // Add a default record for unknown locations
    new aws.route53.Record(`geo-ip-test-${geoLocation.ContinentName}-default`, {
      zoneId: continentZone.zoneId,
      name: `test.${geoLocation.ContinentCode.toLowerCase()}-geoip-test.aws.geoip-test.mindflakes.com`,
      type: "CNAME",
      ttl: 60,
      records: [
        `test-result-error-unknown-wrong-continent-maybe.aws.geoip-test.mindflakes.com`,
      ],
      geolocationRoutingPolicies: [{
        country: "*",
      }],
      setIdentifier: "Default",
    });
    return
  });

}

export = async () => {
  await Promise.all([
    createGcpResources(),
    createAzureResources(),
    createAwsResources(),
  ]);
}
