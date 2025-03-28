+++
title = 'Nodejs: your global modules dont work after installing'
date = '2014-07-31T17:06:00Z'
updated = '2014-11-08T12:44:45Z'
tags = ["Nodejs", "npm", "ubuntu", "websockets", "javascript", "develop", "developer", "MacOS", "eclipse", "centos", "linux", "debian", "project"]
+++

Another linux distribution enigma.

In the name of Tutatis, why f**** the node_modules directories are different in npm and "distro" packages???? The error message is similar to:

```
Error: Cannot find module 'any_npm_module'
 at Function.Module._resolveFilename (module.js:338:15)
 at Function.Module._load (module.js:280:25)
 at Module.require (module.js:364:17)
 at require (module.js:380:17)
 at repl:1:7
 at REPLServer.self.eval (repl.js:110:21)
 at repl.js:249:20
 at REPLServer.self.eval (repl.js:122:7)
 at Interface.<anonymous> (repl.js:239:12)
 at Interface.emit (events.js:95:17)
```

Surprise!!!!

CentOS, Fedora, Ubuntu, Debian and MacOSX-ports are using diferent path for the nodejs global modules. If you install the binary of "node" and "npm", and later, you choose to use npm to install some modules, your modules will be dissapeared.

Workarounds:

1. Compile your own node/npm version (LOL!).
2. Use local modules always (for command line scripts is very LOL!).
3. Use NODE_PATH to point to the correct path:
   - Standard profile: For only one user, you can use `.profile`, `.bash_profile or .bashrc` $HOME files (be careful if you are doing login, it uses only one kind of file so choose the correct one).
   - Developer Eclipse: You can configure environment variables in the properties of the main js file of your project. So you could put NODE_PATH there.
   - Daemon/Service profile: Launch from init.d. You could create a correct init.d script with the NODE_PATH inside ;)
4. **Master of node global modules (one ring to bring them all):**
   - **Linux:** you need to create `/etc/profile.d/nodejs.sh` with the export NODE_PATH path there. (And restart)
   - **MacOSx:** you need to create the crazy and non-existentz `/etc/launchd.conf` and write this line: `setenv NODE_PATH /usr/local/lib/node_modules`. And restart.

:)

