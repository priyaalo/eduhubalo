import React from "react";
import styles from "./ValueSection.module.css";
import logoImage from "@/assets/hireTalent/alohub.png";
import roundImg from "@/assets/hireTalent/round.png";
import mobileApp from "@/assets/hireTalent/mobileapp.png";
import backend from "@/assets/hireTalent/backend.png";
import uiux from "@/assets/hireTalent/uiux.png";
import webDev from "@/assets/hireTalent/webdev.png";
import fullStack from "@/assets/hireTalent/fullstack.png";

export const ValueSection = () => {
  return (
    <div className={styles.valueSectionContainer}>
      <h1 className={styles.mainTitle}>Fields of Our Strength</h1>
      <p className={styles.subtitle}>
        Creative Minds with Skills, Shaping a Better Future
      </p>

      <div className={styles.circleWrapper}>
     
        <div className={styles.roundImg}>
          <img src={roundImg.src} alt="Round background" />
        </div>

       
        <div className={styles.logo}>
          <img src={logoImage.src} alt="Logo" />
        </div>

    
        <div className={`${styles.icon} ${styles.icon1}`}>
          <img src={mobileApp.src} alt="Mobile App Development" />
        </div>
        <div className={`${styles.icon} ${styles.icon2}`}>
          <img src={uiux.src} alt="UI/UX" />
        </div>
        <div className={`${styles.icon} ${styles.icon3}`}>
          <img src={backend.src} alt="Backend" />
        </div>

 
        <div className={`${styles.icon} ${styles.icon4}`}>
          <img src={fullStack.src} alt="Full Stack" />
        </div>
        <div className={`${styles.icon} ${styles.icon5}`}>
          <img src={webDev.src} alt="Web Development" />
        </div>
        <div className={`${styles.icon} ${styles.icon6}`}>
          <img src={backend.src} alt="Backend" />
        </div>
        <div className={`${styles.icon} ${styles.icon7}`}>
          <img src={mobileApp.src} alt="Mobile App Development" />
        </div>
        <div className={`${styles.icon} ${styles.icon8}`}>
          <img src={uiux.src} alt="UI/UX" />
        </div>
        <div className={`${styles.icon} ${styles.icon9}`}>
          <img src={webDev.src} alt="Web Development" />
        </div>
      </div>
    </div>

   
  );
};