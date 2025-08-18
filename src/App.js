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

function App() {
  return (
    <div className="App">
      <Topbar />
      <Mobileheader />
     
     
       <Header/>
        <Slider/>
        <About/>
        <Video/>
        <Product/>
        <QualityAssurance/>
        <GlobalPresence/>
        <OurLetestUpdates/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;