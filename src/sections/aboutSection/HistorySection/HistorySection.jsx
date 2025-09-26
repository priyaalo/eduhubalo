import React from 'react';
import styles from "./HistorySection.module.css";

const historyData = [
  {
    year: "2022",
    description: "Started with a small batch of passionate learners, focusing on building strong IT foundations through hands-on training."
  },
  {
    year: "2023",
    description: "Expanded our courses and introduced advanced programs in digital marketing,software development,and design-empowering more students to upskill."
  },
  {
    year: "2024",
    description: "Partnered with colleges and industries, successfully training 100+ students and placing many in top IT companies through skill-based programs."
  },
  {
    year: "2025",
    description: "Grown into a leading IT training hub with 120+ active students, multiple innovative programs, and a strong vision to nurture future tech leaders."
  }
];

export const HistorySection = () => {
  return (
    <div className={styles.HistorySection}>
        <div className={styles.backgroundText}>
        ALO EDUCATIONAL HUB
      </div>
      <div className={styles.ContentWrapper}>
        <div className={styles.HeadingContainer}>
          <h2 className={styles.Heading}>Our History</h2>
          <p className={styles.Subheading}>
            We believe in the power of continuous self-improvement, offering innovative programs for digital readiness and positive learning experiences.
          </p>
        </div>
        <div className={styles.TimelineContainer}>
          {historyData.map((item, index) => (
            <div key={index} className={styles.TimelineItem}>
              <div className={styles.TimelineYear}>{item.year}</div>
              <div className={styles.TimelineDot}></div>
              <div className={styles.TimelineText}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};