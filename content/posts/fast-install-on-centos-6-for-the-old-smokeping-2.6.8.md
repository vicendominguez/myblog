+++
title = 'Fast install on CentOS 6 for the old smokeping 2.6.8'
date = '2015-09-08T13:26:00Z'
updated = '2015-09-08T13:27:21Z'
tags = ["debug", "nginx", "epel", "atrpms", "echoping", "rpm", "RHEL", "centos", "fping", "linux", "smokeping", "latency", "apache", "networking", "network"]
+++

As always I prefer the fast way....  
When I was trying to install smokeping to make some tests to get latencies I found I had to compile it from sources and install some weird CPAN(perl) dependencies etc etc etc.... horrible to make a 5min-test.  
So I "borrowed" some packages from here and from there..... and finally we have all the packages to make a "yum install smokeping" without problems.  
This is the old 2.6.8 version so, mainly, forget ipv6 support.  
As always, for CentOS 6, at [enetres repo](http://repo.enetres.net/).
