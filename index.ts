import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as azure from "@pulumi/azure-native";
import { EndpointType } from "@pulumi/azure-native/network";
import * as agcl from './azure-geo-code-list';

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
  const continentCodes = agcl.default.properties.geographicHierarchy.regions.map((region) => {
    return region.code;
  });

  // Create an Azure Traffic Manager Profile for continent detection
  const continentEndpoints = continentCodes.map((code) => {
    return {
      type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
      name: code,
      alwaysServe: azure.network.AlwaysServe.Enabled,
      target: `test-result-${code.toLowerCase()}.azure.geoip-test.mindflakes.com`,
      endpointStatus: azure.network.EndpointStatus.Enabled,
      geoMapping: [
        code,
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
  agcl.default.properties.geographicHierarchy.regions.forEach((continentRegion) => {
    const continentCode = continentRegion.code;
    // flatMap the region, subregions.
    const countryOrStateProvinceCodes = continentRegion.regions.flatMap((countryRegion) => {
      if (countryRegion.regions.length > 0) {
        return countryRegion.regions.map((stateProvinceRegion) => {
          return stateProvinceRegion.code;
        });
      } else {
        return [countryRegion.code];
      }
    });

    const continentRegionTestEndpoints = countryOrStateProvinceCodes.map((regionCode) => {
      return {
        type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
        name: regionCode,
        alwaysServe: azure.network.AlwaysServe.Enabled,
        target: `test-result-${regionCode.toLowerCase()}.azure.geoip-test.mindflakes.com`,
        endpointStatus: azure.network.EndpointStatus.Enabled,
        geoMapping: [
          regionCode,
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
          name: 'WORLD',
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

export = async () => {
  await Promise.all([
    createGcpResources(),
    createAzureResources(),
  ]);
}
