+++
title = 'wowza-zabbix-template monitor'
date = '2014-01-17T10:35:00Z'
updated = '2014-02-10T10:37:15Z'
tags = ["monitor", "streaming", "linux", "zabbix", "wowza"]
+++

This is a minimal template to get info about your wowza rest url in your Zabbix Platform.

Two items, by now:

- Global connections in the Wowza
- Global Live streams number

The template uses Zabbix macros to define the user/pass Wowza server url. It permits a fast configuration because you can apply the same template to all your wowza hosts and change the user/pass usermacros per host only.

REPO: [https://github.com/vicendominguez/wowza-zabbix-template](https://github.com/vicendominguez/wowza-zabbix-template)

Screenshot:

![Zabbix Wowza Graph](https://raw.githubusercontent.com/vicendominguez/sockstat-zabbix-module/master/img/zabbix-sockstat.png)
