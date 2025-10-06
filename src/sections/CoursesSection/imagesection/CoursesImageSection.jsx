import React from 'react'
import styles from './CoursesImageSection.module.css'
import course from '@/assets/courses/img.png'

const CoursesImageSection = ({ title, description }) => {
  return (
    <div>

      <section className={styles.why}>
        <h2 className={styles.heading}>Why This Course?</h2>

        <div className={styles.container}>

          <div className={styles.imageWrapper}>
            <span className={styles.badge}>Both Online/ Offline Available</span>
            <img
              src={course.src}
              alt={title}
              className={styles.image}
            />
          </div>


          <div className={styles.content}>
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <div className={styles.con}>
              <button className={styles.btn}>Download Brochure</button>
            </div></div>
        </div>
      </section>
    </div>
  );
}


export default CoursesImageSection