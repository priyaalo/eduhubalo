import React, { Fragment } from "react";
import styles from "./StudentSection.module.css";
import man from "../../../assets/courses/man.png";
import colon from "../../../assets/courses/colon.png";

const StudentSection = () => {
  const icons = [
    { id: 1, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 2, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 3, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 4, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 5, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 6, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 7, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
    { id: 8, name: "Isaikumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", image: man, image1: colon },
  ];


  const repeatedIcons = [...icons, ...icons, ...icons];

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2>Our Students Says</h2>
          <p>
            We believe in the power of continuous self-improvement, offering
            innovative programs for digital readiness and positive learning
            experiences.
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
                <img src={item.image.src} alt={item.name} /></div>
                <p>{item.text}</p>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentSection;

// import React from "react";
// import styles from "./StudentSection.module.css";
// import man from "../../../assets/courses/man.png";
// import colon from "../../../assets/courses/colon.png";

// const StudentSection = () => {
//   const testimonials = [
//     { id: 1, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 2, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 3, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 4, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 5, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 6, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 7, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//     { id: 8, name: "ISAIKUMAR", text: "Lorem ipsum...", image: man, image1: colon },
//   ];

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>Our Students Says</h2>
//         <p>
//           We believe in the power of continuous self-improvement, offering
//           innovative programs for digital readiness and positive learning
//           experiences.
//         </p>
//       </div>

//       <div className={styles.grid} style={{width:'100%'}}>
//         {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
//           <div key={index} className={styles.card}>
//             <img src={item.image1} alt="colon" className={styles.colon} />
//             <div className={styles.picc}>
//               <img src={item.image} alt={item.name} className={styles.pic} />
//             </div>
//             <p className={styles.text}>{item.text}</p>
//             <h4 className={styles.name}>{item.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentSection;
