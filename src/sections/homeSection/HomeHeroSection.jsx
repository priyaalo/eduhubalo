"use client"; 
import React from 'react'
import { useState } from "react";
import styles from './HomeHeroSection.module.css';
import img1 from '@/assets/hero/elipse.png'
import img2 from '@/assets/hero/man.png'
import img3 from '@/assets/hero/plane.png'
import img4 from '@/assets/hero/search.png'
import img5 from '@/assets/hero/angular.png'
import img6 from '@/assets/hero/java.png'
import img12 from '@/assets/hero/arrow.png'
import img8 from '@/assets/hero/v.png'
import img7 from '@/assets/hero/figma.png'
import img11 from '@/assets/hero/python.png'
import img10 from '@/assets/hero/tally.png'
import img9 from '@/assets/hero/react.png'

  
  const HomeHeroSection = () => {
    const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.trim() !== "") {
      console.log(search); 
    } 
  };
  return (
    <>
      <div className={styles.hero}>
      <div className={styles.section}>
      
          
          {/* LEFT SIDE TEXT */}
          <div className={styles.left}>
            <h2>Future-Ready Courses to Power Up Your Career</h2>
            <p>
              From fundamentals to advanced skills, our courses ensure confidence, credibility, and career growth.
            </p>

            <div className={styles.click}>
          <button className={styles.enroll1}type="submit">Enroll Now</button>
          <button className={styles.course}type="submit">Explore Advanced Courses</button>
        </div>
        <div className={styles.bar}>
        <div className={styles.searchbar}>
 
    <input
      type="text"
      placeholder="Search Courses"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.search_input}/>
 
  <button  className={styles.search_button}onClick={handleSearch}>
    <img src={img4.src}rel="icon"></img>
  </button>
  </div></div></div>

<div className={styles.right}>
  <div className={styles.animation}>
  <img src={img3.src} alt="Background Circle" className={styles.plane} />

  <div className={styles.bigcircle}>
    <img src={img1.src} alt="Circle with Icons" className={styles.frame} />
    
    <div className={styles.imgg1}>
      <img src={img5.src} alt="angular" className={styles.angular} />
    </div>
    <div className={styles.imgg8}>
      <img src={img12.src} alt="arrow" className={styles.arrow} />
    </div>
    <div className={styles.imgg5}>
      <img src={img9.src} alt="react" className={styles.react} />
    </div>
    <div className={styles.imgg7}>
      <img src={img11.src} alt="python" className={styles.python} />
    </div>
    <div className={styles.imgg6}>
      <img src={img10.src} alt="tally" className={styles.tally} />
    </div>
    <div className={styles.imgg4}>
      <img src={img8.src} alt="v" className={styles.v} />
    </div><div className={styles.imgg3}>
      <img src={img7.src} alt="figma" className={styles.figma} />
    </div>
    <div className={styles.imgg2}>
      <img src={img6.src} alt="java" className={styles.java} />
    </div></div>
    
    
    
    
    
  </div>

  {/* Person Image - Static */}
  <img src={img2.src} alt="Person" className={styles.man} />
</div>
</div></div>
  </>
  )
}
export default HomeHeroSection