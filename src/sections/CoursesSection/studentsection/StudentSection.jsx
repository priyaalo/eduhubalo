import React, { Fragment } from "react";
import styles from "./StudentSection.module.css";
import man from "@/assets/courses/vaishnavi.JPG";
import man2 from "@/assets/courses/img2.JPG";
import man3 from "@/assets/courses/img3.JPG";
import man4 from "@/assets/courses/img4.JPG";
import colon from "@/assets/courses/colon.png";

const StudentSection = () => {
  const icons = [
    { id: 1, name: "Aravind ", text: "ALO Educational Hub sharpened my Graphic Design skills, giving me the creative edge to excel in the design industry", image: man2, image1: colon },
    { id: 2, name: "Akram Shihaf A", text: "Learning Digital Marketing at ALO Educational Hub sharpened my skills and prepared me to succeed in the dynamic marketing world.", image: man3, image1: colon },
    { id: 3, name: "Abitha", text: "Thanks to ALO Educational Hub, I gained the knowledge and skills to confidently navigate the dynamic world of Digital Marketing.", image: man4, image1: colon },
    { id: 4, name: "Vaishnavi", text: "ALO Educational Hub refined my Frontend Development abilities, giving me the confidence to deliver web solutions.", image: man, image1: colon },
    // { id: 5, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    // { id: 6, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    // { id: 7, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    // { id: 8, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
  ];


  const repeatedIcons = [...icons, ...icons, ...icons];

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2>Words From Our Students</h2>
          <p>
            Explore the experiences our students have gained at ALO Educational Hub.
          </p>
        </div>

        <div className={styles.homePageCarousal}>
          <div className={styles.homePageCarousalContainer}>
            {repeatedIcons.map((item, index) => (
              <div
                key={index}
                className={`${styles.homePageCarousalSplit} ${styles.homePageCarousalSplitDivs}`}
              > <div className={styles.img1}>
                <img src={item.image1.src} className={styles.colon} alt="colon" /></div>
                <div className={styles.img2}>
                <img src={item.image.src} className={styles.imagecard} alt={item.name} /></div>
                <p>{item.text}</p>
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentSection;

