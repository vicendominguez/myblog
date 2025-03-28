+++
title = 'libfdk_aac for CentOS 6.5'
date = '2014-04-07T16:49:00Z'
updated = '2014-04-07T16:49:51Z'
tags = ["aac", "audio", "apple", "centos", "ios", "transcode", "console", "ffmpeg", "linux", "enconding", "rpm"]
+++

From [ffmpeg webpage](http://trac.ffmpeg.org/wiki/AACEncodingGuide)

>Fraunhofer FDK AAC codec library. This is currently the highest-quality AAC encoder available with ffmpeg. Requires ffmpeg to be configured with --enable-libfdk_aac (and additionally --enable-nonfree if you're also using --enable-gpl). But beware, it defaults to a low-pass filter of around 14kHz. If you want to preserve higher frequencies, use -cutoff 18000. Adjust the number to the upper frequency limit you prefer.

Ok. Here my own RPM of that library for CentOS 6.5:

- [RPM](http://repo.enetres.net/repoview/fdk-aac.html)
- [Development RPM](http://repo.enetres.net/repoview/fdk-aac-devel.html)

Sorry. No time friend. It is not tested. :(
