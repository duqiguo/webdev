import { Tool, Category, QuickLink } from './types';

// 快速访问链接
export const quickLinks: QuickLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com',
    icon: '🐙',
    description: '代码托管平台'
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    icon: '📚',
    description: '开发者问答社区'
  },
  {
    id: 'mdn',
    name: 'MDN',
    url: 'https://developer.mozilla.org',
    icon: '📖',
    description: 'Web开发文档'
  },
  {
    id: 'google',
    name: 'Google',
    url: 'https://www.google.com',
    icon: '🔍',
    description: '搜索引擎'
  }
];

// 热门推荐工具
export const featuredTools: Tool[] = [
  {
    id: 'github-featured',
    name: 'GitHub',
    description: '全球最大的代码托管平台',
    url: 'https://github.com',
    icon: '🐙',
    tags: ['🔥 热门', '免费'],
    category: '托管平台',
    featured: true,
    free: true,
    pricing: 'freemium',
    details: '全球最大的代码托管平台，支持版本控制和协作开发'
  },
  {
    id: 'vercel-featured',
    name: 'Vercel',
    description: '现代前端部署平台',
    url: 'https://vercel.com',
    icon: '▲',
    tags: ['🔥 热门', '新兴'],
    category: '托管平台',
    featured: true,
    pricing: 'freemium',
    details: '现代前端部署平台，支持Next.js等框架，全球CDN加速'
  },
  {
    id: 'google-suggest',
    name: '谷歌下拉词',
    description: 'SEO关键词研究工具',
    url: 'https://keywordtool.io/google',
    icon: '🔍',
    tags: ['免费', 'SEO'],
    category: '需求调研',
    featured: true,
    free: true,
    pricing: 'free',
    details: '批量获取谷歌自动完成关键词，用于SEO和内容规划'
  },
  {
    id: 'porkbun',
    name: 'Porkbun',
    description: '低价域名注册商',
    url: 'https://porkbun.com',
    icon: '🐷',
    tags: ['低价', '推荐'],
    category: '域名服务',
    featured: true,
    pricing: 'paid',
    details: '极低价域名注册商，提供优质的域名管理服务'
  }
];

