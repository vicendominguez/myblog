+++
title = 'Boost C++ library RPM packages for CentOS 6'
date = '2015-04-01T13:14:00Z'
updated = '2018-02-24T09:08:24Z'
tags = ["cpp", "c++", "library", "centos", "boost", "linux", "compile", "hpp", "libraries", "rpm"]
+++

This text is a message about installing the Boost library on CentOS 6. The Boost library is a set of high-quality C++ source libraries that are designed to be used with the standard C++ library and other C++ libraries.

The message provides two options for downloading the Boost library:

1. From Bintray: <https://bintray.com/vicendominguez/CentOS6/boost-devel>
2. From Bintray root: <https://bintray.com/vicendominguez/CentOS6/>

To install the Boost library, you can use the following commands:

1. Download the repository file and add it to your system's repository list:


```bash
sudo wget https://bintray.com/vicendominguez/CentOS6/rpm -O /etc/yum.repos.d/bintray-vicendominguez-CentOS6.repo
```

2. Install the Boost library using yum package manager:

```bash
sudo yum install boost-devel
```

Note that the commands assume you have sudo privileges to execute them. If you don't, you may need to prefix the commands with "sudo" or use a different method to gain elevated privileges.
