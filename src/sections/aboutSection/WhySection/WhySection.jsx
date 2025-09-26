import React from 'react';
import styles from "./WhySection.module.css";

const whyUsData = [
    {
        title: "60+",
        subtitle: "Placements",
        description: "Exciting placements showcase student success and achievements"
    },
    {
        title: "80+",
        subtitle: "Trained Students",
        description: "Trained students excel in practical skills development."
    },
    {
        title: "100%",
        subtitle: "Job Assurance",
        description: "Guaranteed job assurance with our training programs"
    },
    {
        title: "10+",
        subtitle: "Courses",
        description: "Enhance skills with our diverse technical courses"
    }
];

export const WhyUsSection = () => {
    return (
        <div className={styles.WhyUsSection}>
            <div className={styles.ContentWrapper}>
                <div className={styles.HeadingContainer}>
                    <h2 className={styles.Heading}>Why Us?</h2>
                    <p className={styles.Subheading}>
                        We believe in the power of continuous self-improvement, <br />
                        offering innovative programs for digital readiness and positive learning experiences..
                    </p>
                </div>
                <div className={styles.CardsContainer}>
                    {whyUsData.map((item, index) => (
                        <div key={index} className={styles.Card}>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};