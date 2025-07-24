import type { Metadata } from 'next';
import { quickLinks, featuredTools, allTools, getToolsBySubcategory, getStatistics } from '@/lib/data';
import ToolCard from '@/components/ToolCard';
import SearchBox from '@/components/SearchBox';
import SearchResults from '@/components/SearchResults';

export const metadata: Metadata = {
  title: 'WebDev - Developer Workstation',
  description: '集成最前沿的开发工具与资源，打造专属你的编程宇宙',
  keywords: ['开发工具', '前端开发', '后端开发', '开发者资源', '项目模板', '代码托管', '域名注册'],
};

interface HomePageProps {
  searchParams?: {
    search?: string;
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const stats = getStatistics();
  const searchQuery = searchParams?.search || '';

  // 如果有搜索查询，显示搜索结果页面
  if (searchQuery) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 顶部导航 */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo 和标题 */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">WebDev</h1>
                  <span className="ml-2 text-sm text-gray-600">Developer Workstation</span>
                </a>
              </div>
              
              {/* 中间搜索框 */}
              <div className="flex-1 max-w-lg mx-8">
                <SearchBox placeholder="搜索工具/模板/资讯..." />
              </div>
              
              {/* 导航菜单 */}
              <nav className="hidden md:flex space-x-8">
                <a href="/#tools" className="text-gray-700 hover:text-gray-900 transition-colors">工具库</a>
                <a href="/#templates" className="text-gray-700 hover:text-gray-900 transition-colors">模板</a>
                <a href="/#research" className="text-gray-700 hover:text-gray-900 transition-colors">调研</a>
                <a href="/#news" className="text-gray-700 hover:text-gray-900 transition-colors">资讯</a>
              </nav>
            </div>
          </div>
        </header>

        {/* 搜索结果 */}
        <SearchResults searchQuery={searchQuery} />

        {/* 页脚 */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-6 text-sm text-gray-500">
                <a href="/feedback" className="hover:text-gray-700">意见反馈</a>
                <a href="/about" className="hover:text-gray-700">关于我们</a>
                <a href="/mobile" className="hover:text-gray-700">移动版</a>
              </div>
              <div className="text-sm text-gray-400">
                © 2024 WebDev导航站 - 让开发更高效
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // 默认首页内容
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo 和标题 */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">WebDev</h1>
              <span className="ml-2 text-sm text-gray-600">Developer Workstation</span>
            </div>
            
            {/* 中间搜索框 */}
            <div className="flex-1 max-w-lg mx-8">
              <SearchBox placeholder="搜索工具/模板/资讯..." />
            </div>
            
            {/* 导航菜单 */}
            <nav className="hidden md:flex space-x-8">
              <a href="#tools" className="text-gray-700 hover:text-gray-900 transition-colors">工具库</a>
              <a href="#templates" className="text-gray-700 hover:text-gray-900 transition-colors">模板</a>
              <a href="#research" className="text-gray-700 hover:text-gray-900 transition-colors">调研</a>
              <a href="#news" className="text-gray-700 hover:text-gray-900 transition-colors">资讯</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 主标题区域 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            开发者 工作台
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            集成最前沿的开发工具与资源，打造专属你的编程宇宙
          </p>
          
          {/* 统计信息 */}
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>共收录 {stats.totalTools} 个工具</span>
            <span>•</span>
            <span>涵盖 {stats.totalCategories} 个分类</span>
            <span>•</span>
            <span>实时更新</span>
          </div>
        </div>
      </section>

      {/* 快速访问 */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速访问</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl mr-3">{link.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{link.name}</div>
                  <div className="text-xs text-gray-500">{link.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 热门推荐 */}
      <section id="featured" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">🔥</span>
            <h3 className="text-2xl font-bold text-gray-900">热门推荐</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 开发工具 */}
      <section id="tools" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">🛠️</span>
            <h3 className="text-2xl font-bold text-gray-900">开发工具</h3>
          </div>

          {/* 需求调研 */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              需求调研
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('research').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* 域名服务 */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
              域名服务
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('domains').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* 托管平台 */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              托管平台
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('hosting').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* 数据后台 */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">
              数据后台
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('backend').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 竞品调研 */}
      <section id="research" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">📊</span>
            <h3 className="text-2xl font-bold text-gray-900">竞品调研</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getToolsBySubcategory('competitive-research').map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 项目模板 */}
      <section id="templates" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">📁</span>
            <h3 className="text-2xl font-bold text-gray-900">项目模板</h3>
          </div>

          {/* React/Next.js */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
              React/Next.js
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('react-templates').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* 全栈SaaS */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
              全栈SaaS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('saas-templates').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* 导航站模板 */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              导航站模板
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsBySubcategory('nav-templates').map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 开发者资讯 */}
      <section id="news" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">📰</span>
            <h3 className="text-2xl font-bold text-gray-900">开发者资讯</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getToolsBySubcategory('dev-news').map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="/feedback" className="hover:text-gray-700">意见反馈</a>
              <a href="/about" className="hover:text-gray-700">关于我们</a>
              <a href="/mobile" className="hover:text-gray-700">移动版</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 WebDev导航站 - 让开发更高效
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 