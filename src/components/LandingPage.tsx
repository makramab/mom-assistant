import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Your AI-Powered{' '}
              <span className="text-purple-600">Baby Development Assistant</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Chat naturally with our AI assistant about your baby's development. Get instant guidance, 
              launch interactive assessments, and receive personalized recommendations - all through 
              simple conversation.
            </p>
            <div className="mt-10">
              <Link
                to="/chat"
                className="transform transition-all hover:scale-105 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 md:text-lg md:px-10"
              >
                Start Chatting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">See how it works</h2>
            <p className="mt-2 text-gray-600">Watch how our AI assistant helps assess your baby's development</p>
          </div>
          
          {/* Chat Preview Container */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg"></div>
            
            {/* Main chat container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              {/* Chat header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">Live Demo Preview</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-6">
                {/* AI Message */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 shadow-sm inline-block">
                      <p className="text-gray-800">Hi! I'm your baby development assistant. How can I help you today?</p>
                    </div>
                    <span className="block text-xs text-gray-500 mt-1">Just now</span>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start space-x-4 flex-row-reverse space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">You</span>
                  </div>
                  <div className="flex-1 flex flex-col items-end">
                    <div className="bg-blue-600 rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[85%]">
                      <p className="text-white">I'm wondering if my 6-month-old is developing normally...</p>
                    </div>
                    <span className="block text-xs text-gray-500 mt-1">Just now</span>
                  </div>
                </div>

                {/* AI Response with Actions */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 shadow-sm inline-block">
                      <p className="text-gray-800">I can help you assess your baby's development. Let's start with a few questions about their milestones.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          Launch Assessment
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                          Ask Questions First
                        </button>
                      </div>
                    </div>
                    <span className="block text-xs text-gray-500 mt-1">Just now</span>
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="border-t border-gray-100 p-4">
                <div className="flex items-center bg-gray-50 rounded-xl p-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-600 placeholder-gray-400 text-sm"
                    disabled
                  />
                  <button className="ml-3 p-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-6 mt-8 text-center">
            <div>
              <h3 className="text-purple-600 font-medium">Natural Language</h3>
              <p className="text-sm text-gray-600 mt-1">Chat just like you're talking to an expert</p>
            </div>
            <div>
              <h3 className="text-purple-600 font-medium">Interactive Tools</h3>
              <p className="text-sm text-gray-600 mt-1">Launch assessments seamlessly from chat</p>
            </div>
            <div>
              <h3 className="text-purple-600 font-medium">Instant Guidance</h3>
              <p className="text-sm text-gray-600 mt-1">Get immediate, personalized advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Our Chat Assistant Helps You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Natural Conversation */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Natural Conversation
                </h3>
                <p className="text-gray-600">
                  Chat naturally about your concerns and get intelligent responses with contextual understanding.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Context-aware responses
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    24/7 availability
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Assessments */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Interactive Assessments
                </h3>
                <p className="text-gray-600">
                  Launch detailed assessments right from your chat when needed, with seamless result integration.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    One-click assessments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Visual progress tracking
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Recommendations
                </h3>
                <p className="text-gray-600">
                  Get personalized advice and recommendations based on your conversations and assessment results.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Tailored guidance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Activity suggestions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Resources */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Baby Development Assistant
              </h3>
              <p className="mt-2 text-gray-400">
                Your AI companion for understanding your baby's development journey.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Helpful Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Development Guides</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Nutrition Tips</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Activity Ideas</a>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-gray-400">© 2024 Baby Development Assistant. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 