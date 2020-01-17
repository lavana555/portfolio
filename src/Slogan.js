import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {
  return (
    <div className={styles.Slogan}>
      <div className={styles.container}>
        <div className={styles.SloganHeader}>
 <h2 className={styles.title}>Рассматриваю варианты
 удаленнной работы</h2>
        <div className={styles.line}></div>
 </div>
        <div>
          <button className={styles.button}>Нанять меня</button>
        </div>
      </div>

    </div>
  );
}

export default Slogan;
