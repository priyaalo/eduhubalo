import React, { Fragment } from 'react';
import styles from "./MeetTeam.module.css";
import { FaLinkedin } from "react-icons/fa";
import anishImage from "@/assets/about/anishbro.png"
import esaiImage from "@/assets/about/esaibro.png"

export const TeamSection = () => {
    return (
        <Fragment>
            <div className={styles.MeetTeam}>
                <div className={styles.heading}>
                    <h2>Meet Our Team</h2>
                    <p>Navigating Success with our Dynamic Management Squad</p>
                </div>
                <div className={styles.teamContainer}>
                    <div className={styles.teamMember}>
                        <div className={styles.imageWrapper}>
                            <img src={anishImage.src} alt="Anish" />
                        </div>
                        <h3>Anish</h3>
                        <p className={styles.title}>Founder & CEO</p>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#0077B5" />
                        </a>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.imageWrapper}>
                            <img src={esaiImage.src} alt="EsaiKumar" />
                        </div>
                        <h3>EsaiKumar</h3>
                        <p className={styles.title}>Founder & CEO</p>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#0077B5" />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};