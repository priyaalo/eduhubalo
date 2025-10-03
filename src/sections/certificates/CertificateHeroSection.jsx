import React, { use, useState } from 'react'
import styles from './certificate.module.css'
import { postCertificate } from '@/api/serviceapi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CertificateHeroSection = () => {

  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const validation = (e) => {
    let newerrors = {}
    if (!formdata.email.trim()) {
      newerrors.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formdata.email.trim())) {
      newerrors.email = "Enter a valid email address";
    }

    if (!formdata.password.trim()) {
      newerrors.password = "Password is required";
    }
    setErrors(newerrors);
    return newerrors;
  }


  const emailvalidation = (value) => {
    let error = "";

    if (!value.trim()) {
      error = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())) {
      error = "Enter a valid email address";
    }

    setErrors(prev => ({ ...prev, email: error }));
  };


  const passvalidation = (value) => {
    let error = "";

    if (!value.trim()) {
      error = "Password is required";
    }

    setErrors(prev => ({ ...prev, password: error }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validation();
    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await postCertificate(formdata);
        console.log("Form submitted");
        const certificateUrl = res?.data?.data?.certificate;

        if (!certificateUrl) {
          toast.error("Something went wrong.");
        } else {
          const link = document.createElement("a");
          link.href = certificateUrl;
          link.setAttribute("download", "certificate.pdf"); // default filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        setErrors({});
        setFormData({
          email: '',
          password: ''
        })
      } catch (error) {
        console.error(error)
        // alert(error.response.data.message)
        toast.error(error.response.data.message);

      }

    }
  }

  return (
    <>
      <ToastContainer />

      <div>
        <div className={styles.certificateSection}>
          <div className={styles.container}>
            <div className={styles.certificateform}>
              <div>
                <p className={styles.heroTitle}>Download Certificate</p>
                <p className={styles.heroText}>We believe in the power of continuous self-improvement</p>
              </div>
              <span className={styles.bottomBorder}></span>
              <span className={styles.leftBorder}></span>
              <div className={styles.inputDiv}>
                <div className={styles.certificateInput}>
                  <input type="email" value={formdata.email} placeholder='Email' onChange={(e) => { setFormData({ ...formdata, email: e.target.value }), emailvalidation(e.target.value) }} />
                </div>
                <p className={styles.error}>{errors.email}</p>
                <div className={styles.certificateInput}>
                  <input type="text" value={formdata.password} placeholder='Password' onChange={(e) => { setFormData({ ...formdata, password: e.target.value }), passvalidation(e.target.value) }} />
                </div>
                <p className={styles.error}>{errors.password}</p>

                <div className={styles.enroll}>
                  <button className={styles.enroll} onClick={handleSubmit}>Download</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificateHeroSection