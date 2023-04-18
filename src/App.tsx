import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FourZeroFour from './components/404/FourZeroFour';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Advisors from './pages/Advisors/Advisors';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
