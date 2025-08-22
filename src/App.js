import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mobileheader from './components/Mobileheader';
import Topbar from './components/Topbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import  Quality from './pages/Quality';
import  Event from './pages/Event';
import Career from './pages/Career';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Topbar />
      <Mobileheader />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Quality" element={<Quality />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/worldwide" element={<GlobalPresence />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;