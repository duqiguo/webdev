export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">移动版</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">移动端访问</h2>
              <p className="text-gray-600">
                WebDev 开发者工具导航站已完全适配移动端，您可以在手机、平板等设备上
                正常访问和使用所有功能。我们采用了响应式设计，确保在不同屏幕尺寸下
                都能提供良好的用户体验。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">推荐浏览器</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🌐</span>
                  <div>
                    <div className="font-medium">Chrome for Mobile</div>
                    <div className="text-sm text-gray-500">推荐使用，功能完整</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🦊</span>
                  <div>
                    <div className="font-medium">Firefox Mobile</div>
                    <div className="text-sm text-gray-500">支持良好</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🍎</span>
                  <div>
                    <div className="font-medium">Safari</div>
                    <div className="text-sm text-gray-500">iOS 设备推荐</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">使用提示</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 支持触摸手势操作</li>
                <li>• 自适应屏幕尺寸</li>
                <li>• 优化了移动端交互体验</li>
                <li>• 如遇显示问题，请尝试刷新页面</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                如在移动端使用中遇到问题，请通过意见反馈告诉我们。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 