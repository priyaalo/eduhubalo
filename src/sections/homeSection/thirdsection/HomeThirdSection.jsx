import React, { useState } from 'react'
import styles from './HomeThirdSection.module.css'
import image1 from '@/assets/hero/tally.png'
import image2 from '@/assets/hero/webui.png'
import image3 from '@/assets/hero/digmar.png'
import image4 from '@/assets/hero/python.png'
import image5 from '@/assets/hero/mobapp.png'
import image6 from '@/assets/hero/hrm.png'
import image7 from '@/assets/hero/g1.png'
import image8 from '@/assets/hero/b1.png'
import image9 from '@/assets/hero/b2.png'
import image10 from '@/assets/hero/Frontend.png'



const HomeThirdSection = () => {
  const MAX_VISIBLE = 3;
  const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE);

  const courses = [
    {
      name: "UI/UX Design",
      duration: "3 Months",
      title: "Certification Course in Web Development & UI/UX Design",
      image: image2.src
    },
    {
      name: "Digital Marketing",
      duration: "3 Months",
      title: "Certification Course in Digital Marketing",
      image: image3.src
    },
    {
      name: "FrontEnd",
      duration: "3 Months",
      title: "Certification Course in FrontEnd Development",
      image: image10.src
    },
    {
      name: "MobileApp Development",
      duration: "3 Months",
      title: "Certification Course in MobileApp Development",
      image: image5.src
    },
    {
      name: "Tally",
      duration: "3 Months",
      title: "Certification Course in Tally",
      image: image1.src
    },
    {
      name: "python",
      duration: "3 Months",
      title: "Certification Course in Python",
      image: image4.src
    },
    {
      name: "HRM",
      duration: "3 Months",
      title: "Certification Course in Human Resource Development",
      image: image6.src
    },
    {
      name: "Web Development",
      duration: "3 Months",
      title: "Certification Course in Web Development",
      image: image2.src
    },
    {
      name: "UI/UX Design",
      duration: "3 Months",
      title: "Certification Course in Web Development & UI/UX Design",
      image: image1.src
    },
    {
      name: "BackEnd Development",
      duration: "3 Months",
      title: "Certification Course in Web Development & UI/UX Design",
      image: image2.src
    }
  ]

  const visibleCourses = courses.slice(0, visibleCount);


  return (
    <div className={styles.third}>
      <div className={styles.head}>
        <h1>Our Most Popular Courses</h1>
        <p>Explore our diverse range of educational programs to reach new heights.</p>
      </div>
      <div className={styles.card}>
        {visibleCourses.map((course, index) => (
          <div className={styles.card1} key={index}>
            <div className={styles.courses}>
              <img src={course.image} alt="Course1" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.fu}>
                <p >{course.name}</p>
              </div>

              <div className={styles.content}>

                <h4>{course.duration}</h4>
                <h3>{course.title}</h3>
                <div className={styles.border}>
                  <div className={styles.small}>
                    <img src={image7.src} rel="girl" className={styles.small1}></img>
                    <img src={image8.src} rel="tshirt" className={styles.small2}></img>
                    <img src={image9.src} rel="shirt" className={styles.small3}></img>
                  </div>
                  <div className={styles.join}>
                    <h6>Join over <span className={styles.highlight}>200+ </span>students</h6>
                  </div>
                </div>
                <a className={styles.link}>Learn More →</a>
              </div>
               <div className={styles.card2}>

                <div className={styles.content1}>

                  <h4>3 Months</h4>
                  <h3>Certification Course in <br />Web Development & UI/UX Design </h3>
                  <div className={styles.border}>
                    <div className={styles.small}>
                      <img src={image7.src} rel="girl" className={styles.small1}></img>
                      <img src={image8.src} rel="tshirt" className={styles.small2}></img>
                      <img src={image9.src} rel="shirt" className={styles.small3}></img>
                    </div>
                   <div className={styles.join}>
                     <h6>Join over <span className={styles.highlight}>200+ </span>students</h6>
                  </div>
                 </div>
                   <a className={styles.link}>Explore <span className={styles.highlight}> →</span></a>
                 </div> 
             </div> 
            </div>

          </div>
        ))}

      
      </div>
      {visibleCount < courses.length && (
        <div className={styles.button}>
          <button className={styles.more} onClick={() => setVisibleCount(prev => prev + MAX_VISIBLE)}>
            Show More
          </button>
        </div>
      )}
    </div>
  )
}
export default HomeThirdSection
