---
# DRAFT: written from your notes, edit freely
title: What's running on my Pi 5
description: Home Assistant, Jellyfin and an e-ink dashboard on a Raspberry Pi 5.
pubDate: 2026-09-02
tags: [self-hosting, homelab]
---

There's a Raspberry Pi 5 in the corner that does more than it probably should. Everything runs in Docker, and I manage it with Portainer.

## The stacks

- **Home Assistant:** automations, from small to slightly over-engineered
- **Jellyfin:** my own media server instead of yet another subscription
- **LaraPaper:** drives an e-ink screen that shows the stuff I want to see at a glance

## Why self-host

Mostly because I like knowing where my data is. And it's fun to tinker with.

## Setup

Portainer makes it easy to keep track of everything without SSHing in all the time:

```sh
docker volume create portainer_data
docker run -d -p 9443:9443 --name portainer --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data portainer/portainer-ce:latest
```

More on the individual stacks in later posts.
