import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FourZeroFour from './components/404/FourZeroFour';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Advisors from './pages/Advisors/Advisors';
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
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
