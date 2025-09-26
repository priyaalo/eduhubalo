import React, { useEffect, useRef, useState } from 'react';
import chiefimg from '@/assets/about/chiefimg.png';
import styles from './Chiefsection.module.css';
import linkedin from '@/assets/about/linkedin 1.png';

export const ChiefSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.ChiefSection} ref={sectionRef}>
      <div className={styles.content}>
        <h2>
         The Vision Behind ALO Educational<br/> Hub&apos;s
Success
        </h2>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.left}>
          <img src={chiefimg.src} alt="Chief Executive Officer" className={styles.chiefImg} />
        </div>
        <div className={`${styles.right} ${animate ? styles.animateLine : ''}`}>
          <div className={`${styles.rightContent} ${animate ? styles.animateContent : ''}`}>
            <h3>Meet Our CEO</h3>
            <p>
              Our vision is to redefine
              <br />
              education with IT courses that
              <br />
              inspire creativity.
            </p>
            <img src={linkedin.src} alt="linkedinimg" className={styles.linkedinimg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefSection;
