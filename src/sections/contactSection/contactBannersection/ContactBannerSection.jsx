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
                        Life Transitions of Our Students
                    </h1>
                    <p className={styles.heroText}>
                        We believe in the power of continuous self-improvement,<br />
                        offering innovative programs for digital readiness and
                        positive learning experiences.
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