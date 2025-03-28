+++
title = 'Firewall rules to redirect Glassfish 4.0 ports (80,443,8080 and 8181 will be open to internet)'
date = '2014-02-19T12:27:00Z'
updated = '2014-02-19T12:28:30Z'
tags = ["80", "8080", "firewall", "iptables", "glassfish", "ports", "jboss", "redirect", "java", "tomcat"]
+++

Hello!

Fast trick to redirect ports when you are using a Java application server.

{{< gist vicendominguez 8978478 >}}

Be careful because 80, 443, 8080 and 8181 ports will be open to the Internet. If you want to close the 8080 and 8181, you will need an AJP proxy or to mark packets in the firewall. Read this link:

[Stack Overflow](http://stackoverflow.com/questions/11065124/iptables-redirect-80-to-8080-but-block-public-8080-access)

:)
