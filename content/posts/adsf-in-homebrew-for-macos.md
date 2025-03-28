+++
title = 'adsf in homebrew for MacOS'
date = '2017-06-04T23:29:00Z'
updated = '2017-06-27T23:31:12Z'
tags = ["asdf", "ruby", "pkg", "brew", "homebrew", "MacOS", "github", "terraform"]
+++

Well, if you don't know [asdf](https://github.com/asdf-vm/asdf), you should.

asdf is an extendable version manager with support for Ruby, Node.js, Elixir, Erlang & more.... i am using it with terraform... super cool and very easy to use it.

They have a good [README](https://github.com/asdf-vm/asdf/blob/master/README.md) describing how to install it but they didn't have a brew formula to make it suuuperfast in MacOS.

Well, [asdf](https://github.com/asdf-vm/) is available directly in [homebrew](https://brew.sh/) right now. [I wrote a formula for asdf](https://github.com/Homebrew/homebrew-core/blob/37954ce7325f848f5867b9e320a8e91895d7d619/Formula/asdf.rb) and it was merged:

```bash
$ brew info asdf
asdf: stable 0.3.0
Extendable version manager with support for Ruby, Node.js, Erlang & more
https://github.com/asdf-vm
/usr/local/Cellar/asdf/0.3.0 (1,740 files, 275.4MB) *
 Built from source on 2017-06-04 at 09:04:49
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/asdf.rb
==> Dependencies
Required: autoconf ✔, automake ✘, libtool ✔, coreutils ✔, libyaml ✔, openssl ✔, readline ✔, unixodbc ✔
==> Caveats
Add the following line to your bash profile (e.g. ~/.bashrc, ~/.profile, or ~/.bash_profile)
    source /usr/local/opt/asdf/asdf.sh
Bash completion has been installed to:
    /usr/local/etc/bash_completion.d
```
