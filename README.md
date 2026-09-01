# F. B. Weber's Dev Space

一个基于 **Next.js 16、React 19 和 TypeScript** 的个人博客站点。当前版本已针对 `fbwe425` 的 GitHub 项目和个人资料完成定制，并通过 GitHub Actions 自动发布到 GitHub Pages。

在线地址：**<https://fbwe425.github.io/XinghuisamaBlogs/>**

[![Deploy to GitHub Pages](https://github.com/fbwe425/XinghuisamaBlogs/actions/workflows/deploy.yml/badge.svg)](https://github.com/fbwe425/XinghuisamaBlogs/actions/workflows/deploy.yml)

## 项目特点

- Glassmorphism（毛玻璃）视觉风格与响应式布局
- 首页个人资料卡、动态背景、项目展示和文章归档
- Markdown 文章渲染
- GitHub 项目文章与项目矩阵
- 关于、照片墙、杂谈、说说、友链等页面
- 中英文导航切换，选择保存在浏览器 `localStorage`
- 深色主题与动态视觉效果
- GitHub Actions 自动构建并部署到 GitHub Pages
- GitHub Pages 静态导出，无需额外服务器

## 技术栈

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js / React Three Fiber
- unified / remark / rehype Markdown 处理链
- KaTeX 数学公式与代码高亮

## 项目结构

```text
XinghuisamaBlogs/
├── XHBlogs/
│   ├── app/                  # Next.js App Router 页面
│   ├── components/           # 页面组件与全局组件
│   ├── data/                 # 项目、友链、相册等数据
│   ├── posts/                # Markdown 文章
│   ├── chatters/             # 杂谈内容
│   ├── moments/              # 说说内容
│   ├── public/               # 静态资源
│   ├── siteConfig.ts         # 站点名称、头像、简介和社交链接
│   ├── package.json
│   └── next.config.ts
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages 自动部署
└── README.md
```

## 本地开发

要求：Node.js 20 或更高版本、npm、Git。

```bash
cd XHBlogs
npm ci
npm run dev
```

打开 <http://localhost:3000> 查看开发站点。

生产构建：

```bash
npm run build
npm run start
```

## 配置个人信息

主要配置位于 `XHBlogs/siteConfig.ts`：

- `title`：网站标题
- `authorName`：博主名称
- `bio`：首页简介
- `avatarUrl`：头像地址
- `social`：GitHub、邮箱等社交链接
- `themeColors`：渐变背景颜色
- `chatterTitle` / `chatterDescription`：杂谈页信息
- `geminiConfig`：服务端部署时可使用的 AI 配置

项目列表位于 `XHBlogs/data/projects.ts`，文章位于 `XHBlogs/posts/`。文章使用 YAML front matter，例如：

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

## GitHub Pages 部署

本仓库的 `.github/workflows/deploy.yml` 会在 `main` 分支中 `XHBlogs/**` 内容发生变化时自动运行，也支持在 GitHub Actions 页面手动执行。

工作流会：

1. 使用 Node.js 安装依赖
2. 移除 GitHub Pages 不支持的服务端 API routes
3. 临时使用静态导出配置
4. 执行 `npm run build`
5. 将 `XHBlogs/out` 发布到 `gh-pages` 分支

GitHub Pages 站点：

<https://fbwe425.github.io/XinghuisamaBlogs/>

### GitHub Pages 的功能边界

GitHub Pages 只提供静态文件，不能运行 Next.js API routes。因此以下依赖服务端运行时的功能在 GitHub Pages 上不可用或需要外部服务：

- AI 对话 API
- 天气 API
- 音乐后端代理
- GitHub OAuth / 评论后端代理

如需完整使用这些服务端功能，应将项目部署到支持 Next.js Server Functions 的平台，例如 Vercel，并根据平台配置环境变量。

## 内容与隐私

本仓库用于展示 `fbwe425` 的个人项目和开发内容。不要将 API token、OAuth secret、数据库凭据或其他敏感信息提交到 Git 仓库；请使用 GitHub Actions Secrets 或部署平台的环境变量。

## 许可证

项目许可证请参阅 [LICENSE](LICENSE)。

## 相关链接

- GitHub：<https://github.com/fbwe425>
- 仓库：<https://github.com/fbwe425/XinghuisamaBlogs>
- 在线博客：<https://fbwe425.github.io/XinghuisamaBlogs/>
