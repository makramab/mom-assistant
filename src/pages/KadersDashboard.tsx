import SimpleNav from '../components/SimpleNav';

const modules = [
  { title: 'Nutrition Basics', description: 'Learn about maternal and child nutrition.', icon: '🥗', status: 'Not Started' },
  { title: 'Immunization', description: 'Understand immunization schedules and best practices.', icon: '💉', status: 'In Progress' },
  { title: 'Early Detection', description: 'Identify early signs of health issues.', icon: '🔍', status: 'Completed' },
];

const tools = [
  { title: 'Visit Reporting', description: 'Log and monitor home visits.', icon: '📋' },
  { title: 'Educational Media', description: 'Access videos, posters, and templates.', icon: '🎬' },
  { title: 'Community Forum', description: 'Connect with other Kaders.', icon: '💬' },
];

const KadersDashboard = () => {
  return (
    <>
      <SimpleNav />
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100 relative overflow-x-hidden">
        {/* Decorative overlays */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-teal-100/60 rounded-b-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-teal-200/40 rounded-t-full blur-2xl" />
        </div>
        <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center py-20 px-4 gap-10">
          {/* Welcome Header */}
          <section className="w-full text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 drop-shadow-lg">Welcome, Kader!</h1>
            <p className="text-lg md:text-xl text-teal-600 font-medium italic drop-shadow">Empowering you to make a difference in your community.</p>
          </section>

          {/* Progress/Stats Placeholder */}
          <section className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">2</div>
              <div className="text-teal-700">Modules Completed</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">1</div>
              <div className="text-teal-700">Certification Earned</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">5</div>
              <div className="text-teal-700">Visits Reported</div>
            </div>
          </section>

          {/* E-Learning Modules */}
          <section className="w-full mt-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 drop-shadow">E-Learning Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {modules.map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{mod.icon}</span>
                  <div className="font-bold text-teal-700 mb-1">{mod.title}</div>
                  <div className="text-gray-500 text-sm mb-3">{mod.description}</div>
                  <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                    {mod.status === 'Not Started' ? 'Start' : mod.status === 'In Progress' ? 'Continue' : 'Review'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & Resources */}
          <section className="w-full mt-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 drop-shadow">Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{tool.icon}</span>
                  <div className="font-bold text-teal-700 mb-1">{tool.title}</div>
                  <div className="text-gray-500 text-sm mb-3">{tool.description}</div>
                  <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                    Open
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Community & Data Sync */}
          <section className="w-full mt-12 flex flex-col md:flex-row gap-6 justify-center items-stretch">
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">💬</span>
              <div className="font-bold text-teal-700 mb-1">Community & Support</div>
              <div className="text-gray-500 text-sm mb-3">Join the forum or chat with other Kaders for support and advice.</div>
              <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                Go to Forum
              </button>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🔗</span>
              <div className="font-bold text-teal-700 mb-1">Data Sync & Integration</div>
              <div className="text-gray-500 text-sm mb-3">Sync your reports and progress with government and MEL dashboards.</div>
              <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                Sync Now
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default KadersDashboard; 