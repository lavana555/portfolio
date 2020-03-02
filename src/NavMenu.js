import React from 'react';
import styles from './NavMenu.module.css';
import {Link, animateScroll as scroll} from "react-scroll";

function NavMenu() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className={styles.NavMenu} onClick={scrollToTop}>

            <ul>
                <li className={styles.link}><Link to="mainBlock" activeClass="active" spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={1000}>Главная </Link></li>
                <li className={styles.link}><Link to="skils" activeClass="active" spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={1000} activeClass="active">Cкилы </Link></li>
                <li className={styles.link}><Link to="projects" activeClass="active" spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={1000} className={styles.link}> Работы </Link></li>
                <li className={styles.link}><Link to="contacts" activeClass="active" spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={1000}>Контакты </Link></li>


            </ul>


            {/*<a href='#mainBlock' className={styles.link}>Главная </a>*/}
            {/*<a href="#skils" className={styles.link}>Cкилы </a>*/}
            {/*<a href="#projects" className={styles.link}>Работы </a>*/}
            {/*<a href="#contacts" className={styles.link}>Контакты </a>*/}
        </div>

    );
}

export default NavMenu;
