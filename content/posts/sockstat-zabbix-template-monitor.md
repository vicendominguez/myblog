+++
title = 'sockstat-zabbix-template monitor'
date = '2014-01-29T10:30:00Z'
updated = '2014-02-10T10:37:54Z'
tags = ["websockets", "linux", "webserver", "monitoring", "sockets", "zabbix"]
+++

Zabbix 2.2 comes with support of loadable modules for extending Zabbix agent and server without sacrificing performance.

A loadable module is basically a shared library used by Zabbix server or agent and loaded on startup. The library should contain certain functions, so that a Zabbix process may detect that the file is indeed a module it can load and work with.

Loadable modules have a number of benefits. Great performance and ability to implement any logic are very important, but perhaps the most important advantage is the ability to develop, use, and share Zabbix modules. It contributes to trouble-free maintenance and helps to deliver new functionality easier and independently of the Zabbix core code base.

I have created an agent module to parse the `/proc/net/sockstat` info for Zabbix > 2.2.x.

You will be able to watch the `orphan` sockets or the `timewait` sockets. They are interesting for: DDOS detection, leaks in webapps services, etc, etc...

[sockstat-zabbix-module](https://github.com/vicendominguez/sockstat-zabbix-module)

Screenshot:

![zabbix-sockstat.png](http://2.bp.blogspot.com/-_LjU3QvXPJM/UvicKSLCqoI/AAAAAAAAA5c/sPu7y19Udpk/s1600/zabbix-sockstat.png)
