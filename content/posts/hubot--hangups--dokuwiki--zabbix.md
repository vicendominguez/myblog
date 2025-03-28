+++
title = 'hubot + hangups + dokuwiki + zabbix'
date = '2015-12-17T13:24:00Z'
updated = '2015-12-17T13:25:42Z'
tags = ["centos", "chatops", "wiki", "linux", "tdd", "bot"]
+++

Fast post!

I have integrated dokuwiki and zabbix with hubot using hangups. This is a hell because you need to make concrete calls with the hangups adapter.

I am using hungups api REST in hubot to receive the notifications. So we need to integrate that calls.

- For dokuwiki, i created a repo to adapt its calls to hangups: <https://github.com/vicendominguez/dokuwiki-hubothangups>.
- For Zabbix, you will need a shellscript as External Script and create a new "Action".

My shellscript template:

{{< gist vicendominguez 368dcbc82d6fd943d12e >}}

