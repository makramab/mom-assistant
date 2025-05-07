import SimpleNav from '../components/SimpleNav';

const stages = [
  { title: 'Pregnancy', description: 'Prenatal care, nutrition, and birth preparation.', icon: '🤰', status: 'Not Started' },
  { title: '0–6 Months', description: 'Exclusive breastfeeding support and guidance.', icon: '🍼', status: 'In Progress' },
  { title: '6–24 Months', description: 'Complementary feeding, recipes, and nutrition tips.', icon: '🍲', status: 'Not Started' },
  { title: '2–5 Years', description: 'Development, stimulation, and independence.', icon: '👶', status: 'Not Started' },
];

const tools = [
  { title: 'Growth Chart', description: "Track your child's growth and milestones.", icon: '📈' },
  { title: 'Nutrition Calculator', description: 'Plan balanced meals for your child.', icon: '🥗' },
  { title: 'Menu Templates', description: 'Get daily and weekly meal ideas.', icon: '📋' },
];

const MotherDashboard = () => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 drop-shadow-lg">Welcome, Mother!</h1>
            <p className="text-lg md:text-xl text-teal-600 font-medium italic drop-shadow">Personalized support for every stage of your child's journey.</p>
          </section>

          {/* Progress/Stats Placeholder */}
          <section className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">1</div>
              <div className="text-teal-700">Stages Completed</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">2</div>
              <div className="text-teal-700">Tools Used</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-6 min-w-[220px] text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">3</div>
              <div className="text-teal-700">Reminders Set</div>
            </div>
          </section>

          {/* Content Modules by Stage */}
          <section className="w-full mt-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 drop-shadow">Content Modules by Stage</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stages.map((stage, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{stage.icon}</span>
                  <div className="font-bold text-teal-700 mb-1">{stage.title}</div>
                  <div className="text-gray-500 text-sm mb-3">{stage.description}</div>
                  <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                    {stage.status === 'Not Started' ? 'Start' : stage.status === 'In Progress' ? 'Continue' : 'Review'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tools & Resources */}
          <section className="w-full mt-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 drop-shadow">Practical Tools & Resources</h2>
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

          {/* Community & Digital Support */}
          <section className="w-full mt-12 flex flex-col md:flex-row gap-6 justify-center items-stretch">
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🤝</span>
              <div className="font-bold text-teal-700 mb-1">Community & Support</div>
              <div className="text-gray-500 text-sm mb-3">Join the forum or chat with other mothers for support and advice.</div>
              <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                Go to Forum
              </button>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">⏰</span>
              <div className="font-bold text-teal-700 mb-1">Digital Support Features</div>
              <div className="text-gray-500 text-sm mb-3">Set reminders, access expert chat, and monitor growth charts.</div>
              <button className="px-4 py-1.5 rounded-full font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 shadow focus:outline-none focus:ring-2 focus:ring-teal-200">
                Set Reminders
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MotherDashboard; 