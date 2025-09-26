
import React, { Fragment } from 'react'
import styles from "./AboutHeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



const AboutHeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Life Transitions of Our Students
          </h1>
          <p className={styles.heroText}>
           We Empower Students with Ongoing Development, Offering Innovative Courses for Digital Growth and positive learning paths.

          </p>
  <span className={styles.bottomBorder}></span>
  <span className={styles.leftBorder}></span>
        
          <div className={styles.downArrow}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutHeroSection;

