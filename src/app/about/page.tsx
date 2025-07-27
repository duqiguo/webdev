export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">项目介绍</h2>
              <p className="text-gray-600">
                WebDev 开发者工具导航站致力于为开发者整合最前沿的开发工具、模板、调研和资讯，
                帮助开发者高效成长与创新。我们精心筛选和分类各类开发工具，
                让开发者能够快速找到适合的工具，提升开发效率。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">我们的使命</h2>
              <p className="text-gray-600">
                打造专属开发者的编程宇宙，集成最前沿的开发工具与资源，
                让每一位开发者都能在这里找到适合自己的工具，提升开发体验   。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">特色功能</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  精选开发工具推荐
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  多维度分类体系
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  项目模板资源
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  竞品调研工具
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  开发者资讯聚合
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © 2025 WebDev导航站 - 让开发更高效
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 