---
title: "AueXUE — Full-Stack Dynamic Blog on Cloudflare"
date: "2026-08-27 15:00:00"
description: "A fully dynamic blog built entirely on Cloudflare's ecosystem — Workers, D1 database, R2 storage, and Pages. No traditional server needed."
cover: "https://opengraph.githubassets.com/1/fbwe425/AueXUE"
tags: ["Vue", "Cloudflare Workers", "D1", "Serverless", "Full Stack"]
---

## Project Overview

**AueXUE** is an experiment in building a genuinely dynamic blog using only Cloudflare's free-tier products.

- 🔗 **Repo:** [fbwe425/AueXUE](https://github.com/fbwe425/AueXUE)

## The Cloudflare-Only Stack

| Component | Cloudflare Product |
|---|---|
| Frontend | Cloudflare Pages |
| API layer | Cloudflare Workers |
| Database | Cloudflare D1 (SQLite at edge) |
| File storage | Cloudflare R2 |
| CDN | Cloudflare global network |

## Why This Matters

Most "serverless" blogs are actually just static sites — they can't do dynamic things like user comments, real-time data, or personalized content without an external service.

AueXUE proves you can have a **truly dynamic** application — reads and writes to a real database, serves personalized content — all without leaving Cloudflare's ecosystem, and all within the free tier.

## Frontend: Vue 3

The frontend is built with **Vue 3** and the Composition API, keeping the bundle lean and the developer experience smooth. Deployed to Cloudflare Pages for automatic HTTPS and global CDN distribution.

## Key Insight

Cloudflare D1 runs SQLite at the network edge. This means your database queries run geographically close to your users — typically under 10ms round-trip — without any infrastructure to manage.
