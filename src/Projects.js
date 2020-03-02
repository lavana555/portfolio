import React from 'react';
import styles from './Progects.module.css';
import Project from './Project';
import todolistLogo from "./assets/img/todolist5.jpg";
import dogsLogo from "./assets/img/dogs4.jpg";
import schetchiklogo from "./assets/img/counter.jpg"
import calculatorlogo from "./assets/img/calc4.jpg"




let state={
  projects:[
    {title:"todolist", description:"React/React-Redux,API/Ajax/Axios,Redux-thunk",
    picture:todolistLogo},
    {title:"dogs game", description:"React,Redux,HTML,CSS",
      picture:dogsLogo},
    {title:"counter",description:"React,Redux,HTML,CSS",picture:schetchiklogo},
    {title:"calculator",description:"React,Redux,HTML,CSS",picture:calculatorlogo}
  ]
}
const Projectels=state.projects.map(Projectel=><Project title={Projectel.title} description={Projectel.description}  img={Projectel.picture} />)
function Projects() {
  return (
    <div id="projects" className={styles.Projects}>
      <div className={styles.container}>
        <div className={styles.containerHeader}> 
        <h2 className={styles.title}>Мои работы</h2>
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
