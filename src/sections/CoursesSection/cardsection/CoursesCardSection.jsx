"use client";
import React from "react";
import styles from './CoursesCardSection.module.css'
const CoursesCardSection=()=>{

  const features = [
    { id: "01", title: "Learn at Your Convenience", desc: "Choose flexible class timings with options for both Morning and Evening sessions." },
    { id: "02", title: "Training from Industry Experts", desc: "Gain knowledge directly from professionals with rich industry experience." },
    { id: "03", title: "Real-Time Project Practice", desc: "Work on live projects and apply your skills in real-world scenarios." },
    { id: "04", title: "Skill-Focused Learning", desc: "Enhance your abilities with additional classes designed for essential skill growth." },
     { id: "05", title: "Earn Recognized Certification", desc: "Receive a Certificate of Achievement on completing your course successfully." },
    { id: "06", title: "Career & Placement Guidance", desc: "Benefit from dedicated career support and personalized placement assistance." },
    
  ];

  return (
    <section className={styles.why_section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why ALO Educational Hub?</h2>
        <p className={styles.subtitle}>
          Committed to Creative Learning Programs that Empower Growth and Lifelong Development.
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <span className={styles.number}>{feature.id}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoursesCardSection
