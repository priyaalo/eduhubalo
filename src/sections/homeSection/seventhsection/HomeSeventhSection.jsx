import React from 'react';
import styles from './HomeSeventhSection.module.css';
import girl1 from '@/assets/hero/gg1.jpg';
import boy1 from '@/assets/hero/bb1.jpg';
import girl2 from '@/assets/hero/gg2.jpg';
import alo from '@/assets/hero/alo.png';
import line from '@/assets/hero/Line 3.png'


const HomeSeventhSection = () => {
  
  const alumniData = [
    {
      id: 1,
      image: girl1,
      name: "Ria",
      careerGap: "Career gap",
      role: "UI/UX Designer",
      logo: alo,
      line: line,
    },
    {
      id: 2,
      image: boy1,
      name: "Ria",
      careerGap: "Career gap",
      role: "Frontend Developer",
      logo: alo,
      line:line,
    },
    {
      id: 3,
      image: girl2,
      name: "Ria",
      careerGap: "Career gap",
      role: "UI/UX Designer",
      logo: alo,
      line:line,
    }
  ];

  
const repeataluminiData =[...alumniData, ...alumniData];; 
  return (
    <div className={styles.seventh}>
      <div className={styles.top}>
        <h2>Our Alumni</h2>
        <p>
          See why Students Value our Friendly Learning Community. Become part of ALO Educational Hub and Experience the Difference Directly.
        </p>
      </div>
      <div className={styles.homePageCarousal}>
        <div className={styles.track}>
          {repeataluminiData.map((item, index) => (
            <div key={index} className={styles.homePageCarousalSplit}>
              <div className={styles.imageContainer}>
                <img src={item.image.src} alt="contets" className={styles.alumniImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.nameRow}>
                  <h5>{item.name}</h5>
                  <img src={item.logo.src} alt="Alo logo" className={styles.logo} />
                </div>
                <p className={styles.careerGap}>{item.careerGap}</p>
                <div className={styles.image2}>
                  <img src={item.line.src} alt="separator" className={styles.logo}/>
                </div>
                <p className={styles.role}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSeventhSection;
