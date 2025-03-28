+++
title = 'Glassfish 4 tricks on CentOS 6'
date = '2014-03-05T15:00:00Z'
updated = '2014-03-05T15:00:44Z'
tags = ["centos", "terminal", "glassfish", "logginf", "linux", "script", "init", "config file", "shell", "java"]
+++

Three tricks here.

One. Init.d script for CentOS 6:

{{< gist vicendominguez 9089718 >}}

Two. Changing umask permission in Glassfish 4:

Add "umask 002" just before the "exec" line in $GLASSFISH_HOME/bin/asadmin

Three. Changing general logging file in Glassfish 4:

Change logging.properties file line to (by example):

com.sun.enterprise.server.logging.GFFileHandler.file=/var/log/glassfish/server.log
