import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoPopup from './components/Popup/VideoPopup';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Advisors from './pages/Advisors/Advisors';
import Contact from './pages/Contact/Contact';
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
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={null} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
