import SimpleNav from '../components/SimpleNav';

const About = () => (
  <>
    <SimpleNav />
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100 relative overflow-x-hidden">
      {/* Decorative overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-teal-100/60 rounded-b-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-teal-200/40 rounded-t-full blur-2xl" />
      </div>
      <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4 gap-10">
        <section className="w-full text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 drop-shadow-lg">About SahabatSehat</h1>
          <p className="text-lg md:text-xl text-teal-600 font-medium italic drop-shadow">Empowering families and health workers in Indonesia</p>
        </section>

        {/* Vision */}
        <section className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-2 drop-shadow">Vision</h2>
          <p className="text-gray-700 text-lg">SahabatSehat is an integrated digital platform designed to improve maternal and child health outcomes in Indonesia. It empowers Community Health Workers (Kaders), Mothers, and other stakeholders (government, private sector) with personalized tools, educational resources, and data-driven support to drive positive health behaviors and program impact.</p>
        </section>

        {/* User Types & Experiences */}
        <section className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-2 drop-shadow">User Types & Experiences</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-teal-600">Community Health Workers (Kaders):</span> Access e-learning modules, structured curriculum, digital tools for visit reporting, and progress tracking. Earn certifications and sync data with government dashboards.</li>
            <li><span className="font-semibold text-teal-600">Mothers:</span> Receive tailored content and support for pregnancy and child development, access practical tools (videos, checklists, calculators), participate in forums, and monitor child growth.</li>
            <li><span className="font-semibold text-teal-600">Others (Government & Private Sector):</span> Access role-specific dashboards, integration features, and support data-driven decision making and program monitoring.</li>
          </ul>
        </section>

        {/* Core Features */}
        <section className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-2 drop-shadow">Core Features</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-teal-600">Landing Page & User Selection:</span> Simple onboarding with user-type selection (no login required).</li>
            <li><span className="font-semibold text-teal-600">Personalized Dashboards:</span> Custom experience and content for each user type.</li>
            <li><span className="font-semibold text-teal-600">E-Learning & Certification:</span> Modular, self-paced learning with progress tracking and certification.</li>
            <li><span className="font-semibold text-teal-600">Digital Tools:</span> Visit reporting, educational media, reminders, and growth monitoring.</li>
            <li><span className="font-semibold text-teal-600">Community & Support:</span> Forums, expert chat, and peer engagement.</li>
            <li><span className="font-semibold text-teal-600">Data Integration:</span> Sync with government and MEL systems for reporting and impact measurement.</li>
          </ul>
        </section>
      </main>
    </div>
  </>
);

export default About; 