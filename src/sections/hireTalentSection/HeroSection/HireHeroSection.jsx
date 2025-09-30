
import React, { Fragment } from 'react'
import styles from "./HireHeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



const HireHeroSection = () => {
  return (
    <Fragment>
      
      <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                       Tired of the Hiring Struggle?
                    </h1>
                    <p className={styles.heroText}>
                        Build your team with skilled talent from our Hub. 100+ industry-trained students, prepared to perform and excel from day one.
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

export default HireHeroSection;

