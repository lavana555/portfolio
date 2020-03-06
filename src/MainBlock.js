import React from 'react';
import styles from './MainBlock.module.css';
import Slide from 'react-reveal/Slide';

function MainBlock() {
  return (
    <div id="mainBlock" className={styles.MainBlock}>
    <div className={styles.container}>
      <div className={styles.block}>
      <div className={styles.greeting}>
      <Slide left>
        <span>привет  </span>
        <span> я  Никита <span>Тимофеев</span> </span>
       <h1> Я front-end developer</h1>
          {/*<div className={styles.phot0before}>*/}
          </Slide>
        </div>


          <div className={styles.photobefore}>
          <Slide top>
      <div className={styles.photo}>

<div className={styles.image}></div>

</div>

      </Slide>
      </div>


      </div>

    </div>
    </div>
  );
}

export default MainBlock;
