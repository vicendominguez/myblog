+++
title = '"include:" statement in Ansible  does not find the correct path running on Vagrant'
date = '2016-04-11T14:02:00Z'
updated = '2016-04-13T09:11:01Z'
tags = ["RedHat", "devops", "include", "management", "playbook", "terminal", "linux", "configuration", "CM", "debian", "ansible", "vagrant"]
+++

What is the issue?

You have an include statement inside a role but when the playbook is running on Vagrant, that path doesn't exist!!

Tree:

```
├── playbook.yml
└── roles
    ├── base
    │   ├── README.md
    │   ├── defaults
    │   │   └── main.yml
    │   ├── files
    │   ├── handlers
    │   │   └── main.yml
    │   ├── meta
    │   │   └── main.yml
    │   ├── tasks
    │   │   ├── main.yml
    │   │   ├── setup_debian.yml
    │   │   └── setup_rhel.yml
    │   ├── templates
    │   └── vars
    │       └── main.yml
```

In `tasks/main.yml` we have:

```yml
- name: Trying to update base installation on RedHat
  include: setup_rhel.yml
  when: ansible_os_family == 'RedHat'

- name: Trying to update base installation on Debian
  include: setup_debian.yml
  when: ansible_os_family == 'Debian'
```
If you run the `playbook.yml` in a Vagrant box, you could see this error message:
```
FAILED! => {"failed": true, "reason": "the file_name '/Users/vicente/vagrant/ansible/playbooks/setup_debian.yml' does not exist, or is not readable"}
```
Well, this is the new `tasks/main.yml` to solve it:

```yml
---
# Include OS-specific installation tasks.
- name: Trying to update base installation on RedHat
  include: "{{ role_path }}/tasks/setup_rhel.yml"
  when: ansible_os_family == 'RedHat'

- name: Trying to update base installation on Debian
  include: "{{ role_path }}/tasks/setup_debian.yml"
  when: ansible_os_family == 'Debian'
```

