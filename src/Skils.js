import React from 'react';
import styles from './Skils.module.css';
import Skil from './Skil';


function Skils() {
  return (
    <div className={styles.Skils}>
      <div className={styles.container}>
        <div className={styles.skillname}> мои скиллы</div>
        <div className={styles.skils}>
          <Skil />
          <Skil />
          <Skil />
        </div>
      </div>
    </div>
  );
}

export default Skils;
