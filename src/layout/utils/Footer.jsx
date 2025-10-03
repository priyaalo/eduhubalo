import React, { useEffect, useState } from 'react'
import styles from "./Footer.module.css"
import alo from '@/assets/footer/alohub.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { postFooterRequest } from '@/api/serviceapi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";

const Footer = () => {
  const [email, setEmail] = useState("")
  const [emailerror, setEmailError] = useState("")
  const router = useRouter();

  const handleEnrollClick = () => {
    // If already on home page, just scroll
    if (router.pathname === "/home" || router.pathname === "/") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home with hash
      router.push("/home#contact-form");
    }
  };

  useEffect(() => {
    setEmailError("");
    setEmail("");

  }, []);

  const validateEmail = (value) => {
    let error = "";
    if (!value.trim()) {
      error = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())) {
      error = "Enter a valid email address";
    }
    setEmailError(error);
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (!error) {

      try {
        const response = postFooterRequest(email);
        console.log("Form submitted:", email);
        toast.success("Your mail has been sent successfully.");
        setEmail("");
        setEmailError("");
        console.log(response);
      } catch (error) {
        console.error(error);
        toast.error("Failed to submit form. Please try again.");
      }

    }
  };

  const routers = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setEmail("");
      setEmailError("");
    };
    routers.events.on("routeChangeStart", handleRouteChange);
    return () => {
      routers.events.off("routeChangeStart", handleRouteChange);
    };
  }, [routers.events]);



  return (
    <>
      <ToastContainer />
      <div className={styles.footer}>
        <div className={styles.up}>
          <h3>Transform Your IT Career with ALO Educational Hub Today!</h3>
          <div className={styles.button}>
            <button className={styles.enroll} type="submit" onClick={handleEnrollClick}>Enroll Now</button>
          </div>
        </div>

        <div className={styles.down}>
          <div className={styles.white}>
            <div className={styles.address}>
              <div className={styles.logo_img}>
                <Link href='/home'> <img src={alo.src} alt="hublogo" /></Link>
              </div>
              <p>
                2/2, Chunkankadai, Nagercoil, Tamil Nadu 629003
              </p>
              <div className={styles.icon}>
                <FaTwitter />
                <FaFacebookF />
                <RiInstagramFill />
                <FaLinkedinIn />
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles.links}>
                <p>Links</p>
                <ul>
                  <li><Link href="/home" >Home</Link></li>
                  <li><Link href="/about"  >About Us</Link></li>
                  <li><Link href="/course"   >Courses</Link></li>
                  <li><Link href="/hireTalent"  >Hire Talents</Link></li>
                  <li><Link href="/contactus"  >Contact Us</Link></li>
                </ul>
              </div>

              <div className={styles.policy}>
                <p>Policy</p>
                <li><Link href="/policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </div>
            </div>

            <div className={styles.contact}>
              <p>FOR QUICK CONTACT</p>
              <div className={styles.form1}>
                <form className={styles.quick} onSubmit={handleSubmit}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="email"
                      placeholder="Enter Your E-mail"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                    {email && (
                      <span onClick={() => { setEmail(''); setEmailError(''); }}>
                        <IoCloseOutline style={{ cursor: "pointer", marginTop: '10px' }} />
                      </span>
                    )}
                  </div>
                  <button className={styles.submit} type="submit">Submit</button>
                </form>


                {emailerror && <p className={styles.error}>{emailerror}</p>}

                <div className={styles.qc}>
                  <div className={styles.call}>
                    <p>Call us</p>
                    <Link href="tel:+91 99947 25508" style={{ textDecoration: 'none' }}> <h6>+91 99947 25508</h6></Link>
                    <Link href="tel:+91 83002 96315" style={{ textDecoration: 'none' }}>   <h6>+91 83002 96315</h6></Link>
                  </div>
                  <div className={styles.email}>
                    <p>Email us</p>
                    <Link href="mailto:contact@aloeducationalhub.com" style={{ textDecoration: 'none' }}>  <h6>contact@aloeducationalhub.com</h6></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer1}>
          <hr className={styles.hrLine} />
          <div className={styles.line}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
