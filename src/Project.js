import React from 'react';
import styles from './Project.module.css';

function Project (props) {
    return (


        <div className={styles.block}>
          <div className={styles.photo}>
          <img className={styles.imgage}  src={props.picture} /> 
         <div className={styles.butn}> <button className={styles.button}>смотреть</button></div> 
        </div>
        
        <span><h3>{props.title}</h3></span>
        <div className={styles.description}>{props.description}</div>
        </div>



    )
}
export default Project