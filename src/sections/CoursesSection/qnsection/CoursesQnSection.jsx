"use client";
import { useState } from "react";
import styles from "./CoursesQnSection.module.css";

const CoursesQnSection=({ qna })=> {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className={styles.Section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequency Asked Questions</h2>
        <p className={styles.subtitle}>
          In code we trust, our journey never rusts
        </p>

        <div className={styles.List}>
          {qna.map((item, index) => (
            <div
              key={index}
              className={`${styles.Item} ${
                activeIndex === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <p className={styles.question}>{item.q}</p>
              <div
                className={`${styles.answerWrapper} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoursesQnSection
