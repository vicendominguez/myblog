+++
title = 'Dell H710P is equivalent to LSI MegaRAID SAS 9266-8i '
date = '2014-02-18T12:00:00Z'
updated = '2014-06-30T13:26:22Z'
tags = ["centos", "MegaRAID", "linux", "LSI", "MegaCLI", "Dell", "R520", "RAID"]
+++

Dell H710P RAID card is equivalent to LSI MegaRAID SAS 9266-8i, so if you want to use the MegaCLI tool to manage the card, go to the LSI webpage:

[Dell:](http://www.lsi.com/support/Pages/download-results.aspx?component=Storage+Component&productfamily=RAID+Controllers&productcode=P00584&assettype=0&productname=MegaRAID+SAS+9266-8i)

> "Management Software and Tools" tag and download the MegaCLI for Linux. I am using CentOS 6.x. Inside of the zip file, there is a RPM that works!

To show all cards in your box:

```bash
/opt/MegaRAID/MegaCli/MegaCli64 AdpAllInfo -aALL
```

PS: Check check!

```bash
$ /opt/MegaRAID/MegaCli/MegaCli64 -LDInfo -LALL -aALL | grep State

State: Optimal
```

Good Luck!

:)
