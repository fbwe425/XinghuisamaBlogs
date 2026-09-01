---
title: "blog-cms — Static Blog with Admin Dashboard"
date: "2026-08-28 10:00:00"
description: "A static blog CMS with a full admin dashboard, deployable to Cloudflare Pages, Vercel, or GitHub Pages — zero backend cost."
cover: "https://opengraph.githubassets.com/1/fbwe425/blog-cms"
tags: ["JavaScript", "CMS", "Cloudflare Pages", "Serverless"]
---

## What is blog-cms?

**blog-cms** is a lightweight static blog system with a built-in admin dashboard, designed to run entirely on free hosting platforms.

- 🔗 **Repo:** [fbwe425/blog-cms](https://github.com/fbwe425/blog-cms)

## Design Philosophy

The core idea is simple: **zero server cost, full admin experience.** Traditional CMSes require a backend database and server to manage content. blog-cms flips this — content is managed through a browser-based dashboard and stored as static files.

## Deployment Targets

The project is designed to be drop-in deployable to:

- **Cloudflare Pages** — edge-deployed, global CDN, free tier
- **Vercel** — serverless functions + static hosting
- **GitHub Pages** — pure static, no functions needed

## Why Serverless?

Running a blog shouldn't cost money. Serverless platforms like Cloudflare Workers and Vercel offer generous free tiers that can handle a personal blog's entire traffic load with $0/month in hosting costs.

```
Cloudflare Pages free tier:
  - 500 builds/month
  - Unlimited requests
  - Global CDN
```

This is the philosophy behind the entire project — build real things with free infrastructure.
