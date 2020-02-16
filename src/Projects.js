import React from 'react';
import styles from './Progects.module.css';
import Project from './Project';



let state={
  projects:[
    {title:"calculator", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    picture:"https://i.pinimg.com/564x/b4/e3/18/b4e3187622e1d2d2dd992ceedf143b87.jpg"},
    {title:"counter",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",picture:"https://st4.depositphotos.com/26753546/28547/v/600/depositphotos_285472942-stock-video-white-stopwatch-outline-flat-animation.jpg"}
   
  ]
}
const Projectels=state.projects.map(Projectel=><Project title={Projectel.title} description={Projectel.description} picture={Projectel.picture} img={Projectel.picture} />)
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
        {/* <Project />
        <Project /> */}
        
        
        </div>
        </div>
      
    </div>
  );
}

export default Projects;
