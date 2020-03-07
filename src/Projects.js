import React from 'react';
import styles from './Progects.module.css';
import Project from './Project';
import todolistLogo from "./assets/img/todolist5.jpg";
import dogsLogo from "./assets/img/dogs4.jpg";
import schetchiklogo from "./assets/img/counter.jpg"
import calculatorlogo from "./assets/img/calc4.jpg"
import Bounce from 'react-reveal/Bounce';


let state = {
    projects: [
        {
            title: "todolist",
            linka : "https://lavana555.github.io/calculator",
          code:"https://github.com/lavana555/toDoList",
            description: "React/React-Redux,API/Ajax/Axios,Redux-thunk",
            picture: todolistLogo
        },

        {
            title: "dogs game",
            description: "React,Redux,HTML,CSS",
            linka : "https://lavana555.github.io/dogs/",
          code:"https://github.com/lavana555/dogs",
            picture: dogsLogo
        },

        {
            title: "counter",
          link:"https://github.com/lavana555/newschetchikr",
          code:"https://github.com/lavana555/newschetchik",
            description: "React,Redux,HTML,CSS",
            picture: schetchiklogo
        },

        {
            title: "calculator",
          linka:"https://lavana555.github.io/calculator/",
          code:"https://github.com/lavana555/calculator",
            description: "React,Redux,HTML,CSS",
            picture: calculatorlogo
        }
    ]
}
const Projectels = state.projects.map(Projectel => <Project title={Projectel.title}
                                                            linka={Projectel.linka}
                                                            code={Projectel.code}
                                                            description={Projectel.description}
                                                            img={Projectel.picture}/>)

function Projects() {
    return (
        <div id="projects" className={styles.Projects}>
            <div className={styles.container}>
                <div className={styles.containerHeader}>
                    <Bounce top>
                        <h2 className={styles.title}>Мои работы</h2>
                    </Bounce>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.blocks}>
                    {Projectels}
                </div>
            </div>
        </div>
    );
}

export default Projects;
