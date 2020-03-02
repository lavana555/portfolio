import React from 'react';
import styles from './Skils.module.css';
import Skil from './Skil';
import reacticon from "./assets/img/react.svg"
import htmlicon from "./assets/img/html-5.svg"
import cssicon from "./assets/img/css-3.svg"
import jslogo from "./assets/img/javascript.svg"



function Skils() {

  
  const divStyle = {
    backgroundImage: 'url("https://i.pinimg.com/236x/34/46/83/34468395d369ab52e2ace2444684e014.jpg")',
  };
  
  function HelloWorldComponent() {
    return <div style={divStyle}>Привет, мир!</div>;
  }



  let state={
    skils:[
      {title:"React",
      description:"React Redux, Redux Thunk,Redux Form,Promises,Flux Cycle,HOC,REST API",
       img:reacticon},
      {title:"JS",
        description:"Javascript ES6, OOP,using Javascript to write logic,uderstanding the structure of the virtula DOM ",
        img:jslogo},
      {title:"HTML",
      description:"HTML5 knowledge and use of basic tags,attributes,using html to create any block on the site ",
      img:htmlicon},
      {title:"CSS",
      description:"CSS3,css-modules,flex-box understanding of the model and ability to fully use,using various libraries ",
     img:cssicon}
    ]
  }





//  let state={
//   skils:[
//     {title:"React",
//     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     picture:"https://i.pinimg.com/564x/04/34/73/0434730471b33fcf101bceb372623e75.jpg"},
//     {title:"Redux",
//     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     picture:"https://www.flaticon.com/<?=_('authors/')?>payungkead"},
//     {title:"Ja native",
//     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     picture:"https://i.pinimg.com/564x/b3/de/a4/b3dea47ed0b90cde6d027220ba093fd4.jpg"}
//   ]
// }

const skil=state.skils.map(skil=><Skil 
  title={skil.title} 
  description={skil.description}
    divStyle={skil.divStyle}
  icon={skil.img}
   />)


  return (
    
    <div id="skils" className={styles.Skils}>
      <div className={styles.container}>
        <div className={styles.skillname}> 
        <h2 className={styles.title}>Мои навыки</h2>
        <div className={styles.line}></div>
        </div>
        
        <div className={styles.skils}>
          {skil}
          {/* <Skil />
          <Skil />
          <Skil /> */}
        </div>
      </div>
    </div>
  );
}

export default Skils;
