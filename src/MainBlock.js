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
          </Slide>
        </div>

      <div className={styles.photo}>
          <Slide right>
<div className={styles.image}></div>
          </Slide>
</div>

      </div>

    </div>
    </div>
  );
}

export default MainBlock;
