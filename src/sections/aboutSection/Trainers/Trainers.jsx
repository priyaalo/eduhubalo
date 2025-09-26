import React, { Fragment } from "react";
import styles from "./Trainers.module.css";

import TrainerImage from "@/assets/about/Trainer.png";
import logoimg from "@/assets/about/alo_logo.png";


const trainers = [
  {
    name: "Liffny",
    imgSrc: TrainerImage,
  },
  {
    name: "Liffny",
    imgSrc: TrainerImage,
  },
  {
    name: "Liffny",
    imgSrc: TrainerImage,
  },
  {
    name: "Liffny",
    imgSrc: TrainerImage,
  },
];

const TeamMember = ({ name, imgSrc }) => (
  <div className={styles.teamMember}>
    <div className={styles.imageWrapper}>
      <div className={styles.img}>
        {/* ✅ Use prop imgSrc, not hardcoded TrainerImage */}
        <img src={imgSrc.src} alt={name} />
      </div>
    </div>
    <div className={styles.infoWrapper}>
      <span>{name}</span>
      <span className={styles.logo}>
        <img src={logoimg.src} alt="logo" />
      </span>
    </div>
  </div>
);

export const TrainerSection = () => {
  return (
    <Fragment>
      <div className={styles.MeetTeam}>
        <div className={styles.heading}>
          <h2>Our Trainers</h2>
          <p>In code we trust, our journey never rusts</p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {trainers.map((trainer, index) => (
              <TeamMember
                key={index}
                name={trainer.name}
                imgSrc={trainer.imgSrc}
              />
            ))}

            {/* duplicate for marquee loop */}
            {trainers.map((trainer, index) => (
              <TeamMember
                key={`duplicate-${index}`}
                name={trainer.name}
                imgSrc={trainer.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
