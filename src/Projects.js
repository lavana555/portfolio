import React from 'react';
import styles from './Progects.module.css';
import Project from './Project';
import todolistLogo from "./assets/img/todolist.png";
import dogsLogo from "./assets/img/dogs.png";
import schetchiklogo from "./assets/img/schetchik.png"



let state={
  projects:[
    {title:"todolist", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    picture:todolistLogo},
    {title:"dogs", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      picture:dogsLogo},
    {title:"counter",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",picture:schetchiklogo}
  ]
}
const Projectels=state.projects.map(Projectel=><Project title={Projectel.title} description={Projectel.description}  img={Projectel.picture} />)
function Projects() {
  return (
    <div className={styles.Projects}>
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
