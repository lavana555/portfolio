import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
  return (
    <div className={styles.Contacts}>
      <div className={styles.container}>
        <div className={styles.contactTitle}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.line}></div>
        </div>
      
      <form className={styles.forms}>
        <input type="text" placeholder="name"/>
        <input type="text"  placeholder="E-mail"/>
        <textarea className={styles.messageArea} placeholder="Message"></textarea>
        </form>
        <div>
        <button className={styles.button}>отправить</button>
        </div>
        </div>
    </div>
  );
}

export default Contacts;
