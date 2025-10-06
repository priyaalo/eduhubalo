import React, { Fragment } from 'react'
import styles from "./TermsContentSection.module.css"

export const TermsContentSection = () => {
  return (
    <Fragment>
      <div className={styles.PolicyContentSection}>
        <div className={styles.heading}>
          <h2>Payment Responsibility</h2>
        </div>
        <div className={styles.para}>
          <p>
            Students must pay their monthly fees on or before the due date to maintain uninterrupted access to all resources, services, and facilities. Timely payments help ALO continue providing high-quality education and support. If you face unexpected financial challenges, we encourage you to contact the finance department. We work collaboratively to find solutions while maintaining confidentiality. Late payments may result in restricted access until fees are cleared.
          </p>
        </div>

        <div className={styles.heading}>
          <h2>Academic Commitment</h2>
        </div>
        <div className={styles.para}>
          <p>
            Consistent attendance is key to academic success and professional development. Regular class participation helps students better understand course material and develop a strong work ethic. To qualify for placement assistance, students must maintain a minimum attendance of 90%. Prioritizing classes ensures that students are fully prepared for their future careers.
          </p>
        </div>

        <div className={styles.heading}>
          <h2>Placement Eligibility</h2>
        </div>
        <div className={styles.para}>
          <p>
            Placement opportunities at ALO Educational Hub are available to students who demonstrate excellence in both attendance and academic performance. Students must maintain an A-grade (within the A–C range) to be considered for placements. Weekly assessments, active participation, and consistent effort are crucial for achieving this standard. Our faculty and staff provide guidance and support to help students meet these requirements and maximize career opportunities.
          </p>
        </div>

        {/* <div className={styles.heading}>
          <h2>Changes to this Policy</h2>
          <div className={styles.para}>
            <p>
              1. We reserve the right to modify or update this Placement Policy at any time. Any changes will be communicated to students through official channels. It is your responsibility to review this policy periodically for updates.<br /><br />
              2. By continuing to use our services after these changes are posted, you acknowledge your acceptance of the revised policy.
            </p>
          </div>
        </div> */}
      </div>
    </Fragment>
  )
}

export default TermsContentSection;
