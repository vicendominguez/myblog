+++
title = 'Ansible: Generating a SSH pub key file and uploading to other host to sync files from there'
date = '2014-12-05T14:55:00Z'
updated = '2016-05-15T09:08:53Z'
tags = ["yaml", "python", "keys", "ssh", "playbook", "centos", "puppet", "linux", "rsa", "CM", "sshd", "chef", "ansible", "config"]
+++

# Update

Check the comments for new workflows.

Original from 19/May/2014... updated!

I found this workflow for our systems:

1. Up the new box.
2. Generate keys in that new box.
3. "Fetch" the pub key from the new server to the ansible server.
4. Copy that key to authorized_keys file of the other server (from ansible server).
5. Execute a rsync from the new server without asking key to the other server.

My trick is:

{{< gist vicendominguez 2c2fde50270c0eb89427 >}}

It is working perfectly but i would like to know if another way is possible.

Thanks...

# Update 06/Dec/2014:

Same workflow, new lines (optimized?):

{{< gist vicendominguez 367bf31b5d2ee83ac472 >}}

Similar but not equal :)
