+++
title = 'Ansible + Vagrant: forget your interactive prompts (SOLVED)'
date = '2015-04-21T21:48:00Z'
updated = '2015-04-21T21:48:06Z'
tags = ["RHEL", "centos", "linux", "devops", "ansible", "sysadmin"]
+++

```yaml
---
# ansible playbook
- name: Installing test box
  hosts: all
  connection: paramiko
  vars_prompt:
    - name: "hosthname"
      prompt: "Give me a hostname:"
      private: no
      default: "test01-default"

  gather_facts: true

  roles:
    - base
    - redisenabled
    - nodebase
```

```ruby
# Vagrantfile
Vagrant.configure("2") do |config|
  config.vm.define "test" do |test|
    test.vm.box = "chef/centos-6.6"
    test.vm.network "private_network", ip: "10.1.1.13"
    test.vm.provision "ansible" do |ansible|
      ansible.playbook = "ansible/playbooks/test.yml"
      ansible.sudo = true
      ansible.extra_vars = {
        hosthname: "test01"
      }
    end
  end
end
```
