import React, { Fragment } from 'react';
import styles from "./Trainers.module.css";

import TrainerImage from "@/assets/about/trainer.png"
import logoimg from "@/assets/about/alo_logo.png"


const trainers = [
    {
        name: "Liffny",
        imgSrc: "/path/to/trainer1.png"
    },
    {
        name: "Liffny",
        imgSrc: "/path/to/trainer2.png"
    },
    {
        name: "Liffny",
        imgSrc: "/path/to/trainer3.png"
    },
    {
        name: "Liffny",
        imgSrc: "/path/to/trainer4.png"
    },
];


const TeamMember = ({ name, imgSrc }) => (
    <div className={styles.teamMember}>
        <div className={styles.imageWrapper}>
            <div className={styles.img}>
            <img src={TrainerImage.src} alt={name} />
        </div>
        </div>
        <div className={styles.infoWrapper}>
            <span>{name}</span>
            <span className={styles.logo}>
                <img src={logoimg.src} alt="" /> 
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