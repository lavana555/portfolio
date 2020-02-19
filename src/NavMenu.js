import React from 'react';
import styles from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={styles.NavMenu}>

      <a href='#mainBlock' className={styles.link}>Главная </a>
      <a href="#skils" className={styles.link}>Cкилы </a>
      <a href="#projects" className={styles.link}>Работы </a>
      <a href="#contacts" className={styles.link}>Контакты </a>
    </div>

  );
}

export default NavMenu;
