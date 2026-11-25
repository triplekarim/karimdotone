---
# DRAFT: written from your notes, edit freely
title: My Fedora setup
description: Fedora, KDE, Firefox and fish. What I run and why I like it.
pubDate: 2026-10-14
tags: [linux, tooling]
---

I've been on Fedora for a while now and I don't see myself switching. Here's what my setup looks like.

## Desktop

KDE Plasma. I tried a few desktops and kept coming back to it. It does what I want, and if it doesn't, there's a setting for it.

## Browser

Firefox with uBlock Origin. That's pretty much the whole list.

## Shell

fish with the tide prompt. Autosuggestions out of the box, and tide shows the git branch and status without me configuring anything.

```fish
sudo dnf install fish
fisher install IlanCosman/tide@v6
chsh -s /usr/bin/fish
```

## Quick overview

| What | Pick |
| --- | --- |
| OS | Fedora Workstation |
| Desktop | KDE Plasma |
| Browser | Firefox + uBlock Origin |
| Shell | fish + tide |

Nothing fancy, and it stays out of the way.
