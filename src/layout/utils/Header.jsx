import React, { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import image from '../../assets/header/logo.png';
import im5 from '../../assets/header/ham.png';
import im6 from '../../assets/header/down.png';
import { usePathname } from 'next/navigation';
import imgg from '../../assets/header/arr.png'
import Link from 'next/link';


const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const path = usePathname();
  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };


  return (
    <div className={styles.nav}>
      <div className={styles.bar}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={image.src} alt="logo" />




        </div>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li className={path === "/home" || path === "/" ? styles.active : ""} ><Link href="/home">Home</Link></li>
            <li className={path === "/about" ? styles.active : ""} ><Link href="/about">About Us</Link></li>
            <li
              className={path === "/course" ? styles.active : ""}
              onMouseEnter={() => setActive("Courses")}
              onMouseLeave={() => setActive("")}>

              <Link href="/course">
                Courses <img src={im6.src} alt="down" />
              </Link>

              <ul className={styles.dropdown}>


                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("development")}>
                  Development<div className={styles.leftarr}> <img src={imgg.src} alt="arrow" /></div>
                  {openSubmenu === "development" && (
                    <ul className={styles.submenu}>
                      <li>Full Stack Development</li>
                      <li>Frontend Development</li>
                      <li>Backend Development</li>
                      <li>Mobile App Development</li>
                      <li>Full Stack with UI/UX</li>
                      <li>Mobile App with UI/UX</li>
                      <li>Python</li>
                      <li>DevOps</li>
                      <li>MERN Stack</li>
                      <li>MEAN Stack</li>
                    </ul>
                  )}
                </li>


                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("design")}>
                  Design & Editing <div className={styles.leftarr}><img src={imgg.src} alt="arrow" /></div>
                  {openSubmenu === "design" && (
                    <ul className={styles.submenu}>
                      <li>Full Stack Development</li>
                      <li>Frontend Development</li>
                      <li>Backend Development</li>
                      <li>Mobile App Development</li>
                      <li>Full Stack with UI/UX</li>
                      <li>Mobile App with UI/UX</li>
                      <li>Python</li>
                      <li>DevOps</li>
                      <li>MERN Stack</li>
                      <li>MEAN Stack</li>
                    </ul>
                  )}
                </li>


                <li>Data Analytics</li>
                <li>Data Science</li>
                <li>Testing</li>


                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("accounts")}>
                  Accounts<div className={styles.leftarr}> <img src={imgg.src} alt="arrow" /></div>
                  {openSubmenu === "accounts" && (
                    <ul className={styles.submenu}>
                      <li>Full Stack Development</li>
                      <li>Frontend Development</li>
                      <li>Backend Development</li>
                      <li>Mobile App Development</li>
                      <li>Full Stack with UI/UX</li>
                      <li>Mobile App with UI/UX</li>
                      <li>Python</li>
                      <li>DevOps</li>
                      <li>MERN Stack</li>
                      <li>MEAN Stack</li>
                    </ul>
                  )}
                </li>


                <li>HRM</li>
                <li>Digital Marketing</li>
              </ul>
            </li>



            <li className={path === "/hireTalent" ? styles.active : ""} ><Link href="/hireTalent">Hire Talents</Link></li>
            <li className={path === "/contactus" ? styles.active : ""}><Link href="/contactus">Contact Us</Link></li>
            <li className={path === "/certificates" ? styles.active : ""}><Link href="/certificates">Certificates</Link></li>
          </ul>
        </div>

        <div className={styles.button}>
          <button className={styles.enroll} type="submit">Enroll Now</button>
        </div>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <img src={im5.src} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
