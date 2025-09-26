import React, { Fragment } from 'react';
import styles from "./HubSection.module.css";
import hubimg from "@/assets/hireTalent/man.png";

export const HubSection = () => {
    return (
        <Fragment>
            <div className={styles.HubSection}>
                <div className={styles.mainContent}>
                    <div className={styles.Headings}>
                        <h2>ALO Educational Hub</h2>
                    </div>
                  
                    <div className={styles.twoColumnWrapper}> 
                        <div className={styles.imgWrapper}>
                            <img src={hubimg.src} alt="Team working on a project" />
                        </div>
                        <div className={styles.rightSection}>
                            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                            <p>Our vision is to redefine education with IT courses that inspire creativity, critical thinking, and a passion for lifelong learning. Our vision is to redefine education with IT courses that inspire creativity, critical thinking, and a passion for lifelong learning. creativity, critical thinking, and a passion for lifelong learning. creativity,</p>
                            <button className={styles.hireButton}>Hire Talent</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HubSection;