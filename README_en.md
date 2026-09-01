# F. B. Weber's Dev Space

A personal blog built with **Next.js 16, React 19, and TypeScript**. This version is customized for `fbwe425`, including the account profile, GitHub projects, project articles, and GitHub Pages deployment.

Live site: **<https://fbwe425.github.io/XinghuisamaBlogs/>**

[![Deploy to GitHub Pages](https://github.com/fbwe425/XinghuisamaBlogs/actions/workflows/deploy.yml/badge.svg)](https://github.com/fbwe425/XinghuisamaBlogs/actions/workflows/deploy.yml)

## Features

- Glassmorphism UI with responsive layouts
- Profile card, animated background, project showcase, and archive
- Markdown article rendering
- GitHub project matrix and project-based articles
- About, photos, notes, moments, and links pages
- Chinese/English navigation switcher persisted in `localStorage`
- Dark theme and animated visual effects
- GitHub Actions CI/CD
- Static export for GitHub Pages

## Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js / React Three Fiber
- unified / remark / rehype Markdown pipeline
- KaTeX and syntax highlighting

## Repository layout

```text
XinghuisamaBlogs/
├── XHBlogs/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # Page and global components
│   ├── data/                 # Projects, links, and album data
│   ├── posts/                # Markdown articles
│   ├── chatters/             # Notes content
│   ├── moments/              # Moments content
│   ├── public/               # Static assets
│   ├── siteConfig.ts         # Site identity and social links
│   ├── package.json
│   └── next.config.ts
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages workflow
└── README.md
```

## Local development

Requirements: Node.js 20 or later, npm, and Git.

```bash
cd XHBlogs
npm ci
npm run dev
```

Open <http://localhost:3000> in your browser.

Production build:

```bash
npm run build
npm run start
```

## Customize the site

The main site configuration is in `XHBlogs/siteConfig.ts`:

- `title`: document and site title
- `authorName`: profile name
- `bio`: profile description
- `avatarUrl`: avatar URL
- `social`: GitHub, email, and other links
- `themeColors`: gradient colors
- `chatterTitle` / `chatterDescription`: notes page copy
- `geminiConfig`: optional server-side AI configuration

Projects are stored in `XHBlogs/data/projects.ts`. Articles are stored in `XHBlogs/posts/` and use YAML front matter:

```markdown
---
title: "Article title"
date: "2026-08-31 12:00:00"
description: "Short description"
cover: "https://example.com/cover.png"
tags: ["Next.js", "TypeScript"]
---

Article content...
```

## GitHub Pages deployment

`.github/workflows/deploy.yml` runs when files under `XHBlogs/**` change on `main`, and it can also be started manually from GitHub Actions.

The workflow:

1. Sets up Node.js and installs dependencies
2. Removes server-side API routes unsupported by GitHub Pages
3. Applies a static-export configuration
4. Runs `npm run build`
5. Publishes `XHBlogs/out` to the `gh-pages` branch

Live site:

<https://fbwe425.github.io/XinghuisamaBlogs/>

### GitHub Pages limitations

GitHub Pages serves static files and cannot execute Next.js API routes. Features that require a server runtime are unavailable or need an external service there:

- AI chat API
- Weather API
- Music backend proxy
- GitHub OAuth / comment backend proxy

For full server-side functionality, deploy to a platform supporting Next.js Server Functions, such as Vercel, and configure the required environment variables there.

## Security

Do not commit API tokens, OAuth secrets, database credentials, or other sensitive values. Use GitHub Actions Secrets or deployment-platform environment variables instead.

## License

See [LICENSE](LICENSE).

## Links

- GitHub: <https://github.com/fbwe425>
- Repository: <https://github.com/fbwe425/XinghuisamaBlogs>
- Live blog: <https://fbwe425.github.io/XinghuisamaBlogs/>
