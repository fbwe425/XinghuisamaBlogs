---
title: "fbwe425.github.io — Personal Developer Homepage"
date: "2026-08-31 09:00:00"
description: "Personal portfolio site with animated starfield background. Zero frameworks — just HTML, CSS, JavaScript."
cover: "https://opengraph.githubassets.com/1/fbwe425/fbwe425.github.io"
tags: ["HTML", "CSS", "GitHub Pages", "Portfolio"]
---

# 🚀 fbwe425.github.io

> ☁️ Personal homepage — **serverless developer portfolio**

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0a0e1a)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

My personal portfolio site, built with **zero frameworks** — just clean HTML, CSS and a sprinkle of JavaScript. Deployed on **GitHub Pages** for free. ⚡

**🔗 Live: https://fbwe425.github.io/**

---

## ✨ Features

- 🌌 **Animated starfield** background (pure Canvas, no dependencies)
- 🎨 **Dark theme** with Cloudflare-orange & edge-computing-teal accents
- 📱 **Fully responsive** — works great on mobile, tablet and desktop
- 🧭 **Smooth-scroll** single-page navigation
- 🛠️ **Tech-stack showcase** — Cloudflare Workers, R2, Vercel, Hono, Next.js, Astro, Vue.js, Hugo, D1/KV, Upstash, Neon, TypeScript, Rust
- 💬 **Contact section** — GitHub / Twitter / Email, one click away
- 🌐 **Bilingual** — EN / 中文 toggle with localStorage persistence
- 🚀 **Deploys itself** — push to `main` and GitHub Pages rebuilds automatically

---

## 📂 Featured Projects

This site showcases my serverless-focused projects:

| Project | Description |
|---------|-------------|
| **[blog-cms](https://github.com/fbwe425/blog-cms)** | Hugo + Decap CMS blog with admin dashboard, dark/light theme, full-text search |
| **[AueXUE](https://github.com/fbwe425/AueXUE)** | Dynamic blog on Cloudflare R2 + D1 with Obsidian plugin |

---

## 🗂️ Project structure

```
fbwe425.github.io/
├── index.html   # The entire site — content + styles + animation
├── README.md    # You are here
└── LICENSE      # MIT License
```

The whole site lives in a single `index.html` file (styles are embedded via `<style>`, the starfield via inline `<script>`). That's the beauty of it — **no build step, no dependencies, no node_modules**. 🙌

---

## 🛠️ How to run locally

```bash
# Option 1: Python
python3 -m http.server 8000
# → open http://localhost:8000

# Option 2: Node.js
npx serve .
```

Or just double-click `index.html` — it's fully static, no server needed.

---

## ✏️ Customize it

| What you want to change | Where |
|------------------------|-------|
| **Your name / title** | `index.html` — `<h1>` in the hero section |
| **Bio / subtitle** | `index.html` — `.subtitle` |
| **Tech stack items** | `index.html` — `.stack-grid` block |
| **Projects section** | `index.html` — `#projects` section |
| **Colors** | `index.html` — CSS variables in `:root` (`--accent`, `--accent2`, ...) |
| **Contact links** | `index.html` — `#contact` section |
| **Starfield density** | `index.html` — `length: 160` in the script |

After editing, commit & push to `main` — GitHub Pages picks it up automatically.

---

## 🌐 Deployment

This repo is served via [GitHub Pages](https://pages.github.com/) from the `main` branch at the repo root.

Since the repo is named `fbwe425.github.io`, the site is automatically available at **https://fbwe425.github.io/** — no extra configuration needed.

---

## 📄 License

[MIT](LICENSE) — use it, tweak it, make it yours. 🎉

---

*Built with ❤️ and the Cloudflare ☁️ spirit — "The best server is the one you never have to manage."*
