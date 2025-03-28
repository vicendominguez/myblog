+++
title = 'Websockets + Nodejs + Nginx'
date = '2013-06-13T10:19:00Z'
updated = '2014-02-10T08:50:39Z'
tags = ["Nodejs", "nginx", "websockets", "linux", "webserver", "config file"]
+++

With the latest version of Nginx, it supports HTTP 1.1 with bidirectional websockets. So it is possible to use it with Node.js (for example).

A Spanish intro in this post: [SecurityArtwork](http://www.securityartwork.es/2013/06/13/abstrayendo-websockets-ssl/)

Here, my minimal-snippets: One plain and one for SSL:

{{< gist vicendominguez 09d9afbdd23f46890fa4 >}}
