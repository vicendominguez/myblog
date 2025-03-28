+++
title = 'Forcing ansible playbooks to concrete hosts (and vagrant version)'
date = '2015-04-27T17:04:00Z'
updated = '2015-04-27T17:04:08Z'
tags = ["RHEL", "centos", "linux", "devops", "ansible", "trick", "sysadmin"]
+++

This is a fast workaround to force the playbook to run on a specific host. Important: Ensure the host is included in your Ansible inventory.

To convert hosts to a variable:

Before:
```yaml
- name: Installing base server template
  hosts: all
  gather_facts: true
  roles:
    - base
    - ntpenabled
```

After:
```yaml
- name: Installing base server template
  hosts: '{{ hosts }}'
  gather_facts: true
  roles:
    - base
    - ntpenabled
```

To run the playbook in terminal:
```bash
ansible-playbook <playbook.yml> --extra-vars="hosts=<ip_or_hostname_here>"
```

For Vagrant:
```ruby
config.vm.define "test" do |test|
  test.vm.box = "chef/centos-6.6"
  test.vm.network "private_network", ip: "10.1.1.13"
  test.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/playbooks/base.yml"
    ansible.sudo = true
    ansible.extra_vars = {
      hosts: "<ip_or_hostname_here>"
    }
  end
end
```
