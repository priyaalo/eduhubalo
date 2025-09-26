"use client";
import { useState } from "react";
import styles from "./CoursesQnSection.module.css";

const CoursesQnSection=()=> {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I track my project?",
      answer: "You can track your project in real-time through the dashboard."
    },
    {
      question: "How do I track my project?",
      answer: "All project details are visible in your account under 'My Projects'."
    },
    {
      question: "How do I track my project?",
      answer: "We also send weekly email notifications about project progress."
    }
  ];

  return (
    <section className={styles.Section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequency Asked Questions</h2>
        <p className={styles.subtitle}>
          In code we trust, our journey never rusts
        </p>

        <div className={styles.List}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.Item} ${
                activeIndex === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <p className={styles.question}>{faq.question}</p>
              <div
                className={`${styles.answerWrapper} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoursesQnSection
