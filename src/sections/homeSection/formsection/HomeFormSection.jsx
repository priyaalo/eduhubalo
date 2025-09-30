"use client";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import styles from "./HomeFormSection.module.css";
import { postEnrollmentRequest } from "../../../../api/serviceapi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email.trim())
    )
      newErrors.email = "Enter a valid email";

    if (!formData.education.trim())
      newErrors.education = "Education is required";

    if (!formData.course.trim()) newErrors.course = "Course is required";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await postEnrollmentRequest({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          education: formData.education,
          course: formData.course,
          enrollType: "phone",
          message: "",
          subAdminId: "672dc6e968f8505e6d8e9d44", 
        });

        if (res.status === 200) {
          toast.success(" Enrollment Successful!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            education: "",
            course: "",
          });
          setErrors({});
        }
      } catch (error) {
        console.error("Enrollment API Error:", error);
        toast.error(" Server not reachable. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className={styles.homeform}>
        <div className={styles.container}>
          <h2 className={styles.title}>Let’s Connect</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Name</label>
            <div className={styles.in}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  handleChange(e);
                  if (errors.name) validateForm();
                }}
              />
              <p className={styles.error}>{errors.name}</p>
            </div>

            <label>Phone Number</label>
            <div className={styles.phoneInput1}>
              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={(phone) => {
                  setFormData({ ...formData, phone });
                  if (errors.phone) validateForm();
                }}
                inputStyle={{ width: "100%" }}
              />
              <p className={styles.error}>{errors.phone}</p>
            </div>

            <label>Email</label>
            <div className={styles.in}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  if (errors.email) validateForm();
                }}
              />
              <p className={styles.error}>{errors.email}</p>
            </div>

            <label>Educational Background</label>
            <div className={styles.in}>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={(e) => {
                  handleChange(e);
                  if (errors.education) validateForm();
                }}
              />
              <p className={styles.error}>{errors.education}</p>
            </div>

            <label>Select Course</label>
            <div className={styles.in}>
              <select
                name="course"
                value={formData.course}
                onChange={(e) => {
                  handleChange(e);
                  if (errors.course) validateForm();
                }}
              >
                <option value="">Select Course</option>
                <option value="web">UI/UX Design</option>
                <option value="app">Front-End Development</option>
                <option value="back">Back-End Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="python">Python</option>
                <option value="Java">Java</option>
                <option value="HRM">HRM</option>
                <option value="tally">Tally</option>
                <option value="ai">Artificial Intelligence</option>
                 <option value="ds">Data Science</option>
              </select>
              <p className={styles.error}>{errors.course}</p>
            </div>

            <div className={styles.buttonn}>
              <button type="submit" className={styles.btn}>
                Request Call Back
              </button>
            </div>
          </form>
        </div>
      </div>

   
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default HomeFormSection;
