+++
title = 'Autoregistration of Raspberries/Servers with the same hostname on Zabbix'
date = '2016-01-12T13:14:00Z'
updated = '2016-01-12T13:18:30Z'
tags = ["ubuntu", "centos", "openelec", "raspbian", "template", "debian", "monitoring", "zabbix", "agent", "raspberry", "nagios"]
+++

## Possible project

- At least, 200x Raspberries in different locations
- We can have two or three Raspberries in the same location.
- Firewall in all locations
- No starting date known
- Installation from the same image so the hostname is the same in all of them.
- Nobody can log in

## Question

How to monitor those Raspberries with Zabbix?

## Key

Zabbix (2.2) uses the hostname as key field. It's not possible to repeat that hostname on the server, so how to proceed?

## Workflow

### In zabbix-agent:

1. Configure **agent** as **active**, disable passive (firewall installed, do you remember it?)
2. I need to create a new Raspberry Pi and assign it a unique hostname. The hostname should be generated based on the Raspberry Pi's MAC address or a unique identifier.
3. Install Zabbix agent on each Raspberry Pi and configure it with the generated hostname.

### Step-by-step:

1. **Generate Unique Hostname:**

   To generate a unique hostname for each Raspberry Pi, you can use the following script:

   ```bash
   hostnamectl set-hostname raspberry-$(echo $RANDOM | md5sum | cut -c 1-8)
   ```

2. **Install Zabbix Agent:**

   Install the Zabbix agent on each Raspberry Pi using your package manager. For example, on a Debian-based system:

   ```bash
   sudo apt update
   sudo apt install zabbix-agent
   ```

3. **Configure Zabbix Agent:**

   Edit the `/etc/zabbix/zabbix_agentd.conf` file and set the following parameters:

   ```conf
   Server=your_zabbix_server_ip
   ServerActive=your_zabbix_server_ip
   Hostname=$(hostname)
   ```

4. **Restart Zabbix Agent:**

   Restart the Zabbix agent to apply the changes:

   ```bash
   sudo systemctl restart zabbix-agent
   ```

5. **Register Raspberry Pi in Zabbix:**

   - Go to the Zabbix web interface and navigate to Configuration > Hosts.
   - Click on "Create host" and enter the hostname you generated earlier.
   - Assign the Raspberry Pi to a suitable template or group.

6. **Configure Triggers, Items, and Actions:**

   Create triggers, items, and actions as needed for monitoring the Raspberry Pi's performance and status.

That's all. Your Raspberry Pi should now be registered with Zabbix and monitored accordingly.
