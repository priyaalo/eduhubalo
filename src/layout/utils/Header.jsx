import React, { useState, useRef, useEffect } from 'react';
import styles from "./Header.module.css";
import image from '@/assets/header/logo.png';
import im5 from '@/assets/header/ham.png';
import im6 from '@/assets/header/down.png';
import { usePathname } from 'next/navigation';
import imgg from '@/assets/header/arr.png'
import Link from 'next/link';
import { useRouter } from "next/router";
import { Drawer } from 'antd';

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleEnrollClick = () => {

    if (router.pathname === "/home" || router.pathname === "/") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {

      router.push("/home#contact-form");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenSubmenu(null);
      }

      if (
        menuOpen &&
        !event.target.closest(`.${styles.menu}`) &&
        !event.target.closest(`.${styles.hamburger}`)
      ) {
        setMenuOpen(false);
        setMobileCoursesOpen(false);
        setOpenSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  const path = usePathname();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const handleCoursesMouseEnter = () => {
    setIsCoursesHovered(true);
    setActive("Courses");
  };

  const handleCoursesMouseLeave = (e) => {

    if (!e.relatedTarget ||
      !dropdownRef.current ||
      !(e.relatedTarget instanceof Node) ||
      !dropdownRef.current.contains(e.relatedTarget)) {
      setIsCoursesHovered(false);
      setActive("");
      setOpenSubmenu(null);
    }
  };

  const handleDropdownLeave = (e) => {
    const relatedTarget = e.relatedTarget;

    if (!relatedTarget ||
      !(relatedTarget instanceof Node) ||
      (!relatedTarget.closest(`.${styles.submenu}`) &&
        !relatedTarget.closest(`.${styles.menu} li`))) {
      setIsCoursesHovered(false);
      setOpenSubmenu(null);
    }
  };

  const toggleMobileCourses = () => {
    if (window.innerWidth <= 768) {
      setMobileCoursesOpen(!mobileCoursesOpen);
      setOpenSubmenu(null);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [opens, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.bar}>
          <div className={styles.logo}>
            <Link href='/home'><img src={image.src} alt="logo" /></Link>
          </div>

          <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            <ul>
              <li className={path === "/home" || path === "/" ? styles.active : ""} onClick={() => setActive("Home")}><Link href="/home">Home</Link></li>
              <li className={path === "/about" ? styles.active : ""} onClick={() => setActive("About Us")}><Link href="/about">About Us</Link></li>
              <li
                // className={path === "/course" ? styles.active : ""}
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
                onClick={toggleMobileCourses}
              >
                <Link href="" onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                  }
                }}>
                  Courses <img className={styles.icon} src={im6.src} alt="down" />
                  <div className={styles.leftarricon}>
                    <img src={imgg.src} alt="arrow" />
                  </div>
                </Link>

                {(isCoursesHovered || (menuOpen && mobileCoursesOpen)) && (
                  <ul
                    className={styles.dropdown}
                    ref={dropdownRef}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <li
                      className={styles.hasSubmenu}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu("Advanced Courses");
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span>Advanced Courses</span>
                        <div className={styles.leftarr}>
                          <img src={imgg.src} alt="arrow" />
                        </div>
                      </div>
                      {openSubmenu === "Advanced Courses" && (
                        <ul className={styles.submenu}>
                          <li> <Link href="/course?type=fullstackuiux" style={{ color: 'black' }}>Full Stack Development with UIUX Design</Link></li>
                          <li><Link href="/course?type=mobileappuiux" style={{ color: 'black' }}>Mobile App Development with UIUX Design</Link></li>
                          <li><Link href="/course?type=advuiux" style={{ color: 'black' }}>Advanced UIUX Design</Link></li>

                        </ul>
                      )}
                    </li>

                    <li
                      className={styles.hasSubmenu}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu("development");
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span>Development</span>
                        <div className={styles.leftarr}>
                          <img src={imgg.src} alt="arrow" />
                        </div>
                      </div>
                      {openSubmenu === "development" && (
                        <ul className={styles.submenu}>
                          <li><Link href="/course?type=fullstackdev" style={{ color: 'black' }}>Full Stack Development</Link></li>
                          <li><Link href="/course?type=frontenddev" style={{ color: 'black' }}>Frontend Development</Link></li>
                          <li><Link href="/course?type=mobileapp" style={{ color: 'black' }}>Mobile App Development</Link></li>
                          <li><Link href="/course?type=backenddev" style={{ color: 'black' }}>Backend Development</Link></li>
                          <li><Link href="/course?type=java" style={{ color: 'black' }}>Java</Link></li>
                          <li><Link href="/course?type=python" style={{ color: 'black' }}>Python</Link></li>
                          <li><Link href="/course?type=devops" style={{ color: 'black' }}>DevOps</Link></li>
                          <li><Link href="/course?type=mern" style={{ color: 'black' }}>MERN Stack</Link></li>
                          <li><Link href="/course?type=mean" style={{ color: 'black' }}>MEAN Stack</Link></li>
                        </ul>
                      )}
                    </li>

                    <li
                      className={styles.hasSubmenu}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu("design");
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span>Design & Editing</span>
                        <div className={styles.leftarr}>
                          <img src={imgg.src} alt="arrow" />
                        </div>
                      </div>
                      {openSubmenu === "design" && (
                        <ul className={styles.submenu}>
                          <li ><Link href="/course?type=uiux" style={{ color: 'black' }}>UIUX Design</Link></li>
                          <li><Link href="/course?type=graphic" style={{ color: 'black' }}>Graphic Design</Link></li>
                          <li><Link href="/course?type=video" style={{ color: 'black' }}>Video Editing</Link></li>
                        </ul>
                      )}
                    </li>
                    <li ><Link href="/course?type=digital" style={{ color: 'black' }}>Digital Marketing</Link></li>

                    <li><Link href="/course?type=analytics" style={{ color: 'black' }}>Data Analytics</Link></li>
                    <li><Link href="/course?type=science" style={{ color: 'black' }}>Data Science</Link></li>
                    <li><Link href="/course?type=testing" style={{ color: 'black' }}>Testing</Link></li>

                    <li

                      className={styles.hasSubmenu}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu("accounts");
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span>Accounts</span>
                        <div className={styles.leftarr}>
                          <img src={imgg.src} alt="arrow" />
                        </div>
                      </div>
                      {openSubmenu === "accounts" && (
                        <ul className={styles.submenu}>
                          <li><Link href="/course?type=tally" style={{ color: 'black' }}>Tally ERP9</Link></li>
                          <li><Link href="/course?type=sap" style={{ color: 'black' }}>SAP FICO</Link></li>
                        </ul>
                      )}
                    </li>

                    <li><Link href="/course?type=hrm" style={{ color: 'black' }}>HRM</Link></li>
                  </ul>
                )}
              </li>

              <li className={path === "/hireTalent" ? styles.active : ""} onClick={() => setActive("Hire Talents")}><Link href="/hireTalent">Hire Talents</Link></li>
              <li className={path === "/contactus" ? styles.active : ""} onClick={() => setActive("Contact Us")}><Link href="/contactus">Contact Us</Link></li>
              <li className={path === "/certificates" ? styles.active : ""} onClick={() => setActive("Certificates")}><Link href="/certificates">Certificates</Link></li>
            </ul>
          </div>

          <div className={styles.button}>
            <button className={styles.enroll} type="submit" onClick={handleEnrollClick}>Enroll Now</button>
          </div>

          <div className={styles.hamburger} onClick={showDrawer}>
            <img src={im5.src} alt="menu" />
          </div>
        </div>
      </div>

      <Drawer
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={opens}
        className={styles.drawer}
      >
        <ul className={styles.mobilenav}>
          <li
            className={path === "/home" || path === "/" ? styles.active : ""}
            onClick={() => onClose()}
          >
            <Link href="/home">Home</Link>
          </li>

          <li
            className={path === "/about" ? styles.active : ""}
            onClick={() => onClose()}
          >
            <Link href="/about">About Us</Link>
          </li>

          {/* Courses Section with expandable menu */}
          <li onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}>
            <div className={styles.coursesHeader}>
              <span>Courses</span>
              <img
                src={imgg.src}
                alt="arrow"
                className={`${styles.arrowIcon} ${mobileCoursesOpen ? styles.rotate : ""}`}
              />
            </div>

            {mobileCoursesOpen && (
              <ul className={styles.submenu}>
                {/* Advanced Courses */}
                <li onClick={(e) => { e.stopPropagation(); toggleSubmenu("Advanced Courses"); }}>
                  <div className={styles.submenuHeader}>
                    <span>Advanced Courses</span>
                    <img
                      src={imgg.src}
                      alt="arrow"
                      className={`${styles.arrowIcon} ${openSubmenu === "Advanced Courses" ? styles.rotate : ""}`}
                    />
                  </div>
                  {openSubmenu === "Advanced Courses" && (
                    <ul className={styles.subsubmenu}>
                      <li><Link href="/course?type=fullstackuiux" onClick={onClose}>Full Stack Development with UIUX Design</Link></li>
                      <li><Link href="/course?type=mobileappuiux" onClick={onClose}>Mobile App Development with UIUX Design</Link></li>
                      <li><Link href="/course?type=advuiux" onClick={onClose}>Advanced UIUX Design</Link></li>
                    </ul>
                  )}
                </li>

                {/* Development */}
                <li onClick={(e) => { e.stopPropagation(); toggleSubmenu("development"); }}>
                  <div className={styles.submenuHeader}>
                    <span>Development</span>
                    <img
                      src={imgg.src}
                      alt="arrow"
                      className={`${styles.arrowIcon} ${openSubmenu === "development" ? styles.rotate : ""}`}
                    />
                  </div>
                  {openSubmenu === "development" && (
                    <ul className={styles.subsubmenu}>
                      <li><Link href="/course?type=fullstackdev" onClick={onClose}>Full Stack Development</Link></li>
                      <li><Link href="/course?type=frontenddev" onClick={onClose}>Frontend Development</Link></li>
                      <li><Link href="/course?type=mobileapp" onClick={onClose}>Mobile App Development</Link></li>
                      <li><Link href="/course?type=backenddev" onClick={onClose}>Backend Development</Link></li>
                      <li><Link href="/course?type=java" onClick={onClose}>Java</Link></li>
                      <li><Link href="/course?type=python" onClick={onClose}>Python</Link></li>
                      <li><Link href="/course?type=devops" onClick={onClose}>DevOps</Link></li>
                      <li><Link href="/course?type=mern" onClick={onClose}>MERN Stack</Link></li>
                      <li><Link href="/course?type=mean" onClick={onClose}>MEAN Stack</Link></li>
                    </ul>
                  )}
                </li>

                {/* Simple links */}
                <li className={styles.simplelink}><Link href="/course?type=digital" onClick={onClose}>Digital Marketing</Link></li>
                <li className={styles.simplelink}><Link href="/course?type=analytics" onClick={onClose}>Data Analytics</Link></li>
                <li className={styles.simplelink}><Link href="/course?type=science" onClick={onClose}>Data Science</Link></li>
                <li className={styles.simplelink}><Link href="/course?type=testing" onClick={onClose}>Testing</Link></li>

                {/* Accounts */}
                <li onClick={(e) => { e.stopPropagation(); toggleSubmenu("accounts"); }}>
                  <div className={styles.submenuHeader}>
                    <span>Accounts</span>
                    <img
                      src={imgg.src}
                      alt="arrow"
                      className={`${styles.arrowIcon} ${openSubmenu === "accounts" ? styles.rotate : ""}`}
                    />
                  </div>
                  {openSubmenu === "accounts" && (
                    <ul className={styles.subsubmenu}>
                      <li><Link href="/course?type=tally" onClick={onClose}>Tally ERP9</Link></li>
                      <li><Link href="/course?type=sap" onClick={onClose}>SAP FICO</Link></li>
                    </ul>
                  )}
                </li>

                <li className={styles.simplelink}><Link href="/course?type=hrm" onClick={onClose}>HRM</Link></li>
              </ul>
            )}
          </li>

          <li className={path === "/hireTalent" ? styles.active : ""} onClick={onClose}>
            <Link href="/hireTalent">Hire Talents</Link>
          </li>
          <li className={path === "/contactus" ? styles.active : ""} onClick={onClose}>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li className={path === "/certificates" ? styles.active : ""} onClick={onClose}>
            <Link href="/certificates">Certificates</Link>
          </li>
        </ul>
      </Drawer>

    </>
  );
};

export default Header;