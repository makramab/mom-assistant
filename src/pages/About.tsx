import SimpleNav from '../components/SimpleNav';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Inclusivity',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    desc: 'Every mother and cadre, regardless of location or income, deserves access to quality support and information for their child.',
    rationale: 'Many low-income families struggle to access comprehensive maternal and child healthcare. By prioritizing inclusivity, we can address this inequity and improve health outcomes.'
  },
  {
    title: 'Empowerment',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1" /></svg>
    ),
    desc: 'Strengthening the skills and economic resilience of health cadres is essential for long-term, community-driven care.',
    rationale: 'Health cadres are often underpaid and lack sufficient training, yet they form the backbone of maternal healthcare. Empowering them not only improves care quality but also increases their livelihood opportunities.'
  },
  {
    title: 'Sustainability & Innovation',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" /></svg>
    ),
    desc: 'Building scalable, cost-effective solutions that create lasting impact.',
    rationale: 'Short-term projects often fail to create lasting change. Our approach emphasizes sustainability through technology, income generation, and strong local partnerships. Technology is the key to scaling healthcare solutions.'
  },
  {
    title: 'Collaboration',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" /></svg>
    ),
    desc: 'Partnering with communities, governments, and the private sector for holistic support.',
    rationale: 'Effective healthcare relies on a network of partnerships that bring together diverse resources and expertise. This collaborative approach strengthens our impact.'
  }
];

const coreFunctions = [
  {
    title: 'Educational Content',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3m9 0h9" /></svg>
    ),
    points: [
      'AI-powered chatbots for personalized health advice and support',
      'Video-based learning modules on lactation, nutrition, and early childhood development',
    ],
    note: 'Visual content is highly preferred by many mothers, as shown in initial field assessments. This ensures more engaging, practical learning.'
  },
  {
    title: 'Community & Support',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" /></svg>
    ),
    points: [
      'Free, secure messaging platform for mothers to connect with health cadres and support networks',
      'Training and resources for health cadres to improve skills and knowledge',
    ]
  },
  {
    title: 'Sustainability & Impact',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 0C7.03 8 3 12.03 3 17h18c0-4.97-4.03-9-9-9z" /></svg>
    ),
    points: [
      'Income-generating opportunities through private sector partnerships',
      'Digital dashboards to track mother and child progress, identify gaps, and measure impact',
    ]
  },
  {
    title: 'Collaboration & Growth',
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" /></svg>
    ),
    points: [
      'Long-term collaborations with private, public, and non-profit organizations',
      'Securing funding and technical support for sustainability',
      'Establishing networks for knowledge sharing and co-creation of solutions',
    ],
    note: 'Effective, sustainable healthcare systems require a diverse support network to overcome financial, logistical, and technological barriers.'
  }
];

const About = () => (
  <>
    <SimpleNav />
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100 relative overflow-x-hidden">
      {/* Hero Illustration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-teal-100/60 rounded-b-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-teal-200/40 rounded-t-full blur-2xl" />
      </div>
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center py-20 px-4 gap-16">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center text-center mb-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img src="/about-hero.svg" alt="ChildBright Vision" className="mx-auto mb-6 w-48 md:w-64" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-2 drop-shadow-lg">About ChildBright</h1>
            <p className="text-xl md:text-2xl text-teal-600 font-medium italic drop-shadow mb-2">Empowering families and health workers in Indonesia</p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">To create a brighter future for children, by empowering every mother and community health worker (cadre) with the knowledge and tools needed to ensure healthy, thriving families in every corner of Indonesia.</p>
          </motion.div>
        </section>
        {/* Wavy Divider */}
        <div className="w-full mb-2">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 40 0 30V0z" fill="#5eead4" fillOpacity="0.12" />
          </svg>
        </div>
        {/* Vision & Mission */}
        <section className="w-full grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl shadow-lg border border-teal-100 p-8 flex flex-col items-center">
            <span className="text-2xl font-bold text-teal-700 mb-2">Vision</span>
            <p className="text-gray-800 text-center font-medium">To create a brighter future for children, by empowering every mother and community health worker (cadre) with the knowledge and tools needed to ensure healthy, thriving families in every corner of Indonesia.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-2xl shadow-lg border border-teal-100 p-8 flex flex-col items-center">
            <span className="text-2xl font-bold text-teal-700 mb-2">Mission</span>
            <p className="text-gray-800 text-center font-medium">To bridge the gap in maternal and child healthcare equity by providing inclusive, tech-driven solutions that support mothers, empower community health workers, and strengthen local healthcare systems.</p>
          </motion.div>
        </section>
        {/* Wavy Divider */}
        <div className="w-full mb-2">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 40 0 30V0z" fill="#5eead4" fillOpacity="0.12" />
          </svg>
        </div>
        {/* Values & Rationale */}
        <section className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 flex items-center gap-2"><svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Values & Rationale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * i }} className="bg-teal-50 rounded-2xl border-l-8 border-teal-400 shadow p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">{v.icon}<span className="text-xl font-bold text-teal-700">{v.title}</span></div>
                <p className="text-gray-800 text-sm">{v.desc}</p>
                <p className="text-gray-500 text-xs">{v.rationale}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Wavy Divider */}
        <div className="w-full mb-2">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 40 0 30V0z" fill="#5eead4" fillOpacity="0.12" />
          </svg>
        </div>
        {/* Core Functions */}
        <section className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 flex items-center gap-2"><svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" /></svg>Core Functions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreFunctions.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * i }} className="bg-teal-50 rounded-2xl border-l-8 border-teal-400 shadow p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">{f.icon}<span className="text-xl font-bold text-teal-700">{f.title}</span></div>
                <ul className="list-disc list-inside text-gray-800 text-sm ml-2">
                  {f.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
                {f.note && <p className="text-gray-500 text-xs mt-1">{f.note}</p>}
              </motion.div>
            ))}
          </div>
        </section>
        {/* Wavy Divider */}
        <div className="w-full mb-2">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 40 0 30V0z" fill="#5eead4" fillOpacity="0.12" />
          </svg>
        </div>
        {/* Testimonial/Quote Section */}
        <section className="w-full flex flex-col items-center">
          <div className="max-w-2xl bg-white rounded-2xl shadow-lg border border-teal-100 p-8 flex flex-col items-center gap-4">
            <svg className="w-10 h-10 text-teal-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
            <blockquote className="text-lg md:text-xl text-gray-700 italic text-center">“ChildBright has made it so much easier for me to get the right information and support for my child's health. The community and resources are truly empowering.”</blockquote>
            <div className="flex items-center gap-3 mt-2">
              <img src="/user-avatar.svg" alt="Testimonial user" className="w-10 h-10 rounded-full border-2 border-teal-200" />
              <span className="text-teal-700 font-semibold">Ayu, Mother & Community Member</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default About; 