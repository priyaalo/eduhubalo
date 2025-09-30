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
                            <h2>Trained Talent, Ready for Impact</h2>
                            <p>We shape 100+ students into job-ready professionals with real-world project experience - equipped to strengthen your team and accelerate success</p>
                            <button className={styles.hireButton}>Hire Talent</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HubSection;