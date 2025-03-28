+++
title = 'Myloader: resolving errors with no clear message'
date = '2014-03-12T13:44:00Z'
updated = '2014-03-13T20:50:22Z'
tags = ["mysql", "backups", "mydumper", "linux", "migration", "config file", "myloader"]
+++

If you have a special configuration in mysqld (no default config) perhaps you will find these two cases of error working with myloader tool:

1. The first issue looks like a problem with the backup file...... but it is not. Message:
   ```plaintext
   ** (myloader:42526): CRITICAL **: cannot open file vcadminweb.message.sql.gz (24)

   * (myloader:46190): CRITICAL
   ```

In my case, I needed to check and to change the open files:
```plaintext
ulimit -n 10000     ... and solved!
```
2. The second one looks like a problem accessing to the database.... but it is not. Message:
   ```plaintext
   **: Error switching to database CMSB076 whilst restoring table multidevicevideo_players
   ```

In my case, it was a timewait very low in the mysqld config.
```plaintext
wait_timeout     = 300
```
solved the issue for me.
