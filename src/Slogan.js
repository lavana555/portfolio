import React from 'react';
import styles from './Slogan.module.css';
import Bounce from 'react-reveal/Bounce';


function Slogan() {
    return (
        <div className={styles.Slogan}>
            <div className={styles.container}>
                <div className={styles.SloganHeader}>
                    <h2 className={styles.title}><Bounce left cascade>Рассматриваю варианты удаленнной работы</Bounce ></h2>
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
