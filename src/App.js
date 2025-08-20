import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Mobileheader from './components/Mobileheader';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Video from './components/Video';
import Product from './components/Product';
import QualityAssurance from './components/QualityAssurence';
import GlobalPresence from './components/GlobalPresence';
import OurLetestUpdates from './components/OurLestestupdates';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Division from './components/Division';
import Careers from './components/Career';
import Feedback from './components/Feedback';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Mobileheader />
     
     
       <Header/>
        <Slider/>
        <WhyChooseUs/>
        <About/>
        <Division/>
       <QualityAssurance/>
       <Careers/>
        <Video/>
        <Product/>
        <GlobalPresence/>
        <OurLetestUpdates/>
        <Feedback/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;