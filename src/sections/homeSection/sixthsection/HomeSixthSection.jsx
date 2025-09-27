"use client";
import React from "react";
import styles from "./HomeSixthSection.module.css";

import img1 from "@/assets/hero/well.png";
import img2 from "@/assets/hero/flipkart.png";
import img3 from "@/assets/hero/tcs.png";
import img4 from "@/assets/hero/cognizant.png";
import img5 from "@/assets/hero/amazon.png";
import img6 from "@/assets/hero/zoho.png";
import img7 from "@/assets/hero/infosys.png";

const HomeSixthSection = () => {
  const images = [
    { img: img1 },
    { img: img2},
    { img: img3 },
    { img: img4},
    { img: img5 },
    { img: img6},
    { img: img7 },
  ];

  return (
    <section className={styles.sixth_section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Where do our students work?</h2>

        <div className={styles.homePageCarousal}>
          <div className={styles.homePageCarousalContainer}>
            {[...images, ...images, ...images].map((item, index) => (
              <div
                key={index}
                className={`${styles.homePageCarousalSplit} ${styles.homePageCarousalSplitDivs}`}
              >
                <img src={item.img.src} alt={item.text} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSixthSection;

  