import { useNavigate } from 'react-router-dom';

const SimpleNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-md px-4 py-3 flex items-center sticky top-0 z-40">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-semibold px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 hover:bg-teal-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-200 shadow"
      >
        <span className="text-xl">←</span>
        <span>Back to Landing Page</span>
      </button>
    </nav>
  );
};

export default SimpleNav; 