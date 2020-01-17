import React from 'react';
import styles from './Skils.module.css';
import Skil from './Skil';


function Skils() {

 let state={
  skils:[
    {title:"React",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    picture:"https://i.pinimg.com/564x/04/34/73/0434730471b33fcf101bceb372623e75.jpg"},
    {title:"Redux",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",picture:"https://i.pinimg.com/564x/71/f0/a4/71f0a4c41735f951f9823725ee42cf8a.jpg"},
    {title:"Ja native",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",picture:"https://i.pinimg.com/564x/b3/de/a4/b3dea47ed0b90cde6d027220ba093fd4.jpg"}
  ]
}

const skil=state.skils.map(skil=><Skil title={skil.title} description={skil.description} picture={skil.picture} />)


  return (
    
    <div className={styles.Skils}>
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
