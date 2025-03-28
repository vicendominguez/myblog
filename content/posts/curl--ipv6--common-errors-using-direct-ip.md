+++
title = 'curl + IPv6:  common errors using direct IP'
date = '2014-03-19T10:14:00Z'
updated = '2014-03-19T10:14:56Z'
tags = ["address", "http", "curl", "webserver", "google", "IP", "freebsd", "browser", "IPv6", "centos", "terminal", "linux", "IPv4"]
+++

FAIL!

```bash
$ curl  -6 "http://a00:1450:4007:805::1018/"
curl: (3) IPv6 numerical address used in URL without brackets
```
FAIL!

```bash
$ curl  -6 "http://[a00:1450:4007:805::1018]/"
curl: (3) [globbing] bad range in column 13
```

BINGO!

```bash
$ curl  -g -6 "http://[2a00:1450:4007:805::1018]/"

302 Moved
The document has moved
```
