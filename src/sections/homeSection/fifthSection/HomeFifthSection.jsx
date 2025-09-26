import React from 'react'
import styles from './HomeFifthSection.module.css'
import green from '@/assets/hero/green.png'
import orange from '@/assets/hero/orange.png'
import blue from '@/assets/hero/blue.png'
import purple from '@/assets/hero/purple.png'
const HomeFifthSection = () => {
  return (
    <div className={styles.fifth}>
        <div className={styles.top}>
            <h1>Curious about what our students think?</h1>
            <p className={styles.top1}>Discover why Students Value our Supportive Learning Community. Experience the ALO Educational Hub and See the Difference Yourself.</p>
            
        </div>
        <div className={styles.bottom}>
            <div className={styles.card}>
                <div className={styles.card1}>
                    <img src={green.src}alt="greenimg"></img>
                    <h3>Mohamad Nofal</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className={styles.card1}>
                    <img src={orange.src}alt="orangeimg"></img>
                    <h3>Mohamad Nofal</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className={styles.card1}>
                    <img src={blue.src}alt="blueimg"></img>
                    <h3>Mohamad Nofal</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className={styles.card1}>
                    <img src={purple.src}alt="purpleimg"></img>
                    <h3>Mohamad Nofal</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
        <div className={styles.button}>
        <button className={styles.more}>
          Show More
        </button></div>
    </div>
  )
}

export default HomeFifthSection