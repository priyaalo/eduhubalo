import React, { useState, useRef, useEffect } from 'react';
import styles from "./Header.module.css";
import image from '@/assets/header/logo.png';
import im5 from '@/assets/header/ham.png';
import im6 from '@/assets/header/down.png';
import { usePathname } from 'next/navigation';
import imgg from '../../assets/header/arr.png'
import Link from 'next/link';

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false); 
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && 
          event.target instanceof Node && 
          !dropdownRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
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
    // Fixed: Added proper type checking
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
    // Fixed: Added proper type checking
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

  return (
    <div className={styles.nav}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <img src={image.src} alt="logo" />
        </div>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li className={path === "/home" || path === "/" ? styles.active : ""} onClick={() => setActive("Home")}><Link href="/home">Home</Link></li>
            <li className={path === "/about"? styles.active : ""} onClick={() => setActive("About Us")}><Link href="/about">About Us</Link></li>
            <li 
              className={path === "/course" ? styles.active : ""} 
              onMouseEnter={handleCoursesMouseEnter}
              onMouseLeave={handleCoursesMouseLeave}
              onClick={toggleMobileCourses}
            >
              <Link href="/course" onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault(); 
                }
              }}>
                Courses <img src={im6.src} alt="down" />
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
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                      <span>Advanced Courses</span>
                      <div className={styles.leftarr}>
                        <img src={imgg.src} alt="arrow" />
                      </div>
                    </div>
                    {openSubmenu === "Advanced Courses" && (
                      <ul className={styles.submenu}>
                        <li>Full Stack Development with UIUX Design</li>
                        <li>Frontend Development with UIUX Design</li>
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
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                      <span>Development</span>
                      <div className={styles.leftarr}>
                        <img src={imgg.src} alt="arrow" />
                      </div>
                    </div>
                    {openSubmenu === "development" && (
                      <ul className={styles.submenu}>
                        <li>Full Stack Development</li>
                        <li>Frontend Development</li>
                        <li>Mobile App Development</li>
                        <li>Backend Development</li>
                        <li>Python</li>
                        <li>DevOps</li>
                        <li>MERN Stack</li>
                        <li>MEAN Stack</li>
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
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                      <span>Design & Editing</span>
                      <div className={styles.leftarr}>
                        <img src={imgg.src} alt="arrow" />
                      </div>
                    </div>
                    {openSubmenu === "design" && (
                      <ul className={styles.submenu}>
                        <li>UIUX Design</li>
                        <li>Advanced UIUX Design</li>
                        <li>Graphic Design</li>
                        <li>Video Editing</li>
                      </ul>
                    )}
                  </li>

                  <li>Data Analytics</li>
                  <li>Data Science</li>
                  <li>Testing</li>

                  <li 
                    className={styles.hasSubmenu} 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubmenu("accounts");
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                      <span>Accounts</span>
                      <div className={styles.leftarr}>
                        <img src={imgg.src} alt="arrow" />
                      </div>
                    </div>
                    {openSubmenu === "accounts" && (
                      <ul className={styles.submenu}>
                        <li>Tally ERP9</li>
                        <li>SAP FICO</li>
                      </ul>
                    )}
                  </li>

                  <li>HRM</li>
                </ul>
              )}
            </li>

            <li className={path === "/hireTalent" ? styles.active : ""} onClick={() => setActive("Hire Talents")}><Link href="/hireTalent">Hire Talents</Link></li>
            <li className={path === "/contactus" ? styles.active : ""} onClick={() => setActive("Contact Us")}><Link href="/contactus">Contact Us</Link></li>
            <li className={path === "/certificates" ? styles.active : ""} onClick={() => setActive("Certificates")}><Link href="/certificates">Certificates</Link></li>
          </ul>
        </div>

        <div className={styles.button}>
          <button className={styles.enroll} type="submit">Enroll Now</button>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <img src={im5.src} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;