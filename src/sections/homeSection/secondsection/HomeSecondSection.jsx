import React from 'react'
import styles from './HomeSecondSection.module.css';
import img1 from '@/assets/hero/course1.png'
import img2 from '@/assets/hero/course1.png'

const HomeSecondSection = () => {

  return (
    <div className={styles.second}>
      <div className={styles.content}>
        <h1>Advance Your Career with 2  <span className={styles.highlight}>Expertly Crafted</span> Courses</h1>
        <p>At ALO Educational Hub, our advanced courses are designed to refine your skills, fuel your growth, and prepare you for future success.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card1}>
          <div className={styles.cardimg}>
            <img src={img1.src} alt="Course 1" />
          </div>
          <div className={styles.color}></div>

          <div className={styles.textContainer}>
            <div className={styles.fu}>
 <p >FOR A BETTER FUTURE</p>
           </div>
            <div className={styles.future}>
              
              <h3>Certification Course in Full - Stack Development & UI/UX Design</h3>
              <a href="#" className={styles.link}>Learn More<span> →</span></a>
            </div>

            <div className={styles.future1}>
              
              <h3>Begin your path to Full- Stack Development & UI/UX mastery with our exclusive program! Join today and swiftly gain expertise in both fields.`</h3>
              <a href="#" className={styles.link}>Explore<span className={styles.highlight}> →</span></a>
            </div>
          </div>
        </div>


        <div className={styles.card1}>
          <div className={styles.cardimg}>
            <img src={img2.src} alt="Course 2" />
          </div>
          <div className={styles.color}></div>

          <div className={styles.textContainer}>
           <div className={styles.fu}>
 <p >FOR A BETTER FUTURE</p>
           </div>
           
            <div className={styles.future}>
              

              <h3>Certification Course in Mobile App Development & UI/UX Design</h3>


              <a href="#" className={styles.link}>Learn More <span> →</span></a>
            </div>

            <div className={styles.future1}>
              
              <h3>Begin your path to becoming a Mobile App Development and UI/UX specialist with our exclusive program. Enroll today to hone your skills and excel in both areas swiftly!</h3>
              <a href="#" className={styles.link}>Explore<span className={styles.highlight}> →</span></a>


            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSecondSection