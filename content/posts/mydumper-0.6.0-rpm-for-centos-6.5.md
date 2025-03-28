+++
title = 'MyDumper 0.6.0 RPM for CentOS 6.5'
date = '2014-02-24T15:43:00Z'
updated = '2014-02-24T15:44:38Z'
tags = ["mysql", "centos", "spec", "mydumper", "linux", "package", "repo", "rpm"]
+++

I had to make a tiny modification of the original mydumper 0.2 REMI SPEC file ([https://github.com/remicollet/remirepo/blob/master/mydumper/mydumper.spec](https://github.com/remicollet/remirepo/blob/master/mydumper/mydumper.spec)). For me, the "if" condition had problems in my rpmbuild environment.

Here is the forked 0.6.0 SPEC file: [https://github.com/vicendominguez/CentOS-SPECS/blob/master/mydumper-0.6.0.spec](https://github.com/vicendominguez/CentOS-SPECS/blob/master/mydumper-0.6.0.spec)

The rpm can be found here: [http://repo.enetres.net/repoview/mydumper.html](http://repo.enetres.net/repoview/mydumper.html)
