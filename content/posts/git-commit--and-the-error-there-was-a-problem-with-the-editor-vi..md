+++
title = 'git commit  and the error: There was a problem with the editor "vi".'
date = '2016-04-21T09:43:00Z'
updated = '2016-04-21T09:43:11Z'
tags = ["vi", "exitcode", "editor", "developer", "vim", "MacOS", "RHEL", "terminal", "linux", "macox", "commit", "debian", "exit", "git"]
+++

Error message:

```
error: There was a problem with the editor 'vi'.
Please supply the message using either -m or -F option.
```

Quick solution:

```sh
git config --global core.editor $(which vim)
```

Short-reason: If you are using vundle, or similar, you could find this error.

Issue: [https://github.com/VundleVim/Vundle.vim/issues/167](https://github.com/VundleVim/Vundle.vim/issues/167)
