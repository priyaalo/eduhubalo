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
import { postFooterRequest } from '../../../api/serviceapi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const [email, setEmail] = useState("")
  const [emailerror, setEmailError] = useState("")

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

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setEmail("");
      setEmailError("");
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);



  return (
    <>
      <ToastContainer />
      <div className={styles.footer}>
        <div className={styles.up}>
          <h3>Transform Your IT Career with ALO Educational Hub Today!</h3>
          <div className={styles.button}>
            <button className={styles.enroll} type="submit">Enroll Now</button>
          </div>
        </div>

        <div className={styles.down}>
          <div className={styles.white}>
            <div className={styles.address}>
              <div className={styles.logo_img}>
                <img src={alo.src} alt="hublogo" />
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
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
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
                    <h6>+91 99947 25508</h6>
                    <h6>+91 83002 96315</h6>
                  </div>
                  <div className={styles.email}>
                    <p>Email us</p>
                    <h6>contact@aloeducationalhub.com</h6>
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
