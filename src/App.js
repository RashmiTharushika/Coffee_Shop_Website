import React from 'react';
import './App.css';
import About from './components/about/About';
import Chef from './components/chef/Chef';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Offer from './components/offer/Offer';
import Testimonial from './components/testimonial/Testimonial';



function App() {
  return (
    <div>
      
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Gallery/>
      <Chef/>
      <Offer/>
      <Testimonial/>

    </div>
  );
}

export default App;
