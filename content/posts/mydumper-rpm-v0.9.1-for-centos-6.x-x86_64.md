+++
title = 'Mydumper RPM v0.9.1 for CentOS 6.x (x86_64)'
date = '2015-11-16T12:39:00Z'
updated = '2018-02-24T09:13:11Z'
tags = ["mysql", "enetres", "package", "rpms", "rpm", "backups", "RHEL", "centos", "mydumper", "linux", "repo", "tool"]
+++

### Mydumper 0.9.3 Release Notes

We are excited to announce the release of Mydumper 0.9.3, a high-performance MySQL backup tool. This version introduces several new features and improvements:

#### New Features

 * **Full GTID Support:** Mydumper now records GTIDs in the metadata file, making it easier to manage and restore backups.
 * **Multi-source Slave Detection:** Mydumper can detect multisource slaves (MariaDB 10.1.x) and record all slave coordinates.
 * **Myloader Single Database Restore:** A new option `-s, --source-db` allows you to restore a single database without copying files to a different directory.

#### Improvements

 * **Enhanced Locking Mechanism:** The global read lock is only held for threads coordination, allowing it to be released as soon as transactions are started.
 * **Performance Tuning:** Various optimizations have been made to improve backup and restore performance.

#### New Options


```plaintext
    -s, --source-db</code>: Specifies the database to restore.
    -B, --database</code>: Restores to a different database name in combination with `-s`.
```

#### Installation

We have created an x86_64 RPM version for CentOS 6.x. You can download it from our repository:


    [https://bintray.com/vicendominguez/CentOS6/mydumper](https://bintray.com/vicendominguez/CentOS6/mydumper)

Press "set me up!" there to configure the repository.

#### >Conclusion
Mydumper 0.9.3 offers significant improvements and new features that make it an even more powerful tool for managing MySQL backups. We encourage all users to upgrade and take full advantage of these enhancements.

Thank you for choosing Mydumper!
