# 🗺️ Cloud GeoIP via DNS Testing Tool

*Hey DNS, where do you think I am?*

Make sure that your ISP's DNS server or third party DNS server is resolving with the correct results from popular cloud providers via Geolocation via DNS. While this tool is not a comprehensive test of what GeoIP solutions an online service may use and they may very well use many other methods, it does tell you if GeoIP routing via DNS is working for you which can be a big hint to any latency or regional issues you may be experiencing.

This tool is made of:

* Cloud configuration via Pulumi for myself to configure popular cloud providers to use GeoIP routing in their DNS offerings for you to test against.
* Simple guide to use the `dig` or PowerShell cmdlet to query a CNAME record with geo-routing.

The rest of this README is that guide explains how to use the infrastructure I've set up to test your DNS server's GeoIP routing.

## Prerequisites

You'll need a Linux, Mac, or Windows desktop or laptop with access to a terminal or Powershell. Unfortunately, I don't have a way to test this sort of thing from a mobile device or game console without great cost to me at this time.

### Linux/macOS

Ensure `dig` is installed on your system. It's part of the `dnsutils` package on most Linux distributions. On macOS, it's included with the system.

To install on Ubuntu/Debian:

```bash
sudo apt-get install dnsutils
```

### Windows

Modern Windows has PowerShell installed. You can use the `Resolve-DnsName` cmdlet to query DNS records. You can open PowerShell by searching for it in the Start menu.

## Testing

The "tool" works by querying a domain name that differs in responses based on where you are resolving from.

### Pick a Domain

First, pick a domain to query CNAMEs from. You'll need to pick a domain based on the cloud provider you want to test against. I suggest testing against all the major cloud providers.

Here are the domains to test and caveats for each:

* Google Cloud Platform (GCP)
  * `test.gcp.geoip-test.mindflakes.com`
* Azure
  * **Note**: Azure has extremely fine-grained DNS GeoIP compared to GCP. Unfortunately, I could not roll all options into one domain to test as there is a maximum of 200 routing options per "traffic manager profile". For your Azure test, you'll need to know the correct domain name for the continent you are testing from.
  * Continent
    * Does Azure know what continent you are in? This generally works, but if you get an error from the continent-specific domains, use this to determine the "correct" continent.
    * `world-geoip-test.trafficmanager.net`
  * North America
    * `geo-na-geoip-test.trafficmanager.net`
  * Europe
    * `geo-eu-geoip-test.trafficmanager.net`
  * Middle East
    * `geo-me-geoip-test.trafficmanager.net`
  * Africa
    * `geo-af-geoip-test.trafficmanager.net`
  * Asia
    * `geo-as-geoip-test.trafficmanager.net`
  * Asia Pacific
    * `geo-ap-geoip-test.trafficmanager.net`
  * South America
    * `geo-sa-geoip-test.trafficmanager.net`
  * Antarctica (Hi! 🐧)
    * `geo-an-geoip-test.trafficmanager.net`
* Amazon Web Services (AWS)
  * TODO

### Query the CNAME Record

The following example will query the CNAME record for `test.gcp.geoip-test.mindflakes.com`. Replace the domain with the one you want to test.

### Linux/macOS

```bash
dig CNAME test.gcp.geoip-test.mindflakes.com
```

Output:

```
nelson@Mac ~ % dig CNAME test.gcp.geoip-test.mindflakes.com

; <<>> DiG 9.10.6 <<>> CNAME test.gcp.geoip-test.mindflakes.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 11583
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;test.gcp.geoip-test.mindflakes.com. IN	CNAME

;; ANSWER SECTION:
test.gcp.geoip-test.mindflakes.com. 60 IN CNAME	test-result-us-west2.gcp.geoip-test.mindflakes.com.

;; Query time: 54 msec
;; SERVER: 100.100.100.100#53(100.100.100.100)
;; WHEN: Thu Jan 02 23:42:05 PST 2025
;; MSG SIZE  rcvd: 98

nelson@Mac ~ %
```

### Windows

```powershell
Resolve-DnsName -Name test.gcp.geoip-test.mindflakes.com -Type CNAME
```

Output:

```
PS C:\Users\Nelson> Resolve-DnsName -Name test.gcp.geoip-test.mindflakes.com -Type CNAME

Name                           Type   TTL   Section    NameHost
----                           ----   ---   -------    --------
test.gcp.geoip-test.mindflakes CNAME  60    Answer     test-result-us-west2.gcp.geoip-test.mindflakes.com
.com


PS C:\Users\Nelson>
```

## Understanding the Output

The output will show the CNAME record that was resolved. The CNAME record will point to a domain that is specific to the region that the DNS GeoIP system thinks you are closest to or in. In the example above, the CNAME record points to `test-result-`**`us-west2`**`.gcp.geoip-test.mindflakes.com`, which seems to indicate that wherever you are resolving from, GeoIP thinks you are close to the **`us-west2`** region in Google Cloud Platform.

Let's take a look at an Azure example output. They are a lot more fine-grained than GCP's GeoIP routing which seems to be based on where their datacenters are and can possibly finely route to states, provinces, or countries that don't even have an Azure datacenter (e.g. North Korea).:

Mac/Linux:

```
nelson@Mac ~ % dig CNAME geo-na-geoip-test.trafficmanager.net

; <<>> DiG 9.10.6 <<>> CNAME geo-na-geoip-test.trafficmanager.net
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 16044
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;geo-na-geoip-test.trafficmanager.net. IN CNAME

;; ANSWER SECTION:
geo-na-geoip-test.trafficmanager.net. 0	IN CNAME test-result-us-ca.azure.geoip-test.mindflakes.com.

;; Query time: 19 msec
;; SERVER: 100.100.100.100#53(100.100.100.100)
;; WHEN: Thu Jan 02 23:47:04 PST 2025
;; MSG SIZE  rcvd: 128

nelson@Mac ~ %
```

Windows:

```
PS C:\Users\Nelson> Resolve-DnsName -Name geo-na-geoip-test.trafficmanager.net -Type CNAME

Name                           Type   TTL   Section    NameHost
----                           ----   ---   -------    --------
geo-na-geoip-test.trafficmanag CNAME  0     Answer     test-result-us-ca.azure.geoip-test.mindflakes.com
er.net


PS C:\Users\Nelson>
```

As you can see, the CNAME record points to `test-result-`**`us-ca`**`.azure.geoip-test.mindflakes.com`, which seems to indicate that wherever I are resolving from, GeoIP thinks I am close to the **`us-ca`** region in Azure. That region is California in the United States. If you want, you can see a list of the region code mappings in the [./azure-geo-code-list.ts](./azure-geo-code-list.ts) file inside this repo.

# Development

This is just a simple Pulumi project that sets up the DNS records for the GeoIP routing test. You can run `pulumi up` to deploy the infrastructure to your own cloud account. You'll need to have Pulumi installed and configured with your cloud provider's credentials. The estimated cost to run this is about $0.25/month as Google charges per zone. The rest and Google charge by query which we will have little or value-addons such as monitoring which we don't need for this simple test.

Anyway, I don't believe this to be of use for most people to run on their own. I'm just providing the code for transparency for the testing. If you want to run this on your own, you can do so.

# Useful Tools

* https://www.whatsmydns.net/ - A website that can show you DNS records from around the world. Useful for checking if your DNS records are propagating correctly.