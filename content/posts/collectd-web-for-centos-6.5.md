+++
title = 'collectd-web for CentOS 6.5'
date = '2014-09-04T16:49:00Z'
updated = '2014-09-04T17:05:43Z'
tags = ["monitor", "nginx", "centos", "epel", "linux", "perl", "apache", "collectd", "monitoring", "rpm", "stats"]
+++

There are RPM packages for collectd in CentOS 6.x, you will need the EPEL repository.

If you want an easy web interface to the graphs, there is a `collectd-web` package available, but that package actually refers to the [collection3 frontend](https://collectd.org/wiki/index.php/Collection_3). If you prefer the original [collectd-web](http://collectdweb.appspot.com/), then you will need to install it from its [GitHub site](https://github.com/httpdss/collectd-web).

The most important thing is to create the `/etc/collectd/collection.conf` file. Be careful; if you want to change the path, you will need to modify the sources.

Here's an example of the collection file content for CentOS:

```plaintext
datadir: "/var/lib/collectd/"
```

And a minimal configuration for Apache would be like:

{{< gist vicendominguez ba0bb1ce52232fca1eae >}}
