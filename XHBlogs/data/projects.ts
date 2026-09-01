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
    "description": "Hugo + Decap CMS blog system with admin dashboard, dark/light theme, full-text search. Deployable to Cloudflare Pages, Vercel or GitHub Pages.",
    "icon": "📝",
    "tags": ["Hugo", "CMS", "Cloudflare Pages", "JavaScript"]
  },
  {
    "id": "auexue",
    "name": "AueXUE",
    "githubUrl": "https://github.com/fbwe425/AueXUE",
    "description": "Dynamic blog powered entirely by Cloudflare — Workers, D1 database, R2 storage. With Obsidian plugin for one-click publishing.",
    "icon": "☁️",
    "tags": ["Vue", "Cloudflare Workers", "D1", "R2"]
  },
  {
    "id": "homepage",
    "name": "fbwe425.github.io",
    "githubUrl": "https://github.com/fbwe425/fbwe425.github.io",
    "description": "Personal portfolio site with animated starfield background. Zero frameworks — just HTML, CSS, and JavaScript.",
    "icon": "🌌",
    "tags": ["HTML", "CSS", "GitHub Pages"]
  },
  {
    "id": "xhblogs",
    "name": "XinghuisamaBlogs",
    "githubUrl": "https://github.com/fbwe425/XinghuisamaBlogs",
    "description": "Next.js 16 glassmorphism blog with GitHub Actions CI/CD. Forked and customized for personal use.",
    "icon": "✨",
    "tags": ["Next.js", "React", "TypeScript", "GitHub Actions"]
  },
];
