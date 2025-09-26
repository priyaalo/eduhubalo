import React, { useState } from 'react'
import styles from "./Footer.module.css"
import alo from '@/assets/footer/alohub.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Footer = () => {
  const [email, setEmail] = useState("")
  const [emailerror, setEmailError] = useState("")

  const emailvalidation = (value) => {
    let error = "";

    if (!value.trim()) {
      error = ("Email is required");
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())) {
      error = ("Enter a valid email address");
    }
    setEmailError(error)

  };

  const validation = (e) => {
    let error = ""
    if (!email.trim()) {
      error = ("Email is required");
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.trim())) {
      error = ("Enter a valid email address");
    }
    setEmailError(error)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    if (!emailerror) {
      console.log("Form submitted");
      setEmailError("");
      setEmail("");
    }
  }
  return (
    <div className={styles.footer}>
      <div className={styles.up}>
        <h3>Transform Your IT Career with ALO Educational Hub Today!</h3>
         <div className={styles.button}>
        <button className={styles.enroll}type="submit">Enroll Now</button>
      </div>
      </div>
      <div className={styles.down}>
        <div className={styles.white}>
          <div className={styles.address}>
            <div className={styles.logo_img}>
              <img src={alo.src} alt="hublogo"></img>
            </div>
            <p>Christopher Colony Extension,<br /> Parvathipuram, Nagercoil,<br />
              Tamil Nadu 629003.</p>
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Hire Talents</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className={styles.policy}>
              <p>Policy</p>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </div></div>
          <div className={styles.contact}>
            <p>FOR QUICK CONTACT</p>
            <div className={styles.form1}>
              <form className={styles.quick}>
                <div style={{ display: "flex" }}>
                  <input type="email" placeholder="Enter Your E-mail" value={email} onChange={(e) => { setEmail(e.target.value), emailvalidation(e.target.value) }}></input>

                  {email && <span  onClick={() => { setEmail(''), setEmailError('') }}><IoCloseOutline style={{ cursor: "pointer" ,marginTop:'10px'}} /></span>
                  }

                </div>
                <button className={styles.submit} onClick={handleSubmit} type="submit">Submit</button>
              </form>
              {email && <p className={styles.error}>{emailerror}</p>}
              <div className={styles.qc}>
                <div className={styles.call}>
                  <p>Call us</p>
                  <h6>
                    +91 99947 25508
                  </h6>
                </div>
                <div className={styles.email}>
                  <p>Email us</p>
                  <h6>
                    contact@aloeducationalhub.com
                  </h6>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div className={styles.footer1}><hr className={styles.hrLine} />
        <div className={styles.line}>
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer