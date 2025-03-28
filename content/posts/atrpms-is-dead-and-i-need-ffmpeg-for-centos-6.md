+++
title = 'atrpms is dead and i need ffmpeg for CentOS 6'
date = '2015-09-17T13:48:00Z'
updated = '2018-02-24T09:15:24Z'
tags = ["RHEL", "centos", "epel", "atrpms", "ffmpeg", "linux", "package", "rpms", "el6", "rpm", "multimedia"]
+++

Berlin university seems to switch off the server running the atrpms repo. That is not official but after 10 days down it is easy to think it.

I have read some posts in the CentOS list about this issue. In some answers, people recommend choosing alternative repos. That's a load of garbage! The recommendations are pointing to choose ffmpeg v0.10.x or similar... come on! The latest ffmpeg version today is 2.8.x... is that serious?

In our infrastructure, ffmpeg 2.2.x is valid for us; it’s the atrmps version. So, I have cloned the necessary packages (from atrmps) to install ffmpeg 2.2.x and the mediainfo tool (with dependencies) in my bintray CentOS 6.x repo.

If you're in trouble, you can use our repo for that version install (*note1*: remember we have a strong dependency on the EPEL repo; note2: these packages are not official and they don't have any support).

Good luck! :)</
