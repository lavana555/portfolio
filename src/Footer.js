import React from 'react';
import styles from './Footer.module.css';
import faceboo from "./assets/img/faceboo.svg";
import telegramIcon from "./assets/img/telegram.svg";
import linkedinIcon from "./assets/img/linkedin.svg";
import instagramIcon from "./assets/img/instagram.svg";
import githubIcon from "./assets/img/github.svg";



function Footer() {
    return (
        <div id="footer" className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.blocks}>
                    <div className={styles.title}>Тимофеев Никита</div>
                    <div className={styles.blockitems}>

                        <div className={styles.blockitem}>
                            <a href="https://www.linkedin.com/in/nikita-timofeev-8499971a2/" alt="">
                                <img className={styles.Footerimage} src={linkedinIcon}/>
                            </a>
                        </div>
                        <div className={styles.blockitem}>
                            <a href="https://www.instagram.com/nikitimofeev/" alt="">
                                <img className={styles.Footerimage} src={instagramIcon}/>
                            </a>
                        </div>
                        <div className={styles.blockitem}>
                            <a href="#" alt="">
                                <img className={styles.Footerimage} src={telegramIcon}/>
                            </a>
                        </div>
                        <div
                            className={styles.blockitem}
                        >
                            <a href="https://github.com/lavana555" alt="">
                                <img
                                    className={styles.Footerimage}
                                    src={githubIcon}/>
                            </a>
                        </div>


                    </div>
                  <div className={styles.block}>все права защищены</div>
                </div>
            </div>
          </div>
            );
            }

            export default Footer;
