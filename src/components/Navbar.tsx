import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Select Role', href: '#who', section: 'who' },
  { label: 'Why Us?', href: '#why', section: 'why' },
  { label: 'FAQ', href: '#faq', section: 'faq' },
];

const NAVBAR_HEIGHT = 72; // px, adjust as needed for your design

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lockedSection, setLockedSection] = useState<string | null>(null);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => {
      setIsFloating(window.scrollY > 10);
      if (lockedSection === 'brand') {
        if (window.scrollY < 10) {
          setLockedSection(null);
          setActiveSection(null);
        }
        return;
      }
      if (lockedSection) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= docHeight - windowHeight * 0.2) {
        setActiveSection('faq');
        return;
      }
      const threshold = windowHeight * 0.5;
      let found = false;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.getElementById(link.section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < threshold && rect.bottom > threshold / 2) {
            setActiveSection(link.section);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        if (window.scrollY < 10) {
          setActiveSection(null);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lockedSection]);

  useEffect(() => {
    if (!lockedSection) return;
    const unlock = () => setLockedSection(null);
    window.addEventListener('wheel', unlock, { passive: true });
    window.addEventListener('touchmove', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    return () => {
      window.removeEventListener('wheel', unlock);
      window.removeEventListener('touchmove', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, [lockedSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setLockedSection(section);
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    e.currentTarget.blur();
  };

  return (
    <>
      {/* Only reserve space when floating */}
      {isFloating && (
        <div
          style={{ height: NAVBAR_HEIGHT, background: 'linear-gradient(to bottom, #f0fdfa 60%, #ccfbf1 100%)' }}
          aria-hidden="true"
        />
      )}
      <nav
        className={
          isFloating
            ? 'fixed top-6 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center px-6 py-3 transition-all duration-300'
            : 'sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow flex items-center px-8 py-3 transition-all duration-300 rounded-none'
        }
        style={
          isFloating
            ? { height: NAVBAR_HEIGHT, minHeight: NAVBAR_HEIGHT }
            : { borderRadius: 0, maxWidth: '100vw', transform: 'none' }
        }
      >
        {/* Left: Brand */}
        <div className="flex-1 flex items-center">
          <span
            className="text-2xl font-extrabold tracking-tight text-teal-600 font-sans drop-shadow select-none cursor-pointer"
            style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setLockedSection('brand');
              setActiveSection(null);
            }}
            tabIndex={0}
            role="button"
            aria-label="Scroll to top"
          >
            Child<span className="text-teal-500">Bright</span>
          </span>
        </div>
        {/* Center: Nav Links */}
        <div className={`flex-1 flex justify-center gap-8 ${isFloating ? '' : 'ml-8'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.section)}
              className={`text-base font-semibold px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200
                ${activeSection === link.section ? 'text-teal-600 bg-teal-50 shadow' : 'text-gray-700 hover:text-teal-600'}`}
              style={activeSection === link.section ? { textShadow: '0 0 8px #14b8a6cc, 0 0 2px #14b8a6cc' } : {}}
              aria-current={activeSection === link.section ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Right: Auth Buttons */}
        <div className={`flex-1 flex justify-end gap-3 ${isFloating ? '' : 'mr-8'}`}>
          <a
            href="/about-us"
            className="text-base font-semibold px-5 py-1.5 rounded-full border border-teal-200 text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-200 shadow"
          >
            About Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 