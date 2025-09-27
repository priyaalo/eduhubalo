
import React, { Fragment } from 'react'
import styles from "./CoursesHeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



const CoursesHeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Certification Course in UI/UX Design
          </h1>
          <p className={styles.heroText}>
           Learn Photoshop, Illustrator, and Figma Skills while Mastering UI/UX Design to Create Stunning Visuals and Improve User Experiences Effectively. 
          </p>
  <span className={styles.bottomBorder}></span>
  <span className={styles.leftBorder}></span>
          {/* Font Awesome down arrow */}
          <div className={styles.downArrow}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div></section>
        
     <section className={styles.pad}>
  <div className={styles.batch}>
    <div className={styles.card}>
      <div className={styles.up}>
        <h1>Upcoming Batches</h1>
      </div>
      <div className={styles.down}>

       
        <div className={styles.card1}>
          <div className={styles.gap}>
            <h3>UI/UX Design</h3>
            <p>Aug 10<sup>th</sup></p>
          </div>
          <div className={styles.ash}>
            <h4>No Seats</h4>
          </div>
        </div>

<div className={styles.card2}>
  <div className={styles.gap}>
    <h3>UI/UX Design</h3>
   
    <div className={styles.book}>
      <p>Aug 10<sup>th</sup></p>
    </div>
    <div className={styles.book1}>
      <p>Grab your Ctune</p>
    </div>
  </div>
  <div className={styles.blue}>
    <h4>Fast Filling</h4>
  </div>
</div>

        <div className={styles.card1}>
          <div className={styles.gap}>
            <h3>UI/UX Design</h3>
            <p>Aug 10<sup>th</sup></p>
          </div>
          <div className={styles.green}>
            <h4>Open Now</h4>
          </div>
        </div>

      </div>
    </div><div className={styles.downn}>
      
    </div>
  </div>
</section>
    
    </Fragment>
  );
};

export default CoursesHeroSection;

