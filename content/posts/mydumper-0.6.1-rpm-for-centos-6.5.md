+++
title = 'MyDumper 0.6.1 RPM for CentOS 6.5'
date = '2014-04-10T11:49:00Z'
updated = '2014-11-03T12:01:47Z'
tags = ["mysql", "backups", "centos", "spec", "mydumper", "linux", "repo", "pckage", "dumps", "rpm"]
+++


I made the last 0.6.0 mydumper RPM package a few days ago but there is a new release/version.

From [MySQL Performance Blog](http://www.mysqlperformanceblog.com/2014/03/10/new-mydumper-0-6-1-release-offers-several-performance-and-usability-features/):

**mydumper 0.6.0**

- #1250269 ensure statement is not bigger than statement_size
- #827328 myloader to set UNIQUE_CHECKS = 0 when importing
- #993714 Reducing the time spent with a global read lock
- #1250271 make it more obvious when mydumper is not successful
- #1250274 table doesnt exist should not be an error
- #987344 Primary key name not quoted in showed_nulls test
- #1075611 error when restoring tables with dashes in name
- #1124106 Mydumper/myloader does not care for 0-s in AUTO_INCREMENT fields
- #1125997 Timestamp data not portable between servers on differnt timezones

**mydumper 0.6.1**

- #1273441 less-locking breaks consistent snapshot
- #1267501 mydumper erroneously always attempts a dummy read
- #1272310 main_connection keep an useless transaction opened and permit infinite metadata table lock
- #1269376 mydumper 0.6.0 fails to compile “cast from pointer to integer of different size”
- #1265155 create_main_connection use detected_server before setting it
- #1267483 Build with MariaDB 10.x
- #1272443 The dumping threads will hold metadata locks progressively while are dumping data.

So we have a new RPM package (centos 6) for 0.6.1 in the repo:

[http://repo.enetres.net/repoview/mydumper.html](http://repo.enetres.net/repoview/mydumper.html)

:)

NOTE: v0.6.2 available: [mydumper-062-rpm-for-centos-65](http://vicendominguez.blogspot.com.es/2014/09/mydumper-062-rpm-for-centos-65.html)
