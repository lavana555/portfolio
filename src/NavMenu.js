import React from 'react';
import styles from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={styles.NavMenu}>

      <a href='#' className={styles.link}>Главная </a>
      <a href="#" className={styles.link}>Cкилы </a>
      <a href="#" className={styles.link}>Работы </a>
      <a href="#" className={styles.link}>Контакты </a>
    </div>

  );
}

export default NavMenu;
