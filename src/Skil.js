import React from 'react';
import styles from './Skil.module.css';


function Skil(props) {

    return (
        <div className={styles.skil}>
            {/* // style={{backgroundImage:`URL(${props.icon})`}} */}
            <div
                 // style={{backgroundImage:`URL(${props.icon})`}}
                className={styles.skilHeader}>
                <img  src={props.icon} alt=""/>

            </div>
            <span className={styles.title}><h3>{props.title}</h3></span>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
};

export default Skil;
