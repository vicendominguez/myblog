---
title: " Why You Should Think Twice Before Running `curl | bash`"
date: 2020-04-04T17:21:16+02:00
draft: false 
toc: false
images:
tags:
    - linux
    - packages
    - rpm
    - repo
    - deb
---

We've all been there. You find a cool new tool, and the installation instructions say:

```bash
curl -sSL https://install.example.com | bash
```

It's simple. It's quick. It works. So why do so many experienced developers cringe when they see this pattern?

## The Allure (and Danger) of One-Line Installs

There's no denying the convenience. No adding PPAs, no hunting for the right `.deb` or `.rpm` file, no wrestling with build dependencies. Just one command, and you're up and running.

But this convenience comes at a cost - one that isn't always obvious until something goes wrong.

## What's Actually Happening When You Pipe to Bash?

When you run `curl | bash`, you're essentially saying:

1. "Download some code from the internet - I don't need to see it first."
2. "Immediately execute that code with full permissions on my system."
3. "Trust that everything will go exactly as planned."

This would be like seeing a USB drive in a parking lot and immediately plugging it into your work computer to see what's on it.

## The Hidden Costs of Convenience

### 1. Security Theater

Many projects will assure you their install script is safe. But how do you know?

- Is the connection using HTTPS? (Many still don't!)
- Is the script signed? (Almost never.)
- Does the domain have a good security history?
- What exactly is the script doing on your system?

Unlike package managers which verify signatures and checksums, `curl | bash` gives you no such guarantees.

### 2. The Update Paradox

Six months from now, when you need to update:

- Will you remember how you installed it?
- Will the same install script handle upgrades cleanly?
- Will the server still be online?

Package managers maintain databases of what's installed and how to update them. Random install scripts? Not so much.

### 3. The Leftovers Problem

When you eventually want to remove the software:

- Where did it put all its files?
- What system configurations did it modify?
- What dependencies did it install that are now orphaned?

With traditional packages, `apt remove` or `dnf erase` cleans everything up. With install scripts, you're often left playing detective.

## When Might This Be Acceptable?

There are some cases where `curl | bash` might be reasonable:

- In a disposable container or VM
- For development tools in your home directory (using `~/.local`)
- When the project provides a verified checksum or signature
- When you've actually read the script first

Even then, consider alternatives first.

## Better Ways to Install Software

1. **Check your distro's repositories first** - Even if something isn't in main repos, it might be in:
   - Ubuntu PPAs
   - Fedora COPR
   - Arch AUR

2. **Use language-specific package managers** when appropriate:
   - `pip install --user` for Python
   - `cargo install` for Rust
   - `npm install -g` for Node.js

3. **Download and verify releases manually** - At least this way you can:
   - Check signatures
   - Inspect what you're installing
   - Know exactly where files are going

4. **Use containers** - Docker, Podman, or even `toolbox` can keep your host system clean.

## The Bottom Line

While `curl | bash` might save you two minutes today, it could cost you hours of troubleshooting down the road. In the world of software installation, the slightly longer path is often the smarter one.

Next time you see that tempting one-liner, ask yourself: is this convenience worth the potential headache later? Your future self might thank you for taking the extra time to do it right.
