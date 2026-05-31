---
title: Puzzmo Project
description: Using Astro and the ATProtocol to make a "live" updating page
date: 2026-05-30
tags: ["mytungsten", "puzzmo", "development", "astro", "atproto"]
category: Web Tech
---

It feels like a lot in technology is kind of weird right now with AI tools coming out every single day, one piece of technology that does excite me is the [ATProtocol](https://atproto.com). The original scope of the ATProtocol was to be the basis of Bluesky, but it continues to expand into a space that could let it be the home to all of your social data without locking it into a specific service. I have been looking for something to tinker with it for awhile now, but finally something realitively easy came along.

Before getting into the details about ATProtocol, I need to mention that MyTungsten has been running on the [Astro framework](https://astro.build) for awhile now. Astro is a great static site tool, but it also continues to expand and grow. One of the relatively new features is called [Live Collections](https://docs.astro.build/en/guides/content-collections/#live-content-collections). With supported hosts, you can build your static site as normal, but then have one page be more dynamic. For MyTungsten, almost everything is fine being staticly generated, but for this project I needed to have it refresh in near realtime. Live Collections is a perfect fit.

Last thing to mention, I started playing more games on [Puzzmo](https://www.puzzmo.com/today/). Think of it as similar to NY Times Games, but done by independent creators with great design taste. With your account, there is a feature to sync your [streak data to your Bluesky profile](https://blog.puzzmo.com/posts/2026/03/02/atproto/). You can also let them add badges to your account when syncing it. When syncing this data to my Bluesky account, it also becomes available to access in other applications.

So, putting all of this together, I now have a Live Collection that reads Puzzmo streak data from my Bluesky profile and shows it in near realtime on my [Puzzmo project page](/projects/puzzmo). The only real hangup with this was having to move from Cloudflare Pages to Cloudflare Workers, but with Astro now a project owned by Cloudflare, it wasn't too tricky to make the change.