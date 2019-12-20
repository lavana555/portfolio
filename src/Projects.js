import React from 'react';
import styles from './Progects.module.css';
import Project from './Project';


function Projects() {
  return (
    <div className={styles.Projects}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>Мои работы </div>
        <div className={styles.blocks}> 
         
        <Project />
        <Project />

        
        </div>
        </div>
      
    </div>
  );
}

export default Projects;
