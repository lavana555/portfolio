import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.block}>
            <div className={styles.photo} style={{backgroundImage: `URL(${props.img})`}}>
                {/*<img className={styles.imgage}  src={props.picture} />*/}
                <a className={styles.butn} href='https://lavana555.github.io/portfolio/'>
                    <button className={styles.button}>смотреть</button>
                    <a className={styles.butn} href='https://lavana555.github.io/portfolio/'>
                        <button className={styles.button}>код</button>
                    </a>
                </a>
            </div>
            <span className={styles.title}><h3>{props.title}</h3></span>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
export default Project