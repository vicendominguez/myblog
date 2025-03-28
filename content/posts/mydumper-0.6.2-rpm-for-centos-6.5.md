+++
title = 'MyDumper 0.6.2 RPM for CentOS 6.5'
date = '2014-09-29T12:17:00Z'
updated = '2015-11-16T12:41:08Z'
tags = ["database", "mysql", "backups", "centos", "terminal", "mydumper", "linux", "package", "dumps", "rpm"]
+++

Hello....my new **mydumper** RPM package for Centos 6.5 is [here](http://repo.enetres.net/repoview/mydumper.html).

From the original [Changelog](https://launchpad.net/mydumper/0.6/0.6.2):

> Bugs Fixed:
- last row of table not dumped if it brings statement over statement_size
- Compilation of latest branch fails on CentOS 6.3 64bit
- Can't make against Percona-Server-devel-55 headers
- unknown type name 'HASH' #1336860 k is used twice
- Can't compile - missing libs crypto and ssl
- rows chunks doesn't increase non innodb jobs - TokuDB support - Support to dump tables from different schemas

New Features:
- --lock-all-tables (instead of FTWRL)

Available in [our repo](http://repo.enetres.net/repoview/mydumper.html):

- [http://repo.enetres.net/x86_64/mydumper-0.6.2-1.el6.x86_64.rpm](http://repo.enetres.net/x86_64/mydumper-0.6.2-1.el6.x86_64.rpm)

PS: Not tested yet. Sorry. Any issue in the comments please.

**Update**: [new version of mydumper available](http://vicendominguez.blogspot.com.es/2015/11/mydumper-rpm-v091-for-centos-6x-x8664.html).
