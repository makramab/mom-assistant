import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatPage from './pages/ChatPage';
import Marketplace from './pages/Marketplace';
import CampaignDetail from './pages/CampaignDetail';
import KadersDashboard from './pages/KadersDashboard';
import MotherDashboard from './pages/MotherDashboard';
import OtherDashboard from './pages/OtherDashboard';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<CampaignDetail />} />
        <Route path="/dashboard/kader" element={<KadersDashboard />} />
        <Route path="/dashboard/mother" element={<MotherDashboard />} />
        <Route path="/dashboard/other" element={<OtherDashboard />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
