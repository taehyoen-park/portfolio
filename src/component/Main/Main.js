import React, { useEffect } from "react"
import { useState } from "react";
import styles from './Main.module.css';
import Archiving from './Archiving/Archiving'
import Career from './Career/Career'
import Skill from './Skill/Skill'
import Projectfile from './Projectfile/Projectfile'
import Profile from './Profile/Profile'

export default function Main(){

  
  // useEffect(() => { 
  //  document.getElementById('app')?.scrollTo(0, 0); // 첫 렌더시 스크롤이 최상단 고정된다
  // }, []);
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
  //   };
  // }, []);


  return(
    <main className={styles.Main}>
      <div className={styles.backgroundClass} >
        <div className={styles.backgrountext}>
          <a>개발자 포트폴리오</a>
          <br></br>
        </div>
      </div>

      <Profile /><br/><br/>
      <Skill/><br></br><br/>
      <Projectfile /><br></br><br/>
      <Archiving /><br/><br/>
      <Career />


    </main>
  )
  
}

