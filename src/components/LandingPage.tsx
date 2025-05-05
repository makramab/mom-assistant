import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 text-center">
          Personalized Nutrition & Growth Guidance for Families
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
          BundaCare delivers culturally sensitive, AI-powered support for maternal and child nutrition, development, and health. Get tailored advice, adaptive lessons, and connect with community health resources and funding opportunities—all in one place.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/chat"
            className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold text-lg shadow-md hover:bg-purple-700 transition-colors text-center"
          >
            Start Chat
          </Link>
          <Link
            to="/marketplace"
            className="px-8 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-lg shadow-md hover:bg-blue-200 transition-colors text-center border border-blue-200"
          >
            Funding & MEL Marketplace
          </Link>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">How BundaCare Empowers You</h2>
            <p className="mt-2 text-gray-600">See how our AI assistant delivers nutrition guidance, tracks progress, and connects you to health resources</p>
          </div>
          
          {/* Chat Preview Container */}
          <div className="relative mb-16">
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
                      <p className="text-gray-800">Hi! I'm BundaCare, your AI companion for nutrition and child development. How can I support your family's health today?</p>
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
                      <p className="text-white">I'm looking for nutrition tips and growth advice for my toddler.</p>
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
                      <p className="text-gray-800">I can provide personalized nutrition guidance, suggest activities, or connect you to community health programs. Would you like to start a quick assessment or explore lesson modules?</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          Start Nutrition Assessment
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                          Explore Lesson Modules
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

          {/* Marketplace Preview Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Explore Community Health Programs</h2>
            <p className="mt-2 text-gray-600">Discover, support, and track impactful maternal & child health initiatives in your community.</p>
          </div>
          <div className="relative mb-8 max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl z-0"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Example program card 1 */}
                <div className="bg-white rounded-xl shadow border border-blue-50 flex flex-col">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Posyandu Revival" className="w-full h-40 object-cover rounded-t-xl" />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Posyandu Revival: Maternal & Child Health</h3>
                      <div className="text-sm text-blue-700 font-medium mb-2">Yayasan Sehat Bersama</div>
                      <div className="text-xs text-gray-500 mb-2">Target: Rp25.000.000 • 12 days left</div>
                      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-2">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '74%' }} />
                      </div>
                      <div className="text-xs text-right text-blue-700 font-medium">74% funded</div>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm">View Program</button>
                  </div>
                </div>
                {/* Example program card 2 */}
                <div className="bg-white rounded-xl shadow border border-blue-50 flex flex-col">
                  <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Clean Water for Healthy Communities" className="w-full h-40 object-cover rounded-t-xl" />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Clean Water for Healthy Communities</h3>
                      <div className="text-sm text-blue-700 font-medium mb-2">Water4Life Indonesia</div>
                      <div className="text-xs text-gray-500 mb-2">Target: Rp20.000.000 • 20 days left</div>
                      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-2">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '60%' }} />
                      </div>
                      <div className="text-xs text-right text-blue-700 font-medium">60% funded</div>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm">View Program</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/marketplace" className="inline-block px-8 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-lg shadow-md hover:bg-blue-200 transition-colors border border-blue-200">
              Explore Full Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose BundaCare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Natural Conversation */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personalized, Culturally Sensitive Guidance
                </h3>
                <p className="text-gray-600">
                  BundaCare adapts to your family's needs, culture, and local food availability for truly relevant support.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    User profiling for tailored advice
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Context-aware chatbot Q&A
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Assessments */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Adaptive Lesson Modules
                </h3>
                <p className="text-gray-600">
                  Interactive lessons, videos, and quizzes for both sensitive and specific nutrition interventions.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Text, video, and quiz modules
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Sensitive & specific interventions
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Progress Tracking & Funding Access
                </h3>
                <p className="text-gray-600">
                  Track your nutrition and health journey, get reminders, and access the funding & MEL marketplace for community health programs.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Progress dashboard & reminders
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Access to funding & MEL marketplace
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
                BundaCare: Nutrition & Health for Families
              </h3>
              <p className="mt-2 text-gray-400">
                AI-powered, culturally sensitive support for maternal & child nutrition, development, and community health.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Explore Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Nutrition Guides</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Lesson Modules</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Funding & MEL Info</a>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-gray-400">© 2024 BundaCare. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 