import React from 'react'
import styles from './contactaddress.module.css'
import Link from 'next/link'

const ContactAddress = () => {
    return (
        <>
            <div className={styles.contactAddress}>
                <div className={styles.addressContent}>
                    <div>
                        <div >
                            <p className={styles.heading}>Email Address</p>
                        </div>
                        <div className={styles.subAddres}>
                            <Link href="mailto:contact@aloeducationalhub.com" style={{ textDecoration: 'none' }}><p className={styles.subhead}>contact@aloeducationalhub.com</p></Link>
                            <div className={styles.addresscontainer}>
                                <div className={styles.subaddress}>
                                    <p>Assistance hours: </p>
                                    <p>Monday - Friday 6 am to 8 pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <p className={styles.heading}>Hotline</p>
                        </div>
                        <div className={styles.subAddres}>
                            <p className={styles.subhead}><Link href="tel:+91 99947 25508">+91 99947 25508</Link>,
                                <span> <Link href="tel:+91 83002 96315">+91 83002 96315</Link></span> </p>
                            <div className={styles.addresscontainer}>
                                <div className={styles.subaddress}>
                                    <p>Assistance hours: </p>
                                    <p>Monday - Friday 6 am to 8 pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <p className={styles.heading}>Location</p>
                        </div>
                        <div className={styles.subAddres}>
                            <div className={styles.subaddress}>
                                <p>
                                    <Link href='https://www.google.com/maps/dir//ALO+Educational+Hub+Chunkankadai+Nagercoil,+Tamil+Nadu+629003/@8.1990139,77.3830623,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6969a57d008e757d:0xf708985f3b380092!2m2!1d77.3830623!2d8.1990139?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D' style={{ textDecoration: 'none' , color:'white'} } target="_blank"> 2/2, Chunkankadai, Nagercoil, Tamil Nadu 629003

                                    </Link>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.map}>
                    <div className={styles.mapContainer}>
                        <div className={styles.contacthead}>
                            <p className={styles.mainmaphead}>Lost? Dont Worry, We&apos;re not hiding! Find us here!</p>
                            <p className={styles.submaphead}>Innovative Solutions for Digital Excellence </p>
                        </div>

                        <div className={styles.mapFrame}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.03755854046!2d77.381745!3d8.198971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6969a57d008e757d%3A0xf708985f3b380092!2sALO%20Educational%20Hub!5e0!3m2!1sen!2sin!4v1758627516937!5m2!1sen!2sin" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactAddress