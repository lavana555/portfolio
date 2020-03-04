import React from 'react';
import styles from './Contacts.module.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';


function Contacts() {
  return (
    <div id="contacts" className={styles.Contacts}>
      <div className={styles.container}>
        <div className={styles.contactTitle}>
          <Bounce top>
        <h2 className={styles.title}>Контакты</h2>
            </Bounce>
        <div className={styles.line}></div>
        </div>
      
      <form className={styles.forms}>
        <Slide left cascade>
        <input type="text" placeholder="Your Name"/>
        <input type="text"  placeholder="Your E-mail"/>
        <textarea className={styles.messageArea} placeholder="Your message"></textarea>
      </Slide>
        </form>
        <div>
        <button className={styles.button}>отправить</button>
        </div>
        </div>
    </div>
  );
}

export default Contacts;
