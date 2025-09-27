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
           Our UI/UX designs course provides hands-on experience with Photoshop, Illustrator, and Figma, equipping you with the skills to tackle real-world design challenges and create impactful solutions.

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