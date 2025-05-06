import { useNavigate } from 'react-router-dom';

const SimpleNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-[#101a2b]/80 border-b border-blue-900/60 shadow-md px-4 py-3 flex items-center sticky top-0 z-40 backdrop-blur">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-blue-100 hover:text-blue-400 font-semibold px-4 py-1.5 rounded-full border border-white/20 bg-blue-900/40 hover:bg-blue-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className="text-xl">←</span>
        <span>Back to Landing Page</span>
      </button>
    </nav>
  );
};

export default SimpleNav; 