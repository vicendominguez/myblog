+++
title = 'Magic Reboot - Emergency Reboot'
date = '2016-03-11T18:29:00Z'
updated = '2016-03-11T18:29:37Z'
tags = ["RHEL", "incident", "linux", "kernel", "debian", "reboot", "shutdown", "sysrq"]
+++

Hi guys!

Context: I want to reboot but.....
```bash
# reboot
bash: /sbin/reboot: Input/output error
# shutdown -r now
bash: /sbin/shutdown: Input/output error
```

Solution:
```bash
echo 1 > /proc/sys/kernel/sysrq
echo b > /proc/sysrq-trigger
```