// 所有工具数据
export const allTools: Tool[] = [
  ...featuredTools,
  
  // 需求调研工具
  {
    id: 'toolify',
    name: 'Toolify 榜单',
    description: 'AI工具收益排名统计',
    url: 'https://www.toolify.ai',
    icon: '📊',
    tags: ['AI'],
    category: 'dev-tools',
    subcategory: 'research',
    pricing: 'freemium'
  },
  {
    id: 'ahrefs-keyword',
    name: '关键词难度分析',
    description: 'Ahrefs专业SEO分析工具',
    url: 'https://ahrefs.com/keyword-difficulty',
    icon: '📈',
    tags: ['SEO'],
    category: 'dev-tools',
    subcategory: 'research',
    pricing: 'paid'
  },

  // 域名服务
  {
    id: 'lean-domain',
    name: 'Lean Domain Search',
    description: '快速域名推荐生成',
    url: 'https://leandomainsearch.com',
    icon: '🔍',
    tags: ['免费'],
    category: 'dev-tools',
    subcategory: 'domains',
    pricing: 'free'
  },
  {
    id: 'instant-domain',
    name: 'Instant Domain Search',
    description: '25毫秒极速域名搜索',
    url: 'https://instantdomainsearch.com',
    icon: '⚡',
    tags: ['极速'],
    category: 'dev-tools',
    subcategory: 'domains',
    pricing: 'free'
  },

  // 托管平台
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: '全球性云平台，提供CDN、安全防护和边缘计算服务',
    url: 'https://www.cloudflare.com',
    icon: '☁️',
    tags: ['免费套餐', '全球加速'],
    category: 'dev-tools',
    subcategory: 'hosting',
    pricing: 'freemium'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    description: 'JAMstack应用托管',
    url: 'https://www.netlify.com',
    icon: '🌐',
    tags: ['JAMstack'],
    category: 'dev-tools',
    subcategory: 'hosting',
    pricing: 'freemium'
  },
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    description: '免费静态网站托管',
    url: 'https://pages.github.com',
    icon: '📄',
    tags: ['免费'],
    category: 'dev-tools',
    subcategory: 'hosting',
    pricing: 'free'
  },

  // 数据后台
  {
    id: 'google-search-console',
    name: 'Google Search Console',
    description: '谷歌免费服务工具，监测网站在搜索结果中的表现',
    url: 'https://search.google.com/search-console',
    icon: '📊',
    tags: ['免费', 'SEO监测'],
    category: 'dev-tools',
    subcategory: 'backend',
    pricing: 'free'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: '网站和应用数据分析工具，深入了解访客行为，优化营销效果',
    url: 'https://analytics.google.com',
    icon: '📈',
    tags: ['免费', '流量分析'],
    category: 'dev-tools',
    subcategory: 'backend',
    pricing: 'free'
  },
  {
    id: 'bing-webmaster',
    name: 'Bing网站管理员',
    description: '必应搜索引擎URL提交工具，提升网站在必应的曝光度',
    url: 'https://www.bing.com/webmasters',
    icon: '🔍',
    tags: ['免费'],
    category: 'dev-tools',
    subcategory: 'backend',
    pricing: 'free'
  },

  // 竞品调研
  {
    id: 'aitdk',
    name: 'AITDK',
    description: '查看流量和网页关键词',
    url: 'https://aitdk.com',
    icon: '📊',
    tags: ['推荐'],
    category: 'competitive-research',
    subcategory: 'competitive-research',
    pricing: 'freemium'
  },
  {
    id: 'ahrefs-free',
    name: 'Ahrefs Free Tools',
    description: '查看外链',
    url: 'https://ahrefs.com/free-seo-tools',
    icon: '🔗',
    tags: ['免费', 'SEO'],
    category: 'competitive-research',
    subcategory: 'competitive-research',
    pricing: 'free'
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    description: '查看网站关键词',
    url: 'https://www.semrush.com',
    icon: '🎯',
    tags: ['SEO', '专业'],
    category: 'competitive-research',
    subcategory: 'competitive-research',
    pricing: 'paid'
  },

  // React/Next.js 模板
  {
    id: 'nextjs-boilerplate',
    name: 'Next.js Boilerplate',
    description: 'Next.JS 15模板',
    url: 'https://github.com/ixartz/Next-js-Boilerplate',
    icon: '⚛️',
    tags: ['最新'],
    category: 'project-templates',
    subcategory: 'react-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'saas-boilerplate',
    name: 'SaaS Boilerplate',
    description: 'Next.JS + Shadcn UI',
    url: 'https://github.com/mickasmt/next-saas-stripe-starter',
    icon: '🚀',
    tags: ['🔥'],
    category: 'project-templates',
    subcategory: 'react-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'nextjs-landing',
    name: 'NextJS Landing Page',
    description: '免费NextJS着陆页模板',
    url: 'https://github.com/leoMirandaa/next-landing-vpn',
    icon: '🎨',
    tags: ['免费'],
    category: 'project-templates',
    subcategory: 'react-templates',
    pricing: 'free',
    openSource: true
  },

  // 全栈SaaS模板
  {
    id: 'open-saas',
    name: 'Open SaaS',
    description: 'React & Node.js全栈',
    url: 'https://github.com/wasp-lang/open-saas',
    icon: '🔧',
    tags: ['推荐'],
    category: 'project-templates',
    subcategory: 'saas-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'saasfly',
    name: 'SaasFly',
    description: 'NextJS SaaS模板',
    url: 'https://github.com/saasfly/saasfly',
    icon: '✈️',
    tags: ['新兴'],
    category: 'project-templates',
    subcategory: 'saas-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'supanuxt',
    name: 'SupaNuxt SaaS',
    description: 'Nuxt3 + Supabase',
    url: 'https://github.com/larbish/supabase-ssg',
    icon: '💚',
    tags: ['Vue'],
    category: 'project-templates',
    subcategory: 'saas-templates',
    pricing: 'free',
    openSource: true
  },

  // 导航站模板
  {
    id: 'fre123',
    name: 'FRE123导航',
    description: '免费导航模板',
    url: 'https://github.com/fre123-com/fre123-info-flow',
    icon: '🧭',
    tags: ['免费'],
    category: 'project-templates',
    subcategory: 'nav-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'webstack',
    name: 'WebStack',
    description: '静态响应式导航',
    url: 'https://github.com/WebStackPage/WebStackPage.github.io',
    icon: '📚',
    tags: ['经典'],
    category: 'project-templates',
    subcategory: 'nav-templates',
    pricing: 'free',
    openSource: true
  },
  {
    id: 'tap4-ai',
    name: 'Tap4 AI WebUI',
    description: 'AI工具目录',
    url: 'https://github.com/6677-ai/tap4-ai-webui',
    icon: '🤖',
    tags: ['AI'],
    category: 'project-templates',
    subcategory: 'nav-templates',
    pricing: 'free',
    openSource: true
  },

  // 开发者资讯
  {
    id: 'reddit-dev',
    name: 'Reddit 子社区',
    description: '开发者社区资源',
    url: 'https://www.reddit.com/r/programming/',
    icon: '💬',
    tags: ['社区'],
    category: 'dev-news',
    subcategory: 'dev-news',
    pricing: 'free'
  },
  {
    id: 'google-seo-guide',
    name: 'Google SEO基础',
    description: 'SEO官方指南',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    icon: '📚',
    tags: ['SEO', '免费'],
    category: 'dev-news',
    subcategory: 'dev-news',
    pricing: 'free'
  },
  {
    id: 'ahrefs-top-sites',
    name: 'Ahrefs热门网站',
    description: '流量趋势分析',
    url: 'https://ahrefs.com/top/',
    icon: '📈',
    tags: ['趋势'],
    category: 'dev-news',
    subcategory: 'dev-news',
    pricing: 'free'
  },
  {
    id: 'indie-500',
    name: '$500/月副业项目',
    description: '独立开发者案例',
    url: 'https://www.indiehackers.com/products?minRevenue=500',
    icon: '💰',
    tags: ['🔥', '创业'],
    category: 'dev-news',
    subcategory: 'dev-news',
    pricing: 'free'
  }
];

// 分类数据
export const categories: Category[] = [
  {
    id: 'dev-tools',
    name: '开发工具',
    icon: '🛠️',
    description: '涵盖需求调研、域名服务、托管平台、数据后台等开发必备工具'
  },
  {
    id: 'competitive-research',
    name: '竞品调研',
    icon: '📊',
    description: '竞品分析和市场调研工具'
  },
  {
    id: 'project-templates',
    name: '项目模板',
    icon: '📁',
    description: '各类项目模板和脚手架'
  },
  {
    id: 'dev-news',
    name: '开发者资讯',
    icon: '📰',
    description: '开发者社区和资讯平台'
  }
];

// 工具函数
export function getToolsBySubcategory(subcategoryId: string): Tool[] {
  return allTools.filter(tool => tool.subcategory === subcategoryId);
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return allTools.filter(tool => tool.category === categoryId);
}

export function getStatistics() {
  return {
    totalTools: allTools.length,
    totalCategories: categories.length,
    featuredTools: featuredTools.length,
    freeTools: allTools.filter(tool => tool.free || tool.pricing === 'free').length,
    lastUpdated: new Date().toISOString()
  };
} 