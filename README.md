# Cloud GeoIP via DNS Testing Tool

Making sure that your network's DNS server is resolving to the correct GeoIP on the other end.

This guide explains how to use the `dig` command to query a CNAME record with geo-routing.

## Prerequisites

Ensure `dig` is installed on your system. It's part of the `dnsutils` package on most Linux distributions. On macOS, it's included with the system.

To install on Ubuntu/Debian:
```bash
sudo apt-get install dnsutils
```

## Querying a Geo-Routed CNAME Record

The CNAME record `test.gcp.geoip-test.mindflakes.com` uses geo-routing to return different results based on the region of the request. To query it:

```bash
dig CNAME test.gcp.geoip-test.mindflakes.com +short
```

## Understanding the Output

The `+short` option provides a concise output showing the CNAME record value. The result will vary based on your location. For example:

```
test-result-us-central1.gcp.geoip-test.mindflakes.com.
```

This indicates that `test.gcp.geoip-test.mindflakes.com` is a CNAME record pointing to a region-specific endpoint.

## Testing from Different Regions

To test the geo-routing behavior, you need to make requests from different regions. This can be done by running the `dig` command from machines located in different geographic regions or using a cloud provider's global infrastructure.