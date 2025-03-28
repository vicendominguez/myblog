+++
title = 'Ubuntu/Debian: nodejs package provides nodejs binary and not node binary'
date = '2014-07-24T12:52:00Z'
updated = '2014-07-24T12:56:58Z'
tags = ["Nodejs", "ubuntu", "node", "linux", "package", "debian", "developer", "MacOS"]
+++

Crazy and f*%*%* Linux distribution world

Error:
> /usr/sbin/node: No such file or directory

Someone in Debian (and Ubuntu then) chose to eliminate "node" binary from nodejs package. Now the binary is "nodejs". So, for Eclipse, and some scripts, `node` does not work although `nodejs` package is installed!

Well.... the same guy has preferred to create a second package to solve that. The package is "nodejs-legacy".

So, please, poor Debian/Ubuntu user, you need to remember that when you install node:
> apt-get install nodejs nodejs-legacy

It is the life.
