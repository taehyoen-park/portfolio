import React from "react";
import styles from './Projectfile.module.css';
import { FaFileCode } from 'react-icons/fa';

export default function projectfile(){
  
  const next = () => {

  }
  return(
    <div className={styles.project}>
        <h1 ><FaFileCode/>{" " + "프로젝트"}</h1>
        <div className={styles.pj1}>asdf</div>
    </div>

  )
}