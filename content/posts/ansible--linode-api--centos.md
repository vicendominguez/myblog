+++
title = 'Ansible + Linode API + CentOS'
date = '2015-05-11T21:18:00Z'
updated = '2015-05-11T21:22:35Z'
tags = ["Nodejs", "devops", "python", "cloud", "script", "fabric", "RHEL", "salt", "centos", "linode", "puppet", "linux", "chef", "ansible"]
+++

Fast Mode ON! If you don't understand anything.... try to ask it in the comments.

Requirements for CentOS:
- `yum install pip`
- `pip install linode-python`
- `pip install chube`

Template:

{{< gist vicendominguez 805fb9f5426083a7ab05 >}}

These values are from the API:

```
plan: 1     #cheapest
datacenter: 6    #newmark NJ
distribution: 127         #centos 6.5
```

There are different values and you will need to ask them to the API so, to see full info of these three from Linode API (distributions IDs, datacenters and plans), you can run this Node.js script:

{{< gist vicendominguez c1ab1c64ec1bdded17a9 >}}

Don't forget the `sudo npm install linode-api -g`

:) 

Fast Mode OFF!
