import React from 'react';
import styles from './MainBlock.module.css';


function MainBlock() {
  return (
    <div className={styles.MainBlock}>
    <div className={styles.container}>
      <div className={styles.block}>
      <div className={styles.greeting}> 
        <span>привет  </span>
        <span> я  Никита <span>Тимофеев</span> </span>
       <h1> Я front-end developer</h1>
        </div>
      <div className={styles.photo}>
<div className={styles.image}></div>
</div>
      </div>
    </div>
    </div>
  );
}

export default MainBlock;
