+++
title = 'Mysql: Drop database with dash in name'
date = '2014-03-10T11:12:00Z'
updated = '2014-03-10T11:12:06Z'
tags = ["database", "mysql", "drop", "terminal", "problem"]
+++

```bash
mysql> drop database my-web;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '-web' at line 1
mysql> drop database "my-web";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '"my-web"' at line 1
mysql> drop database 'my-web';
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''my-web'' at line 1
```
The trick:
```bash
mysql> drop database `my-web`;
Query OK, 83 rows affected, 1 warning (0.02 sec)
```

