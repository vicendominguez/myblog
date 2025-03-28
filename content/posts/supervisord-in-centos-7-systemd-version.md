+++
title = 'supervisord in CentOS 7 (systemd version)'
date = '2015-02-18T12:35:00Z'
updated = '2015-04-08T14:25:37Z'
tags = ["nginx", "python", "backend", "develop", "developer", "RHEL", "centos", "queue", "linux", "apache", "framework", "php"]
+++

Hello,

Fast installation in CentOS 7 for this "helper" to the queues service in Laravel or Django framework. EPEL package too old so:

1. `yum install python-setuptools python-pip`
2. `pip install supervisor`
3. `mkdir -p /etc/supervisord`
4. `echo_supervisord_conf > /etc/supervisor.d/supervisord.conf`

Forked systemd init script (thx to [Jiangge Zhang](https://gist.github.com/tonyseek)) in `/usr/lib/systemd/system/supervisord.service`:

```sh
<script src="https://gist.github.com/vicendominguez/0da525e8870198652f63.js"></script>
```

And:

1. `systemctl enable supervisord`
2. `systemctl start supervisord`

User=nginx is useful to run this process as nginx user. You can change it but the user must be in the system.
