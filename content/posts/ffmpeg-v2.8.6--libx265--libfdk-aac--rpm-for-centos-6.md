+++
title = 'ffmpeg v2.8.6 + libx265 + libfdk-aac  RPM for CentOS 6 '
date = '2016-02-05T11:29:00Z'
updated = '2018-02-24T09:10:43Z'
tags = ["h264", "h265", "package", "rpm", "libfdk-aac", "centos", "ffmpeg", "linux", "repo", "x265", "video", "x264"]
+++

I have created some RPMs from the newest version (v2 branch) of ffmpeg tool for CentOS 6:

```bash
[root@core ~]# ffmpeg
ffmpeg version 2.8.6 Copyright (c) 2000-2016 the FFmpeg developers
  built with gcc 4.4.7 (GCC) 20120313 (Red Hat 4.4.7-16)
  configuration: --prefix=/usr --libdir=/usr/lib64 --shlibdir=/usr/lib64 --mandir=/usr/share/man --enable-shared --disable-static --enable-runtime-cpudetect --enable-gpl --enable-version3 --enable-postproc --enable-avfilter --enable-pthreads --enable-x11grab --enable-vdpau --disable-avisynth --enable-libdc1394 --enable-libgsm --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libschroedinger --enable-libspeex --enable-libtheora --enable-bzlib --enable-libass --enable-libdc1394 --enable-libfreetype --enable-openal --enable-libopus --enable-libpulse --enable-libv4l2 --disable-debug --enable-libvorbis --enable-libvpx --enable-libx264 --enable-libx265 --enable-libxvid --extra-cflags='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -fPIC' --disable-stripping --extra-libs=-lstdc++ --enable-libfdk-aac --enable-nonfree
  libavutil      54. 31.100 / 54. 31.100
  libavcodec     56. 60.100 / 56. 60.100
  libavformat    56. 40.101 / 56. 40.101
  libavdevice    56.  4.100 /  56.  4.100
  libavfilter      5. 40.101 /   5. 40.101
  libswscale       3.  1.101 /   3.  1.101
  libswresample    1.  2.101 /   1.  2.101
  libpostproc     53.  3.100 /  53.  3.100
Hyper fast Audio and Video encoder
```

Yes! I added x265 and libfdk-aac (used in Android) :)))

As always, available in the repo: [https://bintray.com/vicendominguez/CentOS6/ffmpeg](https://bintray.com/vicendominguez/CentOS6/ffmpeg)
