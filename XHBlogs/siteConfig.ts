// siteConfig.ts - 你的全站"控制中心"

export const siteConfig = {
  // 1. 网站标题与博主信息
  title: "F. B. Weber's Dev Space",
  faviconUrl: "https://avatars.githubusercontent.com/u/321728159?v=4",
  authorName: "F. B. Weber",
  bio: "Independent developer · Serverless enthusiast · Building with Cloudflare Workers, Vercel & free stacks",

  navTitle: "F. B. Weber",

  navSuffix: "'s",

  navAfter: "Dev Space",

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
  chatterTitle: "Dev Notes",
  chatterDescription: "Thoughts on serverless, Cloudflare Workers, Vercel & the free stack",

  danmakuList: ["Serverless is the future!", "Cloudflare Workers FTW", "Deploy to the edge!", "Free stack gang 🚀", "Building in public", "Ship it!", "Zero cold starts", "Just use Vercel"],
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
    systemPrompt: "You are a helpful developer assistant. Answer questions about serverless development, Cloudflare Workers, Vercel, and modern web development concisely.",
    maxOutputTokens: 150,
    temperature: 0.7,
  },
  friendLinkApplyFormat: "Name: F. B. Weber's Dev Space\nIntro: Serverless · Edge computing · Free stacks\nLink: https://fbwe425.github.io/XinghuisamaBlogs/\nAvatar: https://avatars.githubusercontent.com/u/321728159?v=4",
  enableLevelSystem: false,
};
