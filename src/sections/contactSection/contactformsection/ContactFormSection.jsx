'use client'
import React, { use, useState } from 'react'
import styles from './contactform.module.css'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import contactimg from '@/assets/contact/contactform.png'
import { postContactRequest } from '@/api/serviceapi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormSection = () => {
    const [formdata, setFormData] = useState({
        email: "",
        comment: "",
        mobileNo: '',
        name: ''
    })

    const [errors, setErrors] = useState({
        email: "",
        message: "",
        phonenumber: '',
        name: ''
    })

    const validation = (e) => {
        let newerrors = {}
        if (!formdata.email.trim()) {
            newerrors.email = "Email is required";
        } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formdata.email.trim())) {
            newerrors.email = "Enter a valid email address";
        }


        if (!formdata.name.trim()) {
            newerrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formdata.name.trim())) {
            newerrors.name = "Enter a valid name without numbers and special characters";
        }

        if (!formdata.comment.trim()) {
            newerrors.message = "Your message is required";
        }

        if (!formdata.mobileNo.trim()) {
            newerrors.phonenumber = "Phone number is required";
        } else if (!/^\d{12}$/.test(formdata.mobileNo.trim())) {
            newerrors.phonenumber = "Enter a valid 10-digit phone number";
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
    const[loading,setLoading]=useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validation();
        if (Object.keys(newErrors).length === 0) {
            setLoading(true)
            try {
                const response = await postContactRequest(formdata);
                console.log("Form submitted:", response.data, 'sdsd', formdata);
                toast.success("Your message has been sent successfully.");
                setErrors({});
                setFormData({
                    email: "",
                    comment: "",
                    mobileNo: '',
                    name: ''
                })

            } catch (error) {
                console.error(error);
                toast.error("Failed to submit form. Please try again.");
            }finally{
                setLoading(false)
            }
        }
    }
    return (
        <>
            <ToastContainer />
            <div className={styles.contactwhole}>
                <div className={styles.contacthead}>
                    <p className={styles.mainhead}>We are Always Delighted to Assist You</p>
                    <p className={styles.subhead}>From Humble Beginnings to Leading Software Training Innovator</p>
                </div>
                <div className={styles.contactform}>
                    <div>
                        <div className={styles.formdiv}>
                            <div className={styles.label}>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className={styles.input}>
                                <input type="text" value={formdata.name} onChange={(e) => { setFormData({ ...formdata, name: e.target.value }), namevalidation(e.target.value) }} name="name" id="name" />
                            </div>
                            <p className={styles.error}>{errors.name}</p>
                        </div>
                        <div className={styles.formdiv}>
                            <div className={styles.label}>
                                <label htmlFor="number" >Phone Number</label>
                            </div>
                            <div>
                                <PhoneInput
                                    country='in'
                                    value={formdata.mobileNo}
                                    onChange={(phone) => {
                                        setFormData({ ...formdata, mobileNo: phone });
                                        mobilevalidation(phone); // pass phone directly
                                    }}
                                />
                            </div>
                            <p className={styles.error}>{errors.phonenumber}</p>
                        </div>
                        <div className={styles.formdiv}>
                            <div className={styles.label}>
                                <label htmlFor="email" >Email</label>
                            </div>
                            <div className={styles.input}>
                                <input type="email" value={formdata.email} onChange={(e) => { setFormData({ ...formdata, email: e.target.value }), emailvalidation(e.target.value) }} name="email" id="email" />
                            </div>
                            <p className={styles.error}>{errors.email}</p>
                        </div>
                        <div className={styles.formdiv}>
                            <div className={styles.label}>
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <div className={styles.input}>
                                <textarea name="message" value={formdata.comment} onChange={(e) => { setFormData({ ...formdata, comment: e.target.value }), messvalidation(e.target.value) }} id="message"></textarea>
                            </div>
                            <p className={styles.error}>{errors.message}</p>
                        </div>
                        <div className={styles.submit}>
                            <button onClick={handleSubmit}>{loading ? "Submitting..." : "Submit"}</button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.contactimg}>
                            <img src={contactimg.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ContactFormSection