// siteConfig.ts - 你的全站"控制中心"

export const siteConfig = {
  // 1. 网站标题与博主信息
  title: "F. B. Weber 的开发空间",
  faviconUrl: "https://avatars.githubusercontent.com/u/321728159?v=4",
  authorName: "F. B. Weber",
  bio: "独立开发者 · 无服务器技术爱好者 · 使用 Cloudflare Workers、Vercel 和免费技术栈构建项目",

  navTitle: "F. B. Weber",

  navSuffix: "的",

  navAfter: "开发空间",

  // 2. 头像设置
  avatarUrl: "https://avatars.githubusercontent.com/u/321728159?v=4",

  // 3. 网站背景设置
  useGradient: true,
  themeColors: ["#0f2027", "#203a43", "#2c5364", "#1a1a2e"],
  bgImages: [],

  // 4. 文章默认封面图
  defaultPostCover: "https://opengraph.githubassets.com/1/fbwe425",

  // 5. 首页照片墙预览图
  photoWallImage: "https://avatars.githubusercontent.com/u/321728159?v=4",
  cloudMusicIds: [],
  social: {
    github: "fbwe425",
    gitee: "",
    google: "",
    email: "fbwe425@fnosmail.com",
    qq: "",
    wechat: "",
  },
  counts: {
    photos: 0,
  },
  chatterTitle: "开发笔记",
  chatterDescription: "记录无服务器技术、Cloudflare Workers、Vercel 与免费技术栈的开发思考",

  danmakuList: ["无服务器技术就是未来！", "Cloudflare Workers 真香", "部署到边缘节点！", "免费技术栈爱好者 🚀", "公开构建中", "发布它！", "零冷启动", "直接使用 Vercel"],
  gitalkConfig: {
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [""],
  },
  buildDate: "2026-08-27T09:30:53Z",
  footerBadges: [{"name": "Next.js 16", "color": "text-sky-500", "svg": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>"}, {"name": "Cloudflare", "color": "text-orange-400", "svg": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\"/>"}, {"name": "Vercel", "color": "text-white", "svg": "<path d=\"M12 2L2 19.8h20L12 2z\"/>"}],
  icpConfig: {
    name: "",
    link: "",
  },
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "你是一名友好的开发助手，请用中文简洁回答无服务器开发、Cloudflare Workers、Vercel 和现代 Web 开发相关问题。",
    maxOutputTokens: 150,
    temperature: 0.7,
  },
  friendLinkApplyFormat: "名称：F. B. Weber 的开发空间\n介绍：无服务器 · 边缘计算 · 免费技术栈\n链接：https://fbwe425.github.io/\n头像： https://avatars.githubusercontent.com/u/321728159?v=4",
  enableLevelSystem: false,
};
