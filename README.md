# 🗺️ Cloud GeoIP via DNS Testing Tool

*Hey DNS, where do you think I am?*

Make sure that your ISP's DNS server or a third-party DNS server is returning the correct results from popular cloud providers via DNS-based geolocation.

While this tool isn’t comprehensive—services can use many other geolocation methods—it does show whether DNS-based GeoIP routing is working. That alone can be a big clue for diagnosing latency or regional issues.

This tool is made up of:

* Cloud configuration via Pulumi to configure popular cloud providers to use GeoIP routing in their DNS offerings for you to test against. This part is mainly for transparency, showing how DNS records are set up. I've already set up the infrastructure for you which you can test against.
* A simple guide on how to use the `dig` or PowerShell cmdlet to query a CNAME record with geo-routing. This part is for you.

The rest of this README explains how to use the infrastructure set up to test DNS-based GeoIP routing.

## Table of Contents

- [🗺️ Cloud GeoIP via DNS Testing Tool](#️-cloud-geoip-via-dns-testing-tool)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
    - [Linux/macOS](#linuxmacos)
    - [Windows](#windows)
  - [Testing](#testing)
    - [Pick a Domain](#pick-a-domain)
    - [Query the CNAME Record for the Domain](#query-the-cname-record-for-the-domain)
    - [Linux/macOS](#linuxmacos-1)
    - [Windows](#windows-1)
  - [Understanding the Output](#understanding-the-output)
  - [Tips for Testing](#tips-for-testing)
    - [Test against Different DNS Servers](#test-against-different-dns-servers)
  - [Pitfalls](#pitfalls)
  - [Development](#development)
  - [Useful Tools](#useful-tools)

## Prerequisites

You’ll need a Linux, Mac, or Windows desktop or laptop with access to a terminal or PowerShell.

Unfortunately, testing from a mobile device or game console isn’t currently feasible here without significant cost.

### Linux/macOS

Ensure `dig` is installed on your system. It’s part of the `dnsutils` package on most Linux distributions. On macOS, it’s included by default.

To install on Ubuntu/Debian:

```bash
sudo apt-get install dnsutils
```

### Windows

Modern Windows has PowerShell installed. You can use the `Resolve-DnsName` cmdlet to query DNS records. Open PowerShell by searching for it in the Start menu.

## Testing

This “tool” works by querying a domain name that can return different responses based on where you’re resolving from.

### Pick a Domain

First, pick the domain(s) you want to query based on the cloud provider you want to test against. I suggest testing all the major cloud providers.

For Azure and AWS, test against the continent-determining domain first to see if it recognizes your continent. Then, use the continent-specific domains to see if it can pinpoint your location more accurately.

Here are the domains and notes:

* **Google Cloud Platform (GCP)**
  * Note: GCP’s DNS GeoIP is less granular compared to Azure and AWS. It typically has a few regions tied to data center locations.
  * `test.gcp.geoip-test.mindflakes.com`
* **Azure**
  * Note: Azure has extremely fine-grained DNS GeoIP. Unfortunately, I couldn’t combine all options into a single domain because there’s a maximum of 200 routing options per “traffic manager profile.” For Azure tests, you need the correct domain name for the continent you’re testing from.
  * **Continent**
    * `world-geoip-test.trafficmanager.net`
  * **Africa**
    * `geo-af-geoip-test.trafficmanager.net`
  * **Antarctica (Hi! 🐧)**
    * `geo-an-geoip-test.trafficmanager.net`
  * **Asia**
    * `geo-as-geoip-test.trafficmanager.net`
  * **Asia Pacific**
    * `geo-ap-geoip-test.trafficmanager.net`
  * **Europe**
    * `geo-eu-geoip-test.trafficmanager.net`
  * **Middle East**
    * `geo-me-geoip-test.trafficmanager.net`
  * **North America**
    * `geo-na-geoip-test.trafficmanager.net`
  * **South America**
    * `geo-sa-geoip-test.trafficmanager.net`
* **Amazon Web Services (AWS)**
  * Note: AWS also has highly granular DNS GeoIP. Unfortunately, I couldn’t combine all options into a single domain for testing because there’s a maximum of 100 routing options per Hosted Zone. For AWS tests, you need the correct domain name for the continent you’re testing from.
  * **Continent**
    * `test.aws.geoip-test.mindflakes.com`
  * **Africa**
    * `test.af-geoip-test.aws.geoip-test.mindflakes.com`
  * **Antarctica (Hi! 🐧)**
    * `test.an-geoip-test.aws.geoip-test.mindflakes.com`
  * **Asia**
    * `test.as-geoip-test.aws.geoip-test.mindflakes.com`
  * **Europe**
    * `test.eu-geoip-test.aws.geoip-test.mindflakes.com`
  * **Oceania**
    * `test.oc-geoip-test.aws.geoip-test.mindflakes.com`
  * **North America**
    * `test.na-geoip-test.aws.geoip-test.mindflakes.com`
  * **South America**
    * `test.sa-geoip-test.aws.geoip-test.mindflakes.com`

### Query the CNAME Record for the Domain

For example, to query the CNAME record for `test.gcp.geoip-test.mindflakes.com`, replace it with whichever domain you wish to test.

### Linux/macOS

```bash
dig CNAME test.gcp.geoip-test.mindflakes.com
```

Example output:

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
;test.gcp.geoip-test.mindflakes.com. IN CNAME

;; ANSWER SECTION:
test.gcp.geoip-test.mindflakes.com. 60 IN CNAME test-result-us-west2.gcp.geoip-test.mindflakes.com.

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

Example output:

```
PS C:\Users\Nelson> Resolve-DnsName -Name test.gcp.geoip-test.mindflakes.com -Type CNAME

Name                           Type   TTL   Section    NameHost
----                           ----   ---   -------    --------
test.gcp.geoip-test.mindflakes CNAME  60    Answer     test-result-us-west2.gcp.geoip-test.mindflakes.com
.com


PS C:\Users\Nelson>
```

## Understanding the Output

The output shows the CNAME record that was resolved. This record points to a domain associated with the region the DNS GeoIP system believes you’re closest to. In the example above, the record points to `test-result-us-west2.gcp.geoip-test.mindflakes.com`, indicating GeoIP sees you as near the `us-west2` region in Google Cloud Platform.

Below is an Azure example. Azure’s GeoIP can be more fine-grained than GCP’s:

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
geo-na-geoip-test.trafficmanager.net. 0 IN CNAME test-result-us-ca.azure.geoip-test.mindflakes.com.

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

As you can see, it resolves to `test-result-us-ca.azure.geoip-test.mindflakes.com`, suggesting GeoIP thinks you’re near `us-ca` (California). You can find region code mappings in the `./azure-geo-code-list.ts` file.

Now, an AWS example:

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
test.na-geoip-test.aws.geoip-test.mindflakes.com. 60 IN CNAME test-result-us-ca.aws.geoip-test.mindflakes.com.

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

Here it points to `test-result-us-ca.aws.geoip-test.mindflakes.com`, indicating you’re near the `us-ca` region in AWS. If needed, refer to the `./aws-geo-code-list.ts` file for code mappings.

Sometimes you’ll see a CNAME that indicates a GeoIP error or fallback. Below is a sample from a GCP Paris VM testing the AWS North America domain:

```
crazysim@instance-20250103-215639:~$ dig CNAME test.na-geoip-test.aws.geoip-test.mindflakes.com

; <<>> DiG 9.18.28-1~deb12u2-Debian <<>> CNAME test.na-geoip-test.aws.geoip-test.mindflakes.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43922
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;test.na-geoip-test.aws.geoip-test.mindflakes.com. IN CNAME

;; ANSWER SECTION:
test.na-geoip-test.aws.geoip-test.mindflakes.com. 60 IN CNAME test-result-error-unknown-wrong-continent-maybe.aws.geoip-test.mindflakes.com.

;; Query time: 28 msec
;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)
;; WHEN: Fri Jan 03 21:58:24 UTC 2025
;; MSG SIZE  rcvd: 139

crazysim@instance-20250103-215639:~$
```

If you encounter this, ensure you’re testing from within the intended continent. It might also be an actual bug in the DNS GeoIP routing system.

## Tips for Testing

### Test against Different DNS Servers

You can test against different DNS servers with `dig` or `Resolve-DnsName` from the system configuration. This can help you see how different DNS servers resolve the same domain.

For example, to test against Google’s public DNS servers on Linux/macOS or Windows:

```bash
dig @8.8.8.8 CNAME test.gcp.geoip-test.mindflakes.com
```

```powershell
Resolve-DnsName -Name test.gcp.geoip-test.mindflakes.com -Type CNAME -Server 8.8.8.8
```

## Pitfalls

* **DNS Caching**: DNS records may be cached by your ISP, local network, or computer. If you see unexpected results, try flushing your DNS cache or waiting a few minutes.
  * Flushing DNS Cache on Windows: `ipconfig /flushdns`
  * Flushing DNS Cache on macOS: `sudo killall -HUP mDNSResponder`
  * Flushing DNS Cache on Linux: `sudo systemd-resolve --flush-caches`
  * These commands can vary by system; consult your documentation.
* **VPN**: If you’re using a VPN, the GeoIP system will see you as being in the VPN server’s location. This can be useful for testing but may yield misleading results if you’re not trying to appear in that location.
* **It’s not perfect**: DNS-based GeoIP routing is just one of many methods that services use to determine your location. It’s not always accurate and can be affected by factors like IP block reassignment and slow updates.

## Development

This is a simple Pulumi project that sets up DNS records for GeoIP routing tests. You can run `pulumi up` to deploy the infrastructure to your own cloud account. You’ll need Pulumi installed and configured with multiple cloud providers’ credentials. The estimated cost to run this is about $0.25/month, since Google charges per zone. Other providers charge by query, which should be minimal. We don’t need extra features like monitoring for this test.

I don’t expect most people to run this themselves, but I’m providing the code for transparency. Feel free to fork or reference it if needed.

## Useful Tools

* [whatsmydns.net](https://www.whatsmydns.net/) – A site that displays DNS records from various locations around the world. It’s not perfect, but it’s a quick way to see if things look correct globally.
  * **Google**
    * [Check CNAME](https://www.whatsmydns.net/#CNAME/test.gcp.geoip-test.mindflakes.com)
  * **Azure**
    * **World**
      * [Check CNAME](https://www.whatsmydns.net/#CNAME/world-geoip-test.trafficmanager.net)
    * **North America**
      * [Check CNAME](https://www.whatsmydns.net/#CNAME/geo-na-geoip-test.trafficmanager.net)
  * **AWS**
    * **World**
      * [Check CNAME](https://www.whatsmydns.net/#CNAME/test.aws.geoip-test.mindflakes.com)
    * **North America**
      * [Check CNAME](https://www.whatsmydns.net/#CNAME/test.na-geoip-test.aws.geoip-test.mindflakes.com)
