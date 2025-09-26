import React from 'react'
import styles from './CoursesImageSection.module.css'
import course from '@/assets/courses/img.png'

const CoursesImageSection = () => {
  return (
    <div>
       
    <section className={styles.why}>
      <h2 className={styles.heading}>Why This Course?</h2>

      <div className={styles.container}>
      
        <div className={styles.imageWrapper}>
          <span className={styles.badge}>Both Online/ Offline Available</span>
          <img
            src={course.src}
            alt="UI/UX Course"
            className={styles.image}
          />
        </div>

  
        <div className={styles.content}>
          <h3>UI/UX Design</h3>
          <p>
            Our vision is to redefine education with IT courses that <br/>inspire  creativity, critical thinking, and a passion for <br/>lifelong learning .Our vision is to redefine education <br/>with IT courses that inspire  creativity, critical thinking,<br/> and a passion for lifelong learning.
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