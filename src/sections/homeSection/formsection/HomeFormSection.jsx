"use client";
import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
import styles from "./HomeFormSection.module.css";
import 'react-phone-input-2/lib/style.css'

const HomeFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        education: "",
        course: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        message: "",
        phonenumber: '',
        name: '',
        course: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validation = (e) => {
        let newerrors = {}
        if (!formData.email.trim()) {
            newerrors.email = "Email is required";
        } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email.trim())) {
            newerrors.email = "Enter a valid email address";
        }
        if (!formData.name.trim()) {
            newerrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
            newerrors.name = "Enter a valid name without numbers and special characters";
        }
        if (!formData.education.trim()) {
            newerrors.message = "Education is required";
        }
        if (!formData.phone.trim()) {
            newerrors.phonenumber = "Phone number is required";
        } else if (!/^\d{12}$/.test(formData.phone.trim())) {
            newerrors.phonenumber = "Enter a valid 10-digit phone number";
        }

        if (!formData.course.trim()) {
            newerrors.course = "Course is required";
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


    const messvalidation = (value) => {
        let error = "";

        if (!value.trim()) {
            error = "Your message is required";
        }
        setErrors(prev => ({ ...prev, message: error }));
    };

    const coursevalidation = (value) => {
        let error = "";

        if (!value.trim()) {
            error = "Course is required";
        }
        setErrors(prev => ({ ...prev, course: error }));
    };

    const namevalidation = (value) => {
        let error = "";

        if (!value.trim()) {
            error = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value.trim())) {
            error = "Enter a valid name without numbers and special characters";
        }
        setErrors(prev => ({ ...prev, name: error }));
    };

    const mobilevalidation = (value) => {
        let error = "";

        if (!value.trim()) {
            error = "Phone number is required";
        } else if (!/^\d{12}$/.test(value.trim())) {
            error = "Enter a valid 10-digit phone number";
        }
        setErrors(prev => ({ ...prev, phonenumber: error }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validation();
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted");
            setErrors({});
            setFormData({
                email: "",
                education: "",
                phonenumber: '',
                name: '',
                course: ''
            })
        }
    }
    return (
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
                            onChange={(e) => { handleChange(e), namevalidation(e.target.value) }} />
                        <p className={styles.error}>{errors.name}</p>

                    </div>
                    <label>Phone Number</label>
                    <div className={styles.phoneInput1}>
                        <PhoneInput
                            country='in'
                            value={formData.phone}
                            onChange={(phone) => {
                                setFormData({ ...formData, phone: phone });
                                mobilevalidation(phone);
                            }}
                        />
                        <p className={styles.error}>{errors.phonenumber}</p>

                    </div>
                    <label>Email</label>
                    <div className={styles.in}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => { handleChange(e), emailvalidation(e.target.value) }} />
                        <p className={styles.error}>{errors.email}</p>

                    </div>
                    <label>Educational Background</label>
                    <div className={styles.in}>
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={(e) => { handleChange(e), messvalidation(e.target.value) }} />
                        <p className={styles.error}>{errors.message}</p>

                    </div>
                    <label>Select Course</label>
                    <div className={styles.in}>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={(e) => { handleChange(e), coursevalidation(e.target.value) }}
                        >
                            <option value="">Select Course</option>
                            <option value="web">Web Development</option>
                            <option value="app">App Development</option>
                            <option value="data">Data Science</option>
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
    );
}
export default HomeFormSection