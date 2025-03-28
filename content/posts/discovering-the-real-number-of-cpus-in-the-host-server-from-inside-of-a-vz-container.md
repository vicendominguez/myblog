+++
title = 'Discovering the real number of CPUs in the host server from inside of a VZ container'
date = '2013-07-19T10:11:00Z'
updated = '2014-02-06T10:13:36Z'
tags = ["containers", "terminal", "ffmpeg", "linux", "cpu", "core", "VZ", "sysadmin"]
+++

Researching about ffmpeg encoding in a VZ container, I have discovered that it is possible to get the real number of CPUs inside of a VZ container. I had to use different flags during compilation time, but it works (at least in Proxmox):

{{< gist vicendominguez 8820295 >}}

:O
