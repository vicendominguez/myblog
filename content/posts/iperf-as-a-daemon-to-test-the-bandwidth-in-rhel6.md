+++
title = 'iperf as a daemon to test the bandwidth (in RHEL6)'
date = '2014-08-05T13:17:00Z'
updated = '2016-06-02T02:51:48Z'
tags = ["monitor", "bandwidth", "RHEL", "test", "windows", "linux", "macox", "solaris", "init", "iperf", "check"]
+++

## Update:

Check the [Jason's comments](http://vicendominguez.blogspot.com.es/2014/08/iperf-as-daemon-to-check-bandwidth-in.html?showComment=1464820386392#c436203452802144662) to discover new updates for iperf v3.

Do you need to check the connectivity between your server and your customers? Do you have different customers with different OS? Take a look to [iperf](http://iperf.fr/).

### iperf features

- **TCP**
  - Measure bandwidth
  - Report MSS/MTU size and observed read sizes.
  - Support for TCP window size via socket buffers.
  - Multi-threaded if pthreads or Win32 threads are available. Client and server can have multiple simultaneous connections.

- **UDP**
  - Client can create UDP streams of specified bandwidth.
  - Measure packet loss
  - Measure delay jitter
  - Multicast capable
  - Multi-threaded if pthreads are available. Client and server can have multiple simultaneous connections. (This doesn't work in Windows.)

- Where appropriate, options can be specified with K (kilo-) and M (mega-) suffices. So 128K instead of 131072 bytes.

- Can run for specified time, rather than a set amount of data to transfer.

- Picks the best units for the size of data being reported.

- Server handles multiple connections, rather than quitting after a single test.

- Print periodic, intermediate bandwidth, jitter, and loss reports at specified intervals.

- Run the server as a daemon.

- Run the server as a Windows NT Service

- Use representative streams to test out how link layer compression affects your achievable bandwidth.

There are pre-compiled binaries for a lot of platforms.

Perhaps you want to leave a daemon running in your server. Great!.

### RHEL6 Installation

1. EPEL repository installed.
2. `yum install iperf`
3. Open a port in your firewall.
4. Save this init script in `/etc/init.d:`

{{< gist vicendominguez 4fab383d6e01a434f9d3 >}}

- `chmod 755 /etc/init.d/iperfd`
- `chkconfig add iperfd`
- `chkconfig --on iperfd`

And you don't forget to change the port variable in the script ;)
