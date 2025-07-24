import { allTools } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Tool } from '@/lib/types';

export default function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool: Tool | undefined = allTools.find((t: Tool) => t.id === params.id);
  
  if (!tool) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← 返回首页
            </Link>
            <div className="text-sm text-gray-500">WebDev 工具详情</div>
          </div>
        </div>
      </header>

      {/* 工具详情 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* 工具标题 */}
          <div className="flex items-start gap-4 mb-6">
            {tool.icon && (
              <span className="text-4xl">{tool.icon}</span>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-gray-600">
                {tool.description}
              </p>
              {tool.openSource && (
                <span className="inline-block mt-2 text-sm bg-green-50 text-green-600 border border-green-200 rounded px-3 py-1">
                  开源项目
                </span>
              )}
            </div>
          </div>

          {/* 详细信息 */}
          {tool.details && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">详细介绍</h3>
              <p className="text-gray-700">{tool.details}</p>
            </div>
          )}

          {/* 标签 */}
          {tool.tags && tool.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">标签</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 技术信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 平台 */}
            {tool.platform && tool.platform.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">支持平台</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.platform.map((platform, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 编程语言 */}
            {tool.language && tool.language.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">编程语言</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.language.map((lang, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 价格信息 */}
          {tool.pricing && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">价格</h3>
              <span className={`inline-block text-sm px-3 py-1 rounded border font-medium ${
                tool.pricing === 'free' 
                  ? 'bg-green-50 text-green-600 border-green-200' 
                  : tool.pricing === 'paid' 
                  ? 'bg-red-50 text-red-600 border-red-200' 
                  : 'bg-yellow-50 text-yellow-600 border-yellow-200'
              }`}>
                {tool.pricing === 'free' ? '免费' : tool.pricing === 'paid' ? '付费' : '部分免费'}
              </span>
            </div>
          )}

          {/* 相关链接 */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">相关链接</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                访问官网
              </a>

              {tool.docUrl && (
                <a
                  href={tool.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  查看文档
                </a>
              )}

              {tool.repoUrl && (
                <a
                  href={tool.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  源码仓库
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 