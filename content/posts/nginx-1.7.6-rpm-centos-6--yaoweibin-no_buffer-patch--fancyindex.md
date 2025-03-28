+++
title = 'nginx 1.7.6 RPM CentOS 6 + yaoweibin no_buffer patch + fancyindex'
date = '2015-01-13T15:51:00Z'
updated = '2015-01-13T15:51:58Z'
tags = ["nginx", "RHEL", "centos", "fileupload", "linux", "package", "webserver", "repo", "rpm", "index"]
+++

New nginx 1.7.6 RPM for CentOS 6 with fancyindex, [yaoweibin no_buffer patch](http://vicendominguez.blogspot.com.es/2014/10/avoiding-nginx-buffers-request-of-body.html) and all the modules:

```bash
nginx version: nginx/1.7.6
built by gcc 4.4.7 20120313 (Red Hat 4.4.7-4) (GCC)
TLS SNI support enabled

configure arguments: --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_stub_status_module --with-http_auth_request_module --with-mail --with-mail_ssl_module --with-file-aio --with-ipv6 --add-module=/home/dag/rpmbuild/SOURCES/ngx-fancyindex --with-http_spdy_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic'
```
Here: [repo](http://repo.enetres.net/repoview/nginx.html) in the [repo](http://repo.enetres.net/).

:)
