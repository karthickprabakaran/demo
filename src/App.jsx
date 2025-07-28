import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Properties from './pages/Properties';
import Renters from './pages/Renters';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/Policy';

import '@fontsource/crimson-pro/400.css'; // Regular
import '@fontsource/crimson-pro/700.css'; // Bold

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/renters" element={<Renters />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
