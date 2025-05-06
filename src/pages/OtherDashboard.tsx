import SimpleNav from '../components/SimpleNav';

const integrations = [
  { title: 'Government Dashboard', description: 'Access and sync with government health data.', icon: '🏛️' },
  { title: 'Private Sector Integration', description: 'Connect with private health and wellness platforms.', icon: '🏢' },
  { title: 'Analytics & Reporting', description: 'View program impact and generate reports.', icon: '📊' },
];

const OtherDashboard = () => {
  return (
    <>
      <SimpleNav />
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0a0f1a] via-[#101a2b] to-[#1a2740] relative overflow-x-hidden">
        {/* Decorative overlays */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-blue-700/30 rounded-b-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-blue-500/20 rounded-t-full blur-2xl" />
        </div>
        <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center py-20 px-4 gap-10">
          {/* Welcome Header */}
          <section className="w-full text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome, Partner!</h1>
            <p className="text-lg md:text-xl text-blue-200 font-medium italic drop-shadow">Access integration features and analytics for your organization.</p>
          </section>

          {/* Integration Features */}
          <section className="w-full mt-8">
            <h2 className="text-2xl font-bold text-blue-200 mb-4 drop-shadow">Integration & Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrations.map((item, idx) => (
                <div key={idx} className="bg-[#181f2e]/80 border border-blue-900/60 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center backdrop-blur">
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <div className="font-bold text-blue-100 mb-1">{item.title}</div>
                  <div className="text-blue-200 text-sm mb-3">{item.description}</div>
                  <button className="px-4 py-1.5 rounded-full font-semibold text-blue-100 bg-blue-900/60 hover:bg-blue-700/80 transition-colors border border-blue-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Open
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Future Role-Specific Tools */}
          <section className="w-full mt-12">
            <h2 className="text-2xl font-bold text-blue-200 mb-4 drop-shadow">Role-Specific Tools (Coming Soon)</h2>
            <div className="bg-[#181f2e]/80 border border-blue-900/60 rounded-2xl shadow-lg p-8 text-center text-blue-200 backdrop-blur">
              More features and integrations for government and private sector partners will be available soon.
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default OtherDashboard; 