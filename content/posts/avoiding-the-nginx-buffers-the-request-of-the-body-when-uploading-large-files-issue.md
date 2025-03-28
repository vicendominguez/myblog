+++
title = 'Avoiding the "NGINX buffers the request of the body when uploading large files" issue'
date = '2014-10-03T13:26:00Z'
updated = '2015-04-08T14:29:22Z'
tags = ["nginx", "centos", "POST", "linux", "package", "upload", "large", "files", "patch", "rpm"]
+++

The problem with NGINX is perfectly commented by [David Moreau Simard](https://twitter.com/dmsimard) in his blog post: *A [use case of Tengine, a drop-in replacement and fork of nginx](https://dmsimard.com/2014/06/21/a-use-case-of-tengine-a-drop-in-replacement-and-fork-of-nginx/)*. The summary is in this paragraph:

> I noticed a problem when using nginx as a load balancer in front of servers that are the target of large and numerous uploads. nginx buffers the request of the body, which drives a lot of discussion in the nginx mailing lists. This effectively means that the file is uploaded twice. You upload a file to nginx, which acts as a reverse proxy/load balancer, and nginx waits until the file is finished uploading before sending it to one of the available backends. The buffer will happen either in memory or to an actual file, depending on configuration.

Tengine was recently brought up in the Ceph mailing lists as part of the solution to tackling the problem so I decided to give it a try and see what kind of impact its unbuffered requests had on performance.

There are similar issues in many lists:

- [http://serverfault.com/questions/420821/nginx-buffering-data-before-sending-to-fastcgi](http://serverfault.com/questions/420821/nginx-buffering-data-before-sending-to-fastcgi)
- [http://trac.nginx.org/nginx/ticket/251](http://trac.nginx.org/nginx/ticket/251)

I have made a fast "adaptation" of the Yaoweibin's no_buffer patch to the new nginx releases.

Weibin Yao (yaoweibin) is an MOTU working in the tengine project: [https://github.com/yaoweibin](https://github.com/yaoweibin)

Tengine (<https://github.com/alibaba/tengine>) is a web server originated by Taobao, the largest e-commerce website in Asia. It is based on the Nginx HTTP server and has many advanced features. Tengine has proven to be very stable and efficient on some of the top 100 websites in the world, including taobao.com and tmall.com.

At the moment, it is not possible to avoid buffering in POST requests in NGINX. If you are working with large file uploads to a backend, you know what I mean.

Tengine has a patch (by yaoweibin?) to solve this problem, which appears as a feature on its webpage: [http://tengine.taobao.org/](http://tengine.taobao.org/) The new options in the conf file are:

- client_body_buffers
- client_body_postpone_size
- proxy_request_buffering
- fastcgi_request_buffering

The description of these new options is in this Tengine page: [http://tengine.taobao.org/document/http_core.html](http://tengine.taobao.org/document/http_core.html)

UPDATE This patch is not necessary from nginx > 1.7.11
