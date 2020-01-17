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
              <img className={styles.Footerimage} src="https://i.pinimg.com/564x/c6/07/5e/c6075e1eb114df457f8b3170b1a3811e.jpg" />
            </div>
            <div className={styles.blockitem}>
            <img className={styles.Footerimage} src="https://i.pinimg.com/564x/17/76/0a/17760a6daad2edf7f4d9b837b5437246.jpg" />
            </div>
            <div className={styles.blockitem}>
            <img  className={styles.Footerimage} src="https://i.pinimg.com/236x/c7/55/c6/c755c6f53f81803248448651289db98b.jpg" />
            </div>
              <div className={styles.blockitem}>
              <img className={styles.Footerimage} src="https://i.pinimg.com/564x/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.jpg" /> </div>
          </div>
          <div className={styles.block}>все права защищены </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
