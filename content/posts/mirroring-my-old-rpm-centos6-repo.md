+++
title = 'Mirroring my old RPM CentOS6 REPO'
date = '2016-09-14T07:29:00Z'
updated = '2018-02-24T09:09:30Z'
tags = ["centos", "epel", "linux", "package", "rpm"]
+++

As you know, we made some interesting [RPM packages](http://repo.enetres.net/) while I was an employee of [Enetres](https://www.enetres.net/).

Obviously, I lost the access to the repo when I left that company and, after 8 years working on RPMs, in my new position, we are not working on RPM packages anymore. Just in case, I made again all the pkgs in a new repo preserving versions. I don't know what strategy will have my last company in the future so I would like to preserve that work for the people who is using legacy or deprecated software without any other possible option to choose.

Bintray seems to have a good and free account. [I made 256 CentOS6 packages](https://dl.bintray.com/vicendominguez/CentOS6/) again and the configuration steps for this mirror are easy:

Run the following to get a generated `.repo` file:

- To download:
  ```sh
  wget https://bintray.com/vicendominguez/CentOS6/rpm -O /etc/yum.repos.d/bintray-vicendominguez-CentOS6.repo
  ```

- Or copy this text into a `bintray-vicendominguez-CentOS6.repo` file on your Linux machine:
  ```sh
  # bintray-bintray-vicendominguez-CentOS6 - packages by vicendominguez from Bintray
  [bintray-vicendominguez-CentOS6]
  name=bintray-vicendominguez-CentOS6
  baseurl=https://dl.bintray.com/vicendominguez/CentOS6
  gpgcheck=0
  repo_gpgcheck=0
  enabled=1
  ```

- Move the file to the correct directory:
  ```sh
  sudo mv bintray-vicendominguez-CentOS6.repo /etc/yum.repos.d/
  ```

If I have to make a new version of these packages, I will bump it here, in this one.

Thx.
