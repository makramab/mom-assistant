import React, { useEffect, useState} from 'react';

const navLinks = [
  { label: 'Select Role', href: '#who', section: 'who' },
  { label: 'Why Us?', href: '#why', section: 'why' },
  { label: 'FAQ', href: '#faq', section: 'faq' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lockedSection, setLockedSection] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => {
      if (lockedSection === 'brand') {
        if (window.scrollY < 10) {
          setLockedSection(null);
          setActiveSection(null);
        }
        return;
      }
      if (lockedSection) return; // Don't update while locked
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
        // If at the very top, clear active section
        if (window.scrollY < 10) {
          setActiveSection(null);
        }
        // Otherwise, do not change activeSection
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lockedSection]);

  useEffect(() => {
    if (!lockedSection) return;
    // Unlock on any manual scroll/touch/keyboard navigation
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 rounded-2xl bg-[#101a2b]/80 backdrop-blur border border-blue-900/60 shadow-xl flex items-center px-6 py-3">
      {/* Left: Brand */}
      <div className="flex-1 flex items-center">
        <span
          className="text-2xl font-extrabold tracking-tight text-blue-300 font-sans drop-shadow-lg select-none cursor-pointer"
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
          Sahabat<span className="text-blue-500">Sehat</span>
        </span>
      </div>
      {/* Center: Nav Links */}
      <div className="flex-1 flex justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleNavClick(e, link.section)}
            className={`text-base font-semibold px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400
              ${activeSection === link.section ? 'text-blue-400 shadow-[0_0_8px_2px_#3b82f6cc] bg-blue-900/40' : 'text-blue-100 hover:text-blue-400'}`}
            style={activeSection === link.section ? { textShadow: '0 0 8px #3b82f6cc, 0 0 2px #3b82f6cc' } : {}}
            aria-current={activeSection === link.section ? 'true' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Right: Auth Buttons */}
      <div className="flex-1 flex justify-end gap-3">
        <a
          href="/about"
          className="text-base font-semibold px-5 py-1.5 rounded-full border"
          style={{
            border: '1.5px solid rgba(255,255,255,0.25)',
            color: '#dbeafe',
            background: 'rgba(16,26,43,0.5)',
            transition: 'background 0.2s, color 0.2s, border 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(59,130,246,0.15)';
            e.currentTarget.style.color = '#60a5fa';
            e.currentTarget.style.border = '1.5px solid rgba(255,255,255,0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(16,26,43,0.5)';
            e.currentTarget.style.color = '#dbeafe';
            e.currentTarget.style.border = '1.5px solid rgba(255,255,255,0.25)';
          }}
        >
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 