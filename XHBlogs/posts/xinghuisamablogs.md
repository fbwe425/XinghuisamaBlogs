---
title: "XinghuisamaBlogs — Glassmorphism Next.js Blog"
date: "2026-08-31 12:00:00"
description: "A gorgeous Next.js blog system with glassmorphism UI, Markdown support, and a built-in admin console — now deployed on GitHub Pages."
cover: "https://opengraph.githubassets.com/1/fbwe425/XinghuisamaBlogs"
tags: ["Next.js", "TypeScript", "GitHub Pages", "Open Source"]
---

## Project Overview

**XinghuisamaBlogs** is a high-quality personal blog system built with Next.js 16 and React 19, featuring a stunning glassmorphism (frosted glass) design language.

- 🔗 **Repo:** [fbwe425/XinghuisamaBlogs](https://github.com/fbwe425/XinghuisamaBlogs)
- 🌐 **Live Demo:** [fbwe425.github.io/XinghuisamaBlogs](https://fbwe425.github.io/XinghuisamaBlogs/)

## Key Features

- **Glassmorphism UI** — frosted glass cards, dynamic background blur
- **Markdown writing** — full GFM + KaTeX math + syntax highlighting
- **Static export** — deployed to GitHub Pages via GitHub Actions
- **Mobile responsive** — adapted for all screen sizes
- **Built-in admin console** — local draft management, image hosting config

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 + React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Deployment | GitHub Actions → GitHub Pages |
| Editor | Tiptap rich text + Markdown |

## Deployment

The CI/CD pipeline uses GitHub Actions to build a fully static export and push to the `gh-pages` branch on every push to `main`. No server required — runs entirely on free infrastructure.

```yaml
- name: Build
  run: npm run build
  # output: 'export' → generates /out directory
```

This project is a fork of the original XinghuisamaBlogs. The deployment configuration, GitHub Actions workflow, and personalization were set up independently.
