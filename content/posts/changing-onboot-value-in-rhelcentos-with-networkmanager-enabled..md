+++
title = 'Changing ONBOOT value in RHEL/CentOS with networkmanager enabled.'
date = '2014-07-03T14:09:00Z'
updated = '2014-07-03T15:08:42Z'
tags = ["nm", "RHEL", "centos", "linux", "manager", "boot", "interface", "config file", "config", "network"]
+++

Sometimes the RHEL world has odd things. For example:

If you want to configure a network interface using NetworkManager (without X!!!) you can do it with `system-config-network` script. From here, you can change the network configuration and DNS/hostname of the box.

What is the problem then?

The network interfaces could be enabled or disabled in boot time. You can see that in the configuration file (`etc/sysconfig/network-scripts/ifcfg-<interfacename>`). It is something like:

```sh
ONBOOT=yes  # or ONBOOT=No
```

But we are talking about using NetworkManager (in that file `NM_CONTROLLED=yes`), so you cannot edit and change that value directly.

What is the way then?

You go to the famous `system-config-network` script, and you will discover there is not an option to change the ONBOOT value.

WTF!

Well, the way to change this value is very crazy.

You will need to export the NetworkManager configuration from terminal:

```sh
system-config-network-cmd > export.cfg
```

Modify the correct line of your network interface. For example:

```sh
DeviceList.Ethernet.eth0.OnBoot=False
```

to:

```sh
DeviceList.Ethernet.eth0.OnBoot=True
```

Save the file and import it with:

```sh
system-config-network-cmd -i < export.cfg
```

TADAAA!!!

Crazy, I know.
