import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainBlock from './MainBlock';
import Skils from './Skils';
import Projects from './Projects';
import Slogan from './Slogan';
import Contacts from './Contacts';
import Particles from 'react-particles-js';


const particlesopt={
  particles:{
    number:{
      value:250,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particl' params={particlesopt}/>
      <div className="portfolio">
        <Header />
        <MainBlock id="section1"/>
        <Skils id="section2"/>
        <Projects id="section3"/>
        <Slogan id="section4"/>
        <Contacts id="section5"/>
        <Footer id="section6"/>
      </div>
    </div>
  );
}

export default App;
