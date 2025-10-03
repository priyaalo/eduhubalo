
import React, { Fragment } from 'react'
import styles from "./PolicyHeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



const PolicyHeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                       Privacy Policy
                    </h1>
                    <p className={styles.heroText}>
                        Welcome to ALO Educational Hub! Your Privacy Matters—Explore our Policy to Stay Secure.
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

export default PolicyHeroSection;

