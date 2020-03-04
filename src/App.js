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


// const particlesopt= {
//   particles: {
//     number: {
//       value: 250,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },
//     interactivity: { /* интерактивность */
//       detect_on: "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
//       /* события */
//       events: {
//         "onhover": { /* по наведению */
//           "enable": true, /* включено/выключено */
//           "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
//         },
//         "onclick": { /* по клику */
//           "enable": true, /* включено/выключено */
//           "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
//                      bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
//         }
//       }
//     },
//     "modes": { /* параметры видов событий */
//       "bubble": { /* при onhover или onclick: mode: bubble */
//         "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
//         "size": 40, /* размер увеличения частиц */
//         "duration": 2, /* продолжительность эффекта в секундах при клике */
//         "opacity": 0.2, /* максимальная прозрачность */
//         "speed": 3 /* скорость эффекта */
//       },
//       "repulse": { /* при onhover или onclick: mode: repulse */
//         "distance": 80, /* расстояние отталкивания */
//         "duration": 1 /* продолжительность отталкивания */
//       },
//       "push": { /* при onclick: mode: push */
//         "particles_nb": 4 /* количество добавляемых частиц */
//       },
//     }
//
//   }
//   }

const particlesOption = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 600
      }
    },
    line_linked: { /* связующие линии */
      "enable": true, /* включено/выключено */
      "distance": 100, /* расстояние между частицами, при котором проявляется линия */
      "color": "#646464", /* цвет */
      "opacity": 0.6, /* прозрачность */
      "width": 0.8 /* ширина */
    },
  },
  interactivity: { /* интерактивность */
    detect_on: "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
    /* события */
    events: {
      "onhover": { /* по наведению */
        "enable": true, /* включено/выключено */
        "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
      },
      "onclick": { /* по клику */
        "enable": true, /* включено/выключено */
        "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
                     bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
      }
    },

    "modes": { /* параметры видов событий */
      "bubble": { /* при onhover или onclick: mode: bubble */
        "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
        "size": 40, /* размер увеличения частиц */
        "duration": 2, /* продолжительность эффекта в секундах при клике */
        "opacity": 0.2, /* максимальная прозрачность */
        "speed": 10 /* скорость эффекта */
      },
      "repulse": { /* при onhover или onclick: mode: repulse */
        "distance": 80, /* расстояние отталкивания */
        "duration": 1 /* продолжительность отталкивания */
      },
      "push": { /* при onclick: mode: push */
        "particles_nb": 4 /* количество добавляемых частиц */
      },
    }

  }

};



function App() {
  return (
      <div className="App">
        <Particles className='particl' params={particlesOption}/>
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