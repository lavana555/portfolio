import React from 'react';
import styles from './Skil.module.css';

function Skil(props) {
    return (
        
<div className={styles.skil}>
<div className={styles.skilHeader}>
  <img className={styles.imgage}  src={props.picture} />      
</div>
    <span><h3>{props.title}</h3></span>
    <div className={styles.description}>{props.description}</div>
</div>
    )
};

export default Skil ;
