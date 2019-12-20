import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainBlock from './MainBlock';
import Skils from './Skils';
import Projects from './Projects';
import Slogan from './Slogan';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <Header />
        <MainBlock />
        <Skils />
        <Projects />
        <Slogan />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
