import { useNavigate } from 'react-router-dom';
import React from 'react';

const NAVBAR_HEIGHT = 72; // px, to match Navbar

const aboutLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Mission', href: '#mission' },
  { label: 'Values', href: '#values' },
  { label: 'Core Functions', href: '#core-functions' },
];

const SimpleNav = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow flex items-center px-8 py-3 transition-all duration-300 rounded-none"
      style={{ borderRadius: 0, maxWidth: '100vw', transform: 'none', minHeight: NAVBAR_HEIGHT }}
    >
      {/* Left: Brand */}
      <div className="flex-1 flex items-center">
        <span
          className="text-2xl font-extrabold tracking-tight text-teal-600 font-sans drop-shadow select-none cursor-pointer"
          style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}
          onClick={() => navigate('/')}
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
        >
          Child<span className="text-teal-500">Bright</span>
        </span>
      </div>
      {/* Center: Quick Navigation Links */}
      <div className="flex-1 flex justify-center gap-6">
        {aboutLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleAnchorClick(e, link.href)}
            className="text-base font-semibold px-2 py-1 rounded transition-colors duration-150 text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-200"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Right: Empty for alignment */}
      <div className="flex-1 flex justify-end"></div>
    </nav>
  );
};

export default SimpleNav; 