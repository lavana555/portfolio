import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.blocks}>
          <div className={styles.block}>тимофеев никита </div>
          <div className={styles.blockitems}>
            <div className={styles.blockitem}>
              <a href='#'><img src=" " alt="" />ln</a>
            </div>
            <div className={styles.blockitem}>
              <a href='#'><img src=" " alt="" />in</a>
            </div>
            <div className={styles.blockitem}>
              <a href='#'> <img src=" " alt="" />GH </a></div>
          </div>
          <div className={styles.block}>все права защищены </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
