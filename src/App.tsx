import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatInterface from './components/ChatInterface';
import Marketplace from './pages/Marketplace';
import CampaignDetail from './pages/CampaignDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<CampaignDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
