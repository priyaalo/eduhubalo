
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2"; 
import "react-phone-input-2/lib/style.css";
import styles from "./HireTalentModal.module.css";
import logo from "@/assets/hireTalent/alohub.png";
import { toast } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";
import { postHireTalentRequest } from "@/api/serviceapi";

const HireTalentModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    designation: "",
    company: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;


  const handleClose = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      designation: "",
      company: "",
      requirement: "",
    });
    setErrors({});
    closeModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[e.target.name];
        return updated;
      });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));

    if (errors.phone) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.phone;
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name.trim()))
      newErrors.name = "Enter a valid name";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,14}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email.trim())
    )
      newErrors.email = "Enter a valid email";

    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";

    if (!formData.company.trim()) newErrors.company = "Company name is required";

    if (!formData.requirement.trim())
      newErrors.requirement = "Please select a requirement";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await postHireTalentRequest({
          name: formData.name,
          mobileNo: formData.phone,
          email: formData.email,
          designation: formData.designation,
          company: formData.company,
          requirement: formData.requirement,
        });

        if (res.status === 200) {
          toast.success("Form Submitted Successfully!");
          handleClose();
        }
      } catch (error) {
        console.error("Enrollment API Error:", error);
        toast.error("Server not reachable. Please try again later.");
      }
    }
  };

  return (
    <>
      {/* <ToastContainer/> */}
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          ✕
        </button>
     

        <div className={styles.modalHeader}>
          <img src={logo.src} alt="ALO Hub Logo" className={styles.modalLogo} />
          <h2>Hire Talent From Us</h2>
          <p>Have any questions? We&apos;re here to assist you.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <label>Phone Number</label>
          <PhoneInput
            country={"in"} 
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{ name: "phone", required: true }}
            inputStyle={{ width: "100%" }}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <label>Work Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label>Your Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
          />
          {errors.designation && <p className={styles.error}>{errors.designation}</p>}

          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
          {errors.company && <p className={styles.error}>{errors.company}</p>}

          <label>Your Requirement</label>
          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
          >
            <option value="">--- Select a requirement ---</option>
            <option>FrontEnd Development</option>
            <option>BackEnd Development</option>
            <option>MobileApp Development</option>
            <option>UI/UX Designing</option>
            <option>WebDevelopment & UI/UX</option>
            <option>AppDevelopment & UI/UX</option>
            <option>Python</option>
            <option>Java</option>
            <option>Digital Marketing</option>
            <option>Tally</option>
            <option>HRM</option>
            <option>DataScience</option>
          </select>
          {errors.requirement && <p className={styles.error}>{errors.requirement}</p>}

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      
      </div>
    </div>
    </>
  );
};

export default HireTalentModal;
