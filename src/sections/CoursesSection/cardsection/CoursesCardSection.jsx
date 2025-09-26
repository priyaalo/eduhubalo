"use client";
import React from "react";
import styles from './CoursesCardSection.module.css'
const CoursesCardSection=()=>{

  const features = [
    { id: "01", title: "Flexible Learning Schedule", desc: "Learn from industry experts who have hands-on experience in design and development." },
    { id: "02", title: "Flexible Learning Schedule", desc: "Learn from industry experts who have hands-on experience in design and development." },
    { id: "03", title: "Flexible Learning Schedule", desc: "Learn from industry experts who have hands-on experience in design and development." },
    { id: "04", title: "Flexible Learning Schedule", desc: "Learn from industry experts who have hands-on experience in design and development." },
    
  ];

  return (
    <section className={styles.why_section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why ALO Educational Hub?</h2>
        <p className={styles.subtitle}>
          From Humble Beginnings to Leading Software Training Innovator
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
