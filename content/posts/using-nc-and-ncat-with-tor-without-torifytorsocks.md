+++
title = 'Using nc and ncat with tor without torify/torsocks'
date = '2014-08-27T13:47:00Z'
updated = '2014-08-27T13:47:20Z'
tags = ["netcat", "security", "address", "linux", "nmap", "proxy", "socks", "tor", "anonymous", "anonymity"]
+++

If you're running into issues with using torify/torsocks in a script that involves nc and ncat, there are some handy parameters to make it work easily.

For example, when you have a Tor SOCKS proxy set up on localhost and you're using netcat (nc), the command would look something like this:

```bash
nc -v -X5 -x localhost:9050 <server> <port>
```

And for ncat, it would be:

```bash
ncat -v --proxy localhost:9050 --proxy-type socks5 <server> <port>
```

Of course, you can use any proxy. This is super useful for scripting!
