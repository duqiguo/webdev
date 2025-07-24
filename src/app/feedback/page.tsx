export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">意见反馈</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <p className="text-gray-600 mb-6">
            感谢您使用 WebDev 开发者工具导航站！如有建议、问题或合作意向，请通过以下方式联系我们：
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📧</span>
              <div>
                <div className="font-medium text-gray-900">邮箱反馈</div>
                <a href="mailto:feedback@webdevtools.space" className="text-blue-600 hover:text-blue-700">
                  feedback@webdevtools.space
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-3">💬</span>
              <div>
                <div className="font-medium text-gray-900">在线反馈</div>
                <p className="text-gray-600 text-sm">即将开放在线反馈功能</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              我们会认真阅读每一份反馈，并尽快回复您的问题。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 