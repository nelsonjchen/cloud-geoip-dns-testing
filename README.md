# 🗺️ Cloud GeoIP via DNS Testing Tool

*Hey DNS, where do you think I am?*

Make sure that your ISP's DNS server or third party DNS server is resolving with the correct results from popular cloud providers via Geolocation via DNS. While this tool is not a comprehensive test of what GeoIP solutions an online service may use and they may very well use many other methods, it does tell you if GeoIP routing via DNS is working for you which can be a big hint to any latency or regional issues you may be experiencing.

This tool is made of:

* Cloud configuration via Pulumi for myself to configure popular cloud providers to use GeoIP routing in their DNS offerings for you to test against. This isn't really for you but it provides transparency for the testing on how I have set up the DNS records.
* Simple guide to use the `dig` or PowerShell cmdlet to query a CNAME record with geo-routing. This part is for you.

The rest of this README is that guide explains how to use the infrastructure I've set up to test your DNS server's GeoIP routing.

## Prerequisites

You'll need a Linux, Mac, or Windows desktop or laptop with access to a terminal or Powershell.

Unfortunately, I don't have a way to test this sort of thing from a mobile device or game console without great cost to me at this time.

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

First, pick domain(s) to query CNAMEs from. You'll need to pick domain(s) based on the cloud provider you want to test against. I suggest testing with against all the major cloud providers. For Azure and AWS, you should also make sure to test against the continent-determining domain to see if they can determine what continent you are in and then test against the continent-specific domains to see if they can determine closer to where you are.

Here are the domains to test and caveats for each:

* Google Cloud Platform (GCP)
  * **Note**: Google Cloud Platform is low on the granularity of DNS GeoIP compared to Azure and AWS. They seem to only have a few regions that they route by and are tied to their datacenter locations.
  * `test.gcp.geoip-test.mindflakes.com`
* Azure
  * **Note**: Azure has extremely fine-grained DNS GeoIP compared to GCP. Unfortunately, I could not roll all options into one domain to test as there is a maximum of 200 routing options per "traffic manager profile". For your Azure test, you'll need to know the correct domain name to test with for the continent you are testing from.
  * Continent
    * Does Azure know what continent you are in? This generally works, but if you get an error from the continent-specific domains, use this to determine the "correct" continent.
    * `world-geoip-test.trafficmanager.net`
  * Africa
    * `geo-af-geoip-test.trafficmanager.net`
  * Antarctica (Hi! 🐧)
    * `geo-an-geoip-test.trafficmanager.net`
  * Asia
    * `geo-as-geoip-test.trafficmanager.net`
  * Asia Pacific
    * `geo-ap-geoip-test.trafficmanager.net`
  * Europe
    * `geo-eu-geoip-test.trafficmanager.net`
  * Middle East
    * `geo-me-geoip-test.trafficmanager.net`
  * North America
    * `geo-na-geoip-test.trafficmanager.net`
  * South America
    * `geo-sa-geoip-test.trafficmanager.net`
* Amazon Web Services (AWS)
  * **Note**: AWS also has extremely fine-grained DNS GeoIP compared to GCP. Unfortunately, I could not roll all options into one domain to test as there is a maximum of 100 routing options per Hosted Zone. For your AWS test, you'll need to know the correct domain name for the continent you are testing from.
  * Continent
    * Does AWS know what continent you are in? This generally works, but if you get an error from the continent-specific domains, use this to determine the "correct" continent.
    * `test.aws.geoip-test.mindflakes.com`
  * Africa
    * `test.af-geoip-test.aws.geoip-test.mindflakes.com`
  * Antarctica (Hi! 🐧)
    * `test.an-geoip-test.aws.geoip-test.mindflakes.com`
  * Asia
    * `test.as-geoip-test.aws.geoip-test.mindflakes.com`
  * Europe
    * `test.eu-geoip-test.aws.geoip-test.mindflakes.com`
  * Oceania
    * `test.oc-geoip-test.aws.geoip-test.mindflakes.com`
  * North America
    * `test.na-geoip-test.aws.geoip-test.mindflakes.com`
  * South America
    * `test.sa-geoip-test.aws.geoip-test.mindflakes.com`

### Query the CNAME Record for the Domain

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

Finally, let's look at an AWS example output. They are also very fine-grained like Azure:

Mac/Linux:

```
nelson@Mac ~ % dig CNAME test.na-geoip-test.aws.geoip-test.mindflakes.com

; <<>> DiG 9.10.6 <<>> CNAME test.na-geoip-test.aws.geoip-test.mindflakes.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 41423
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;test.na-geoip-test.aws.geoip-test.mindflakes.com. IN CNAME

;; ANSWER SECTION:
test.na-geoip-test.aws.geoip-test.mindflakes.com. 60 IN	CNAME test-result-us-ca.aws.geoip-test.mindflakes.com.

;; Query time: 21 msec
;; SERVER: 100.100.100.100#53(100.100.100.100)
;; WHEN: Fri Jan 03 13:48:12 PST 2025
;; MSG SIZE  rcvd: 109

nelson@Mac ~ %
```

Windows:

```
PS C:\Users\Nelson> Resolve-DnsName -Name test.na-geoip-test.aws.geoip-test.mindflakes.com -Type CNAME

Name                           Type   TTL   Section    NameHost
----                           ----   ---   -------    --------
test.na-geoip-test.aws.geoip-t CNAME  60    Answer     test-result-us-ca.aws.geoip-test.mindflakes.com
est.mindflakes.com


PS C:\Users\Nelson>
```

The results are similar to Azure's. The CNAME record points to `test-result-`**`us-ca`**`.aws.geoip-test.mindflakes.com`, which seems to indicate that wherever you are resolving from, GeoIP thinks you are close to the **`us-ca`** region in AWS. That region is California in the United States. If you want, you can see a list of the region code mappings in the [./aws-geo-code-list.ts](./aws-geo-code-list.ts) file inside this repo.

# Development

This is just a simple Pulumi project that sets up the DNS records for the GeoIP routing test. You can run `pulumi up` to deploy the infrastructure to your own cloud account. You'll need to have Pulumi installed and configured with multiple cloud provider's credentials. The estimated cost to run this is about $0.25/month as Google charges per zone. The rest and Google charge by query which we will have little or value-addons such as monitoring which we don't need for this simple test.

Anyway, I don't believe this to be of use for most people to run on their own. I'm just providing the code for transparency for the testing. If you want to run this on your own or fork it for reference, you can do so.

# Useful Tools

* https://www.whatsmydns.net/ - A website that can show you DNS records from around the world. The system isn't perfect but this is a good way to see if this is roughly working from various points around the world.
  * Google
    * https://www.whatsmydns.net/#CNAME/test.gcp.geoip-test.mindflakes.com
  * Azure
    * World
      * https://www.whatsmydns.net/#CNAME/world-geoip-test.trafficmanager.net
    * North America
      * https://www.whatsmydns.net/#CNAME/geo-na-geoip-test.trafficmanager.net
  * AWS
    * World
      * https://www.whatsmydns.net/#CNAME/test.aws.geoip-test.mindflakes.com
    * North America
      * https://www.whatsmydns.net/#CNAME/test.na-geoip-test.aws.geoip-test.mindflakes.com