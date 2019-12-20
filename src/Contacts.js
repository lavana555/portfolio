import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
  return (
    <div className={styles.Contacts}>
      <div className={styles.container}>
        <div className={styles.title}>contacts</div>
      
      <form className={styles.forms}>
        <input type="text" placeholder="name"/>
        <input type="text"  placeholder="E-mail"/>
        <textarea placeholder="Message"></textarea>
        
        </form>
        <div>
        <button className={styles.button}>отправить</button>
        </div>
        </div>
    </div>
  );
}

export default Contacts;
