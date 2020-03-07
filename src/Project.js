import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        // <div className={styles.block}>
        //     <div className={styles.photo} style={{backgroundImage: `URL(${props.img})`}}
        //
        //     >
        //
        //         <div className={styles.buttonbefore}>
        //         <a className={styles.butn} href='https://lavana555.github.io/portfolio/'>
        //             <button className={styles.button}>смотреть</button> </a>
        //             <a className={styles.butn} href='https://lavana555.github.io/portfolio/'>
        //                 <button className={styles.button}>код</button>
        //                 {/*linka={Projectel.linka}*/}
        //                 {/*code={Projectel.code}*/}
        //
        //
        //         </a>
        //             </div>
        //     </div>
        //     <span className={styles.title}><h3>{props.title}</h3></span>
        //     <div className={styles.description}>{props.description}</div>
        // </div>

        <div className={styles.block}>
            <div className={styles.photo} style={{backgroundImage: `URL(${props.img})`}}></div>

                <div className={styles.buttonbefore}>
                <a className={styles.butn} href={props.linka}>
                    <button className={styles.button}>смотреть</button> </a>
                    <a className={styles.butn} href={props.code}>
                        <button className={styles.button}>код</button>
                        {/*linka={Projectel.linka}*/}
                        {/*code={Projectel.code}*/}


                </a>
                    </div>

            <span className={styles.title}><h3>{props.title}</h3></span>
            <div className={styles.description}>{props.description}</div>
        </div>


    )
}
export default Project