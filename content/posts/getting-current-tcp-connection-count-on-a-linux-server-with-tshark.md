+++
title = 'Getting current TCP connection count on a Linux Server with tshark'
date = '2014-10-29T00:47:00Z'
updated = '2014-11-03T12:19:30Z'
tags = ["worms", "DDOS", "tcpdump", "TCP", "sockstat", "sniffer", "netstat", "accounting", "centos", "terminal", "linux", "tshark", "wireshark"]
+++

Do you have a lot of connections because of a DOS attack? Or perhaps your MySQL server has a lot of connection storms? Do you need to know the exact number of those TCP connections?

Ok... there we go!

Install Wireshark for terminal in your Linux and later write:

```
tshark -f 'tcp port 80 and tcp[tcpflags] & (tcp-syn) !=0 and tcp[tcpflags] & (tcp-ack) = 0' -n -q -z io,stat,1 -i eth0 -a "duration:10"
```

- "port 80" could be "port 3306" or "port whatever-you-want".
- "eth0" and "duration:10" can be changed too.

Description:
During 10 seconds tshark is capturing traffic. After that, it will write a report with your connection count each one second (Frames field).

```
=============================================
| IO Statistics                             |
|                                           |
| Interval size: 1 secs                     |
| Col 1: Frames and bytes                   |
|-------------------------------------------|
|                                           |
| Interval    | Frames | Bytes              |
|-------------------------------------------|
|   0 <>    1 |     10 |       740          |
|   1 <>    2 |    105 |      7770          |
|   2 <>    3 |     1  |        74          |
|   3 <>    4 |      0 |         0          |
|   4 <>    5 |      3 |       222          |
|   5 <>    6 |     85 |      6290          |
|   6 <>    7 |     16 |      1184          |
|   7 <>    8 |     31 |      2294          |
|   8 <>    9 |     72 |      5328          |
|   9 <>   10 |      3 |       222          |
=============================================
```

That's all.
