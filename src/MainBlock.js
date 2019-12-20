import React from 'react';
import styles from './MainBlock.module.css';


function MainBlock() {
  return (
    <div className={styles.MainBlock}>
    <div className={styles.container}>
      <div className={styles.block}>
      <div className={styles.greeting}> 
        <span>привет меня зовут </span>
        <span>Никита Тимофеев</span>
        <span>я frontend-developer</span>
        </div>
      <div className={styles.photo}>
<img src=" "  alt=""/>
</div>
      </div>
    </div>
    </div>
  );
}

export default MainBlock;
