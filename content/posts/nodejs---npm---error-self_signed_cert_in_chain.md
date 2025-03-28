+++
title = 'Nodejs - npm - Error: SELF_SIGNED_CERT_IN_CHAIN'
date = '2014-07-23T21:25:00Z'
updated = '2014-07-23T21:25:55Z'
tags = ["Nodejs", "npm", "ssl", "node", "linux", "package", "javascript", "modules", "MacOS"]
+++

New error in the npm port package in Mavericks (OSX 10.9.4):

> npm ERR! Error: SELF_SIGNED_CERT_IN_CHAIN

Workaround:

> npm config set ca ""

And re-install the module.

;)
