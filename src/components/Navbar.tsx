import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-xl text-blue-700 tracking-tight">BundaCare</div>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`
            }
          >
            Chat
          </NavLink>
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`
            }
          >
            Marketplace
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 