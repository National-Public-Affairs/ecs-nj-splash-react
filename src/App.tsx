import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoPopup from './components/Popup/VideoPopup';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Advisors from './pages/Advisors/Advisors';
import './App.css';

const delay = 2;

function App() {
  const [toggle, setPopup] = useState<boolean>(false);

  useEffect(() => {
    let timer = setTimeout(() => setPopup(true), delay * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={null} />
      </Routes>
      <Footer />
      {
        toggle
          ? <VideoPopup setPopup={setPopup} />
          : null
      }
    </div>
  );
}

export default App
