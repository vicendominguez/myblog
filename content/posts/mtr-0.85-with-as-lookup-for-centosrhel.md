+++
title = 'MTR 0.85 with AS lookup for CentOS/RHEL'
date = '2014-06-04T14:51:00Z'
updated = '2014-06-04T14:51:50Z'
tags = ["AS", "debug", "package", "rpm", "tracert", "RHEL", "centos", "ping", "MTR", "linux", "traceroute", "tool", "network"]
+++

From [bitwizard.nl/mtr](http://www.bitwizard.nl/mtr/):  
> mtr combines the functionality of the 'traceroute' and 'ping' programs in a single network diagnostic tool.

And MTR 0.85 has a new feature very interesting. Its git repo says:  
> Add -z / --show-ip support  
> This new option displays both the hostname and the IP address of a host in the path. This is particularly important when the hostname determined by a reverse lookup has no corresponding forward record. This is similar to the -b (both) option in tracepath, but -b was already taken in mtr for --bitpattern. Using this option also implies -w / --report-wide as this option isn't terribly useful without it in report mode. In general we endeavor to only show the IP address once per line, but in the split view we consistently add a separate field for IP address to the output. Signed-off-by: Travis Cross <tc@traviscross.com>

So I have created a new RPM package for the 0.85 version. It is only for terminal. No X sorry.

It looks great with the -z option:  
```
    1. AS6461     50.7.157.57              0.0%      10       0.9        0.8        0.7        1.2      0.0
    2. AS6461     ae1.mpr1.fra4.de.abo   0.0%      10       0.2        0.2        0.1        0.4      0.0
    3. AS6461     zayo-google.fra4.de.   0.0%      10       9.1        9.1        9.3        10.0     0.0
    4. AS15169    72.14.234.233          0.0%      10       16.5       14.7       14.3       16.5     0.6
    5. AS15169    72.14.235.15           0.0%      10       16.1       16.1       16.1       16.3     0.0
    6. AS15169    209.85.240.188          0.0%      10       39.8       46.2       39.7       84.8     14.9
    7. AS15169    209.85.240.97           0.0%      10       40.0       40.0       40.0       40.0     0.0
    8. AS15169    mad01s15-in-f0.1e100   0.0%      10       39.7       39.7       39.3       40.0     0.0
```

You can download from here: [repo.enetres.net/repoview/mtr.html](http://repo.enetres.net/repoview/mtr.html)
