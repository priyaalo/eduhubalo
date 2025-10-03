import React, { Fragment } from 'react'
import styles from "./PolicyContentSection.module.css"

export const PolicyContentSection = () => {
  return (
    <Fragment>
      <div className={styles.PolicyContentSection}>
        <div className={styles.heading}>
          <h2>Payment Policy</h2>
        </div>
        <div className={styles.para}>
          <p>
            1. Monthly Fee: Students must pay the monthly fee on or before the specified due date. This ensures uninterrupted access to our resources, services, and facilities. Failure to pay on time may result in restricted access until payment is received.<br /><br />
            2. Consequences: Failure to pay on time may result in restricted access to resources, services, or facilities. We reserve the right to take necessary action to collect outstanding fees, including but not limited to, suspension of services and facilities.<br /><br />
            3. Reminders: We understand the importance of timely payments. To assist you in meeting deadlines, we provide timely reminders for upcoming payments. These reminders will be sent via email or through our communication channels to ensure you have ample notice.<br /><br />
            4. Difficulties: Students facing challenges meeting deadlines are encouraged to contact the finance department promptly. We are here to assist you and work together to find solutions. Your concerns and situations will be handled with confidentiality and understanding.<br /><br />
          </p>
        </div>

        <div className={styles.heading}>
          <h2>Placement Policy</h2>
        </div>
        <div className={styles.para}>
          <p>
            1. Commitment: ALO is committed to providing students with professional growth opportunities. We strive to connect our students with valuable placement opportunities to enhance their careers.<br />
            2. Professionalism: We believe that consistent attendance is essential for academic excellence and professionalism. Attending classes regularly not only contributes to academic success but also prepares students for the demands of their future careers.<br /><br />
            3. Attendance Requirement: To be eligible for placement assistance, students must maintain a minimum attendance of 90%. This requirement ensures that students are actively engaged in their education and fully prepared for their professional endeavors.<br /><br />
            4. Placement Exclusivity: Placement services offered by ALO Educational Hub are exclusively for students who meet the 90% attendance criterion. This exclusivity is designed to provide the best opportunities to those who are dedicated to their education and future careers.<br /><br />
            5. Eligibility Criteria: Students failing to meet the attendance requirement are ineligible for placement assistance. We encourage all students to prioritize attendance to maximize their chances of securing rewarding career opportunities.<br /><br />
            6. Prioritizing Attendance: Regular attendance contributes to academic success and enhances career opportunities. We urge students to prioritize attendance as it directly impacts their educational experience and future career prospects.
          </p>
        </div>

        <div className={styles.heading}>
          <h2>Grade Requirement Policy</h2>
        </div>
        <div className={styles.para}>
          <p>
            1. Grade Range: ALO follows a placement grade range from A to C. This range reflects our commitment to excellence and ensures that students are adequately prepared for professional opportunities.<br /><br />
            2. Eligibility: Only students maintaining an A grade are eligible for placement services. We believe that maintaining high academic standards is crucial for success in the competitive job market.<br /><br />
            3. Assessment Participation: Weekly assessments and tasks are key factors in determining the student&apos;s grade. Active participation in these assessments is essential for tracking progress and ensuring eligibility for placement services.<br /><br />
            4. Support and Guidance: ALO provides support and guidance to help students improve their performance and achieve the required A grade. Our faculty and staff are here to assist students on their academic journey.<br /><br />
            5. Striving for Excellence: Students are encouraged to strive for excellence in their studies to achieve and maintain an A grade. We believe that dedication and hard work are fundamental to achieving one&apos;s academic and career goals.<br /><br />
            6. Ineligibility: Students failing to meet the A grade criteria are not eligible for placement services. This policy ensures that our placement services are offered to students who have demonstrated a commitment to academic excellence.
          </p>
        </div>

        <div className={styles.heading}>
          <h2>Changes to this Policy</h2>
          <div className={styles.para}>
            <p>
              1. We reserve the right to modify or update this Placement Policy at any time. Any changes will be communicated to students through official channels. It is your responsibility to review this policy periodically for updates.<br /><br />
              2. By continuing to use our services after these changes are posted, you acknowledge your acceptance of the revised policy.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PolicyContentSection;
