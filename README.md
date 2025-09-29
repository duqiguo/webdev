# 🛠️ WebDev Tools - 开发者工具导航站

一个面向开发者的工具与资源导航站，聚合「工具库 / 模板 / 调研 / 资讯」，提升查找效率与使用体验。

## 🎯 项目目标

提供简洁高效的导航与搜索体验，帮助开发者快速发现并直达常用资源。

## 🏗️ 技术架构（与当前代码一致）

- **框架**: Next.js 14.x（App Router）
- **语言**: TypeScript 5.x
- **样式**: Tailwind CSS 3.3.x
- **包管理**: npm

> 说明：当前仓库未使用 Turbopack 独立配置；构建与本地开发直接使用 Next 官方脚本。

## 🧩 功能说明（当前已实现）

- **实时搜索联想**：从工具和快速链接中联想匹配，点击直达
- **搜索结果页**：支持分类/价格筛选与排序；展示“快速访问”和“工具”分组
- **分类导航**：首页按子分类网格展示各类资源
- **工具详情页**：展示标签、平台、语言、价格与外链（官网/文档/仓库）
- **响应式设计**：适配桌面/平板/手机
- **深色模式**：跟随系统主题（`prefers-color-scheme`）

> 提示：当前未实现 Ctrl+K 快捷键、在线反馈表单与后端检索服务。

## 📝 开发指南

### 环境要求
- Node.js 18+
- npm 9+

### 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### 常用命令
```bash
# 代码检查（Next 内置 ESLint）
npm run lint

# 类型检查（可选）
npx tsc --noEmit
```

## 🔍 SEO 与分析

- **Meta/Robots**：在 `src/app/layout.tsx` 与页面 `metadata` 配置
- **站点地图 / Robots**：`public/sitemap.xml`、`public/robots.txt`
- **Canonical**：`layout.tsx` 中写死为 `https://www.rdwind.online`，如部署到其他域名请修改
- **Analytics**：已接入 Google Analytics（`G-M89GX20S0G`），如需替换请修改 `layout.tsx`

> 说明：当前仓库未内置 Schema.org 结构化数据与多环境变量切换，后续可按需补充。

## 📱 响应式与设计

### Tailwind 断点（默认）
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🔧 配置文件（实际为 .js）

### Next.js 配置（`next.config.js`）
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
}

module.exports = nextConfig
```

### Tailwind 配置（`tailwind.config.js`）
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
```

## 🚀 部署指南

### Vercel（推荐）
```bash
npm i -g vercel
vercel --prod
```

### 其他平台
- Netlify：常规 Next.js 部署流程
- 传统服务器：使用 `next start` 运行构建产物

## 📚 项目结构（当前实际）

```
src/
├── app/
│   ├── about/              # 关于我们
│   ├── feedback/           # 意见反馈说明页
│   ├── mobile/             # 移动端说明页
│   ├── tool/[id]/          # 工具详情页
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局（含 GA、canonical ）
│   └── page.tsx            # 首页（含搜索入口与各区块）
├── components/
│   ├── SearchBox.tsx       # 搜索框与联想下拉
│   ├── SearchResults.tsx   # 搜索结果页内容（筛选/排序）
│   └── ToolCard.tsx        # 工具卡片
├── hooks/
│   ├── useSearch.ts        # 导出 useSearch 与 useAdvancedSearch（当前未直接接入 UI）
│   ├── useFavorite.ts      # 收藏 Hook（localStorage 持久化）
│   └── （更多 Hook 按需新增）
├── lib/
│   ├── data.ts             # 静态数据源与工具函数
│   └── types.ts            # 类型定义
```

## 🔎 路由与交互概览

- `/?search=关键词`：首页切换为搜索结果视图并渲染 `SearchResults`
- `/tool/[id]`：工具详情页，展示详情与外链
- `about` / `feedback` / `mobile`：信息说明页

> 说明：部分跳转使用 `window.location.href`，后续可替换为 `next/link` 或路由 API 优化体验。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。

---

⭐ 如果这个项目对您有帮助，请为仓库点 Star！
