+++
title = 'RPM GPAC 0.6.1 for CentOS6'
date = '2016-05-04T07:30:00Z'
updated = '2018-02-24T09:16:45Z'
tags = ["RHEL", "centos", "terminal", "console", "ffmpeg", "linux", "repo", "mp4box", "rpm", "gpac", "multimedia"]
+++

Our own version of GPAC is ready. Version 0.6.1 without any X dependencies.

gpac-0.6.1-1_noX.el6.x86_64

Four binaries:

```bash
[root@core ~]# rpm -ql gpac |grep bin
/usr/bin/DashCast
/usr/bin/MP42TS
/usr/bin/MP4Box
/usr/bin/MP4Client
```

Compilation flags:

```bash
[root@core ~]# MP4Box -version
MP4Box - GPAC version 0.6.1-revrelease
GPAC Copyright (c) Telecom ParisTech 2000-2012
GPAC Configuration: --build=x86_64-redhat-linux-gnu --host=x86_64-redhat-linux-gnu --target=x86_64-redhat-linux-gnu --program-prefix= --prefix=/usr --exec-prefix=/usr --bindir=/usr/bin --sbindir=/usr/sbin --sysconfdir=/etc --datadir=/usr/share --includedir=/usr/include --libdir=/usr/lib64 --libexecdir=/usr/libexec --localstatedir=/var --sharedstatedir=/var/lib --mandir=/usr/share/man --infodir=/usr/share/info --extra-cflags=-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -fPIC -DPIC -D_FILE_OFFSET_BITS=64 -D_LARGE_FILES -D_LARGEFILE_SOURCE=1 -D_GNU_SOURCE=1 --enable-debug --libdir=lib64 --disable-oss-audio --disable-x11 --disable-static --use-js=no
Features: GPAC_64_BITS GPAC_HAS_SSL GPAC_HAS_JPEG GPAC_HAS_PNG
```

You'll find it in [my bintray repo](https://bintray.com/vicendominguez/CentOS6) as always: [https://bintray.com/vicendominguez/CentOS6/gpac](https://bintray.com/vicendominguez/CentOS6/gpac)

:)
