import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';

const userTypes = [
  {
    key: 'kader',
    label: 'Community Health Worker (Kader)',
    icon: '🩺',
    description: 'Access e-learning, reporting tools, and community outreach resources.'
  },
  {
    key: 'mother',
    label: 'Mother',
    icon: '🤱',
    description: 'Get personalized nutrition, growth, and parenting support for your child.'
  },
  {
    key: 'other',
    label: 'Other (Gov/Private)',
    icon: '🏢',
    description: 'Explore dashboards and integrations for organizations and partners.'
  }
];

const features = [
  {
    icon: '📚',
    title: 'E-Learning & Certification',
    description: 'Self-paced modules for Kaders with automatic certification and progress tracking.'
  },
  {
    icon: '📈',
    title: 'Growth Monitoring',
    description: 'Digital tools for tracking child development, nutrition, and health milestones.'
  },
  {
    icon: '🤝',
    title: 'Community & Support',
    description: 'Forums, expert chat, and peer engagement for mothers and health workers.'
  },
  {
    icon: '🔗',
    title: 'Data Integration',
    description: 'Sync with government and MEL systems for reporting and impact measurement.'
  }
];

const faqs = [
  {
    question: 'Who can use ChildBright?',
    answer: 'Community Health Workers (Kaders), mothers, and institutional partners (government/private sector) can all use ChildBright.'
  },
  {
    question: 'Do I need to log in to get started?',
    answer: 'No login is required to begin. Simply select your user type to access personalized tools and resources.'
  },
  {
    question: 'Is ChildBright free to use?',
    answer: 'Yes, ChildBright is free for individual users. Some advanced features for organizations may require partnership.'
  }
];

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: 'spring' },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  }),
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const faqTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [chatInput, setChatInput] = useState("");

  const handleUserTypeSelect = (userType: string) => {
    setSelectedType(userType);
  };

  const handleContinue = () => {
    if (selectedType) {
      navigate(`/dashboard/${selectedType}`);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setCarouselIdx((prev) => (prev === 0 ? userTypes.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection(1);
    setCarouselIdx((prev) => (prev === userTypes.length - 1 ? 0 : prev + 1));
  };

  // Sequential FAQ open/close
  const handleFaqClick = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
      return;
    }
    if (openFaq !== null) {
      setOpenFaq(null);
      if (faqTimeoutRef.current) clearTimeout(faqTimeoutRef.current);
      faqTimeoutRef.current = setTimeout(() => {
        setOpenFaq(idx);
      }, 300); // match animation duration
    } else {
      setOpenFaq(idx);
    }
  };
  useEffect(() => () => { if (faqTimeoutRef.current) clearTimeout(faqTimeoutRef.current); }, []);

  // Responsive: show carousel on mobile, grid on md+
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100 relative overflow-x-hidden">
        {/* Decorative blue overlays for accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-teal-100/60 rounded-b-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-teal-200/40 rounded-t-full blur-2xl" />
        </div>
        <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg mb-3">
            <span className="text-gray-700">Welcome to</span>{' '}
            <span className="block mt-2">
              <span className="text-teal-600" style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}>Child</span>
              <span className="text-teal-500" style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}>Bright</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-600 mb-4 text-center font-medium italic drop-shadow">
            Your Health Companion, Every Step of the Way
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-2xl drop-shadow">
            Empowering families and health workers in Indonesia with personalized tools, education, and support for better maternal and child health outcomes.
          </p>
          {/* Landing Chat Box */}
          <section className="w-full flex flex-col items-center mb-12">
            <h3 className="text-xl font-semibold text-teal-700 mb-2 text-center">Ask ChildBright</h3>
            <p className="text-gray-600 text-center mb-4 max-w-xl">
              Need help or have a question about maternal and child health? Ask anything about pregnancy, child development, nutrition, or how to use ChildBright. Our assistant is here to guide you and connect you with the right resources instantly.
            </p>
            <motion.div
              className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-200"
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="text-sm text-gray-500">ChildBright Assistant is online</span>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 text-gray-700 text-base">
                  Hi! I'm your ChildBright assistant. How can I help you today?
                </div>
              </div>
              <form
                className="w-full flex items-end gap-2"
                onSubmit={e => {
                  e.preventDefault();
                  if (chatInput.trim()) {
                    navigate('/chat');
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Type your question here..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800 bg-white"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={`bg-teal-600 text-white px-6 py-2 rounded-lg transition-opacity ${chatInput.trim() ? 'opacity-100 cursor-pointer hover:bg-teal-700' : 'opacity-60 cursor-not-allowed'}`}
                  disabled={!chatInput.trim()}
                >
                  Send
                </button>
              </form>
            </motion.div>
          </section>
          {/* User Type Selection */}
          <div id="who" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-teal-400 text-center mb-8 drop-shadow">Who are you?</h2>
            {/* Carousel for mobile */}
            <div className="block md:hidden relative w-full max-w-xs mx-auto">
              <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 z-20 px-2 -translate-y-1/2">
                <button onClick={handlePrev} aria-label="Previous" className="rounded-full bg-teal-900/80 text-teal-200 hover:bg-teal-700/80 p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} aria-label="Next" className="rounded-full bg-teal-900/80 text-teal-200 hover:bg-teal-700/80 p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="h-[260px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.button
                    key={userTypes[carouselIdx].key}
                    type="button"
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={() => handleUserTypeSelect(userTypes[carouselIdx].key)}
                    className={`w-full flex flex-col items-center p-8 bg-teal-900 rounded-3xl shadow-xl border-2 transition-all min-h-[220px] focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer
                      ${selectedType === userTypes[carouselIdx].key ?
                        'scale-105 border-teal-500 ring-4 ring-teal-400/40 z-10 shadow-2xl bg-gradient-to-br from-teal-900/80 to-teal-700/60 text-white animate-glow' :
                        'border-transparent hover:border-teal-500 hover:scale-102 group'}
                    `}
                    style={{ boxShadow: selectedType === userTypes[carouselIdx].key ? '0 0 32px 8px #14b8a6aa' : undefined }}
                    aria-label={userTypes[carouselIdx].label}
                  >
                    <span className={`text-5xl mb-3 transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-teal-300' : 'text-teal-100 group-hover:text-teal-300'}`} aria-hidden>{userTypes[carouselIdx].icon}</span>
                    <span className={`font-bold mb-2 text-center text-lg transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-teal-600' : 'text-gray-900'}`}>{userTypes[carouselIdx].label}</span>
                    <span className={`text-teal-200 text-sm text-center transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-teal-200' : 'text-teal-200/80'}`}>{userTypes[carouselIdx].description}</span>
                  </motion.button>
                </AnimatePresence>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {userTypes.map((_, idx) => (
                  <span key={idx} className={`w-2 h-2 rounded-full ${carouselIdx === idx ? 'bg-teal-400' : 'bg-teal-900'}`}></span>
                ))}
              </div>
            </div>
            {/* Grid for desktop */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {userTypes.map((type) => {
                const isSelected = selectedType === type.key;
                return (
                  <motion.button
                    key={type.key}
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    animate={isSelected ? { scale: 1.08, boxShadow: '0 0 40px 10px #14b8a6cc', zIndex: 10 } : { scale: 1, boxShadow: '0 2px 16px 0 #0004', zIndex: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={() => handleUserTypeSelect(type.key)}
                    className={`border rounded-3xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-200 min-h-[220px] focus:outline-none
                      ${isSelected ? 'bg-white border-teal-500 ring-2 ring-teal-200 shadow-lg' : 'bg-gray-50 border-gray-200 text-gray-400'}
                      hover:border-teal-300 hover:shadow-lg`}
                    style={{ boxShadow: isSelected ? '0 0 40px 10px #14b8a6aa, 0 0 0 8px #fff8' : undefined }}
                    aria-label={type.label}
                  >
                    <span className={`text-5xl mb-3 transition-colors ${isSelected ? 'text-teal-300' : 'text-teal-100 group-hover:text-teal-300'}`} aria-hidden>{type.icon}</span>
                    <span className={`font-bold mb-2 text-center text-lg transition-colors ${isSelected ? 'text-teal-600' : 'text-gray-900'}`}>{type.label}</span>
                    <span className="text-gray-500 text-sm text-center">{type.description}</span>
                  </motion.button>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={handleContinue}
                disabled={!selectedType}
                className={`px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-200
                  ${selectedType ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-teal-900 text-teal-400 cursor-not-allowed opacity-60'}`}
              >
                Continue
              </button>
            </div>
          </div>
          {/* Features Section */}
          <section id="why" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-teal-600 text-center mb-8 drop-shadow">Why ChildBright?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                  <span className="text-4xl mb-2">{feature.icon}</span>
                  <span className="font-semibold text-teal-700 mb-1 text-center text-lg">{feature.title}</span>
                  <span className="text-gray-500 text-center text-sm">{feature.description}</span>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section id="faq" className="w-full mb-12">
            <h2 className="text-2xl font-bold text-teal-600 text-center mb-8 drop-shadow">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={faq.question} className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-teal-700 text-lg focus:outline-none"
                    onClick={() => handleFaqClick(idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {faq.question}
                    <span className="ml-2 text-teal-400">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 200, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden mt-2"
                      >
                        <div className="text-gray-500 text-base animate-fade-in">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer className="w-full text-center text-teal-400 py-8 text-sm mt-auto relative z-10">
          © 2024 ChildBright. All rights reserved.
        </footer>
      </div>
    </>
  );
};

// function VideoPlaceholder() {
//   const [play, setPlay] = useState(false);
//   const thumbnail = "https://img.youtube.com/vi/9IJHDxePK2E/maxresdefault.jpg";
//   return (
//     <div style={{ width: '100%', maxWidth: 900, margin: '0 auto 2.5rem auto', display: 'flex', justifyContent: 'center' }}>
//       <div
//         className="shadow-xl rounded-3xl p-2"
//         style={{ width: '100%', maxWidth: 720, background: 'rgba(16,26,43,0.5)', border: '1.5px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}
//       >
//         <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '1.25rem', overflow: 'hidden', background: '#222' }}>
//           {play ? (
//             <iframe
//               src="https://www.youtube.com/embed/9IJHDxePK2E?autoplay=1"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//             />
//           ) : (
//             <button
//               onClick={() => setPlay(true)}
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 background: `url(${thumbnail}) center 30% / cover no-repeat`,
//                 border: 'none',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: 0,
//               }}
//               aria-label="Play video"
//             >
//               <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}>
//                 <circle cx="40" cy="40" r="40" fill="#000" fillOpacity="0.6" />
//                 <polygon points="32,24 60,40 32,56" fill="#fff" />
//               </svg>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default LandingPage; 