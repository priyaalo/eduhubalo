import React, { Fragment } from 'react'
import sideimg1 from "@/assets/about/Rectangle 147.png"
import sideimg2 from "@/assets/about/Rectangle 148.png"
import styles from "./VisionSection.module.css"

const VisionSection = () => {
  return (
    <Fragment>
      <section className={styles.visionSection}>
        <div className={styles.Content}>
          <h2>
           Transforming Learners into Future-Ready Innovators with Software Skills
          </h2>
        </div>

        <div className={styles.visionside}>
        
          <div className={styles.left}>
            <div className={styles.img}>
              <img src={sideimg1.src} alt="side1" />
              <img src={sideimg2.src} alt="side2" />
            </div>
          </div>

        
          <div className={styles.right}>
            <h3>Our Vision</h3>
            <p>
             Our vision is to redefine education with advanced IT programs that inspire innovation, problem-solving, and a lifelong drive for knowledge.
            </p><br/>

            <h3>Our Mission</h3>
            <p>
              Our mission is to bridge the gap between academics and industry by delivering hands-on software training aligned with evolving industry trends and demands.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default VisionSection
