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
    question: 'Who can use SahabatSehat?',
    answer: 'Community Health Workers (Kaders), mothers, and institutional partners (government/private sector) can all use SahabatSehat.'
  },
  {
    question: 'Do I need to log in to get started?',
    answer: 'No login is required to begin. Simply select your user type to access personalized tools and resources.'
  },
  {
    question: 'Is SahabatSehat free to use?',
    answer: 'Yes, SahabatSehat is free for individual users. Some advanced features for organizations may require partnership.'
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
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0a0f1a] via-[#101a2b] to-[#1a2740] relative overflow-x-hidden">
        {/* Decorative blue overlays for accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-blue-700/30 rounded-b-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-[60vw] h-[30vh] bg-blue-500/20 rounded-t-full blur-2xl" />
        </div>
        <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center py-20 px-4">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 text-center drop-shadow-lg">
            Welcome to SahabatSehat
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-4 text-center font-medium italic drop-shadow">
            Your Health Companion, Every Step of the Way
          </p>
          <p className="text-lg md:text-xl text-blue-100 mb-12 text-center max-w-2xl drop-shadow">
            Empowering families and health workers in Indonesia with personalized tools, education, and support for better maternal and child health outcomes.
          </p>
          {/* Video Placeholder - not part of #who */}
          <VideoPlaceholder />
          {/* User Type Selection */}
          <div id="who" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-blue-200 text-center mb-8 drop-shadow">Who are you?</h2>
            {/* Carousel for mobile */}
            <div className="block md:hidden relative w-full max-w-xs mx-auto">
              <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 z-20 px-2 -translate-y-1/2">
                <button onClick={handlePrev} aria-label="Previous" className="rounded-full bg-blue-900/80 text-blue-200 hover:bg-blue-700/80 p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} aria-label="Next" className="rounded-full bg-blue-900/80 text-blue-200 hover:bg-blue-700/80 p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    className={`w-full flex flex-col items-center p-8 bg-[#181f2e] rounded-3xl shadow-xl border-2 transition-all min-h-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer
                      ${selectedType === userTypes[carouselIdx].key ?
                        'scale-105 border-blue-500 ring-4 ring-blue-400/40 z-10 shadow-2xl bg-gradient-to-br from-blue-900/80 to-blue-700/60 text-white animate-glow' :
                        'border-transparent hover:border-blue-500 hover:scale-102 group'}
                    `}
                    style={{ boxShadow: selectedType === userTypes[carouselIdx].key ? '0 0 32px 8px #3b82f6aa' : undefined }}
                    aria-label={userTypes[carouselIdx].label}
                  >
                    <span className={`text-5xl mb-3 transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-blue-300' : 'text-blue-100 group-hover:text-blue-300'}`} aria-hidden>{userTypes[carouselIdx].icon}</span>
                    <span className={`font-bold mb-2 text-center text-lg transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-blue-100' : 'text-blue-100 group-hover:text-blue-400'}`}>{userTypes[carouselIdx].label}</span>
                    <span className={`text-blue-200 text-sm text-center transition-colors ${selectedType === userTypes[carouselIdx].key ? 'text-blue-200' : 'text-blue-200/80'}`}>{userTypes[carouselIdx].description}</span>
                  </motion.button>
                </AnimatePresence>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {userTypes.map((_, idx) => (
                  <span key={idx} className={`w-2 h-2 rounded-full ${carouselIdx === idx ? 'bg-blue-400' : 'bg-blue-900'}`}></span>
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
                    animate={isSelected ? { scale: 1.08, boxShadow: '0 0 40px 10px #3b82f6cc', zIndex: 10 } : { scale: 1, boxShadow: '0 2px 16px 0 #0004', zIndex: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={() => handleUserTypeSelect(type.key)}
                    className={`flex flex-col items-center p-8 bg-[#181f2e] rounded-3xl shadow-xl border-2 transition-all min-h-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${isSelected ?
                        'border-blue-500 ring-4 ring-blue-400/40 bg-gradient-to-br from-blue-900/80 to-blue-700/60 text-white animate-glow' :
                        'border-transparent hover:border-blue-500 group opacity-60 grayscale backdrop-blur-sm'}
                    `}
                    style={{ boxShadow: isSelected ? '0 0 40px 10px #3b82f6cc' : undefined }}
                    aria-label={type.label}
                  >
                    <span className={`text-5xl mb-3 transition-colors ${isSelected ? 'text-blue-300' : 'text-blue-100 group-hover:text-blue-300'}`} aria-hidden>{type.icon}</span>
                    <span className={`font-bold mb-2 text-center text-lg transition-colors ${isSelected ? 'text-blue-100' : 'text-blue-100 group-hover:text-blue-400'}`}>{type.label}</span>
                    <span className={`text-blue-200 text-sm text-center transition-colors ${isSelected ? 'text-blue-200' : 'text-blue-200/80'}`}>{type.description}</span>
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
                  ${selectedType ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-900 text-blue-400 cursor-not-allowed opacity-60'}`}
              >
                Continue
              </button>
            </div>
          </div>
          {/* Features Section */}
          <section id="why" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow">Why SahabatSehat?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center bg-[#181f2e]/90 rounded-2xl shadow-lg p-8">
                  <span className="text-4xl mb-2">{feature.icon}</span>
                  <span className="font-semibold text-blue-100 mb-1 text-center text-lg">{feature.title}</span>
                  <span className="text-blue-200 text-center text-sm">{feature.description}</span>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section id="faq" className="w-full mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={faq.question} className="bg-[#181f2e]/90 rounded-xl shadow p-4">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-blue-100 text-lg focus:outline-none"
                    onClick={() => handleFaqClick(idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {faq.question}
                    <span className="ml-2 text-blue-400">{openFaq === idx ? '−' : '+'}</span>
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
                        <div className="text-blue-200 text-base animate-fade-in">
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
        <footer className="w-full text-center text-blue-300 py-8 text-sm mt-auto relative z-10">
          © 2024 SahabatSehat. All rights reserved.
        </footer>
      </div>
    </>
  );
};

function VideoPlaceholder() {
  const [play, setPlay] = useState(false);
  const thumbnail = "https://img.youtube.com/vi/9IJHDxePK2E/maxresdefault.jpg";
  return (
    <div style={{ width: '100%', maxWidth: 900, margin: '0 auto 2.5rem auto', display: 'flex', justifyContent: 'center' }}>
      <div
        className="shadow-xl rounded-3xl p-2"
        style={{ width: '100%', maxWidth: 720, background: 'rgba(16,26,43,0.5)', border: '1.5px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}
      >
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '1.25rem', overflow: 'hidden', background: '#222' }}>
          {play ? (
            <iframe
              src="https://www.youtube.com/embed/9IJHDxePK2E?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          ) : (
            <button
              onClick={() => setPlay(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `url(${thumbnail}) center 30% / cover no-repeat`,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
              aria-label="Play video"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}>
                <circle cx="40" cy="40" r="40" fill="#000" fillOpacity="0.6" />
                <polygon points="32,24 60,40 32,56" fill="#fff" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 