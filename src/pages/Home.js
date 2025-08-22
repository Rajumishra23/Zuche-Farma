import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Video from '../components/Video';
import AgraIntro from '../components/AgraIntro';
import PharmaServices from '../components/PharmaService';
import Testimonials from '../components/Testimonial';
import Cartificates from  '../components/Cartificates';

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header/>
      <Slider/>
      <Video/>
      <AgraIntro/>
      <WhyChooseUs />
      <PharmaServices/>
      <Testimonials/>
      <Cartificates/>
    </div>
  );
};

export default Home;