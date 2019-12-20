import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {
  return (
    <div className={styles.Slogan}>
      <div className={styles.container}>
<div className={styles.SloganHeader}>Рассматриваю варианты
 удаленнной работы</div>
<div> 
<button className={styles.Sloganbutton}>Нанять меня</button>
</div>
      </div>
      
    </div>
  );
}

export default Slogan;
