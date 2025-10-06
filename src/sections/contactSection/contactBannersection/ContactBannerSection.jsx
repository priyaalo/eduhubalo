import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./contactbanner.module.css";


const ContactBannerSection = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Get In Touch With Us!

                    </h1>
                    <p className={styles.heroText}>
                       Interested in Discussing your IT Training Vision? We're here to Assist you.

                    </p>
                    <span className={styles.bottomBorder}></span>
                    <span className={styles.leftBorder}></span>
                   
                    <div className={styles.downArrow}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactBannerSection