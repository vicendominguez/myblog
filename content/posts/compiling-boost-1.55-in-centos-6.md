+++
title = 'Compiling Boost 1.55 in CentOS 6'
date = '2014-04-22T12:37:00Z'
updated = '2014-08-27T09:23:50Z'
tags = ["cpp", "compile", "hpp", "develop", "developer", "c+", "centos", "g++", "terminal", "boost", "linux", "objects"]
+++

Fast:

1. EPEL repository
2. Updated system
3. `yum groupinstall "Development tools"`
4. `yum install boost*`
5. `yum remove boost*` (last two steps to get initial dependencies)
6. `yum install libicu libicu-devel zlib-devel zlib python-devel bzip2-devel texinfo`
7. Download tarball of boost_1_55 and extract
8. `/bootstrap.sh --with-icu`
9. `./b2 -d0 -a`

Or you [can use my RPM packages](http://vicendominguez.blogspot.com.es/2014/04/boost-c-library-rpm-packages-for-centos.html) for CentOS: [http://repo.enetres.net/x86_64/](http://repo.enetres.net/x86_64/)
```
:)

