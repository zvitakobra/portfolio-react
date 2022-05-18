import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro';
import About from './components/about';
import Karate from './components/karate';
import Dev from './components/dev';
import Tech from './components/tech';
import Audio from './components/audio';
//import Info from './components/info';
//import Contact from './components/contact';
import Top from './components/btns/top';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Intro />
    <About />
    <Karate />
    <Dev />
    <Tech />
    <Audio />
    {/* <Info /> */}
    {/* <Contact /> */}
    <Footer />
    <Top />
  </React.StrictMode>
);