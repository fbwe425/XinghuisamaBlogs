// data/projects.ts

export type Project = {
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  tags: string[];
};

export const projectsData: Project[] = [
  {
    "id": "blog-cms",
    "name": "blog-cms",
    "githubUrl": "https://github.com/fbwe425/blog-cms",
    "description": "基于 Hugo 和 Decap CMS 的博客系统，提供管理面板、深色/浅色主题和全文搜索，可部署到 Cloudflare Pages、Vercel 或 GitHub Pages。",
    "icon": "📝",
    "tags": ["Hugo", "CMS", "Cloudflare Pages", "JavaScript"]
  },
  {
    "id": "auexue",
    "name": "AueXUE",
    "githubUrl": "https://github.com/fbwe425/AueXUE",
    "description": "完全基于 Cloudflare 构建的动态博客，使用 Workers、D1 数据库和 R2 存储，并支持 Obsidian 一键发布。",
    "icon": "☁️",
    "tags": ["Vue", "Cloudflare Workers", "D1", "R2"]
  },
  {
    "id": "homepage",
    "name": "fbwe425.github.io",
    "githubUrl": "https://github.com/fbwe425/fbwe425.github.io",
    "description": "带动态星空背景的个人主页，不依赖框架，仅使用 HTML、CSS 和 JavaScript。",
    "icon": "🌌",
    "tags": ["HTML", "CSS", "GitHub Pages"]
  },
  {
    "id": "xhblogs",
    "name": "XinghuisamaBlogs",
    "githubUrl": "https://github.com/fbwe425/XinghuisamaBlogs",
    "description": "基于 Next.js 16 的毛玻璃风格博客，通过 GitHub Actions 自动部署，并针对个人使用进行了定制。",
    "icon": "✨",
    "tags": ["Next.js", "React", "TypeScript", "GitHub Actions"]
  },
];
