import React, { useState, useRef } from 'react';
import styles from './HomeFourthSection.module.css';
import play from '../../../assets/hero/play.png';

const HomeFourthSection = () => {
  const [playing, setPlaying] = useState(false);
  const video1 = useRef(null);

  const handleMouseEnter = () => {
    if (video1.current) {
      video1.current.play();
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (video1.current) {
      video1.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={styles.fourth}>
      <div className={styles.head}>
        <h2 className={styles.heading}>
          Ready to launch your career in IT?
          <br />
          Begin with confidence. Begin with Alo.
        </h2>
      </div>

      <div className={styles.body}>
        <div
          className={styles.video}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={video1}
            muted
            loop
            preload="metadata"
            className={styles.video_but}
          >
            <source src="/home.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <div className={styles.play}>
              <img className={styles.play_but} src={play.src} alt="play-button" />
            </div>
          )}
        </div>

        <div className={styles.text}>
          <h3 className={styles.sub}>
            How We Work - Discover Our Unique Learning  <br />Culture
          </h3>
          <p className={styles.para}>At Alo Educational Hub, learning goes beyond textbooks. Students work alongside industry professionals, gaining practical, hands-on experience from day one. Our programs focus on real-world projects, helping students build skills that matter. With expert trainers guiding them in a supportive and collaborative environment, students grow in confidence and prepare for successful careers.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFourthSection;
