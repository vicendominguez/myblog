+++
title = 'Show RAID recovery process from Dell PERC H710 disks on CentOS'
date = '2014-07-01T18:45:00Z'
updated = '2014-07-07T14:50:20Z'
tags = ["centos", "MegaRAID", "terminal", "RedHat", "linux", "server", "Dell", "fault", "RAID"]
+++

You will need to install MegaCLI (read this: [Dell H710P Equivalent to LSI Megaraid](http://vicendominguez.blogspot.com.es/2014/02/dell-h710p-equivalent-to-lsi-megaraid.html))

Two commands from here

- Show and exit:

```bash
/opt/MegaRAID/MegaCli/MegaCli64 -PDRbld -ShowProg -PhysDrv [32:0] -a0
```
- Continuos:

```bash
/opt/MegaRAID/MegaCli/MegaCli64 -PDRbld -ProgDsply&nbsp;-PhysDrv [32:0] -a0
```

The value *`[32:0]`* is a value for *`[Enclosure:Slot]`*

To get enclosure number there are two possible commands (choose):

```bash
/opt/MegaRAID/MegaCli/MegaCli64 -PDList -aALL
/opt/MegaRAID/MegaCli/MegaCli64 -EncInfo -aALL
```
Some more info: [MegaCLI RAID LSI](http://www.maths.cam.ac.uk/computing/docs/public/megacli_raid_lsi.html)

:)
