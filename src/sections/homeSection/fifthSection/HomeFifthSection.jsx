import React, { useState } from 'react'
import styles from './HomeFifthSection.module.css'
import green from '@/assets/hero/green.png'
import orange from '@/assets/hero/orange.png'
import blue from '@/assets/hero/blue.png'
import purple from '@/assets/hero/purple.png'
const HomeFifthSection = () => {

    const MAX_VISIBLE = 4;
    const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE);
    const students = [
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
        { name: 'Mohamad Nofal', job: 'UI/UX Designer', img: green.src },
    ]

    const visibleStudents = students.slice(0, visibleCount);

    return (
        <div className={styles.fifth}>
            <div className={styles.top}>
                <h1>Curious about what our students think?</h1>
                <p className={styles.top1}>Discover why Students Value our Supportive Learning Community. Experience the ALO Educational Hub and See the Difference Yourself.</p>

            </div>
            <div className={styles.bottom}>
                <div className={styles.card}>
                    {visibleStudents.map((student, index) => (
                        <div className={styles.card1}>
                            <img src={student.img} alt="greenimg"></img>
                            <h3>{student.name}</h3>
                            <p>{student.job}</p>
                        </div>
                    ))}
                </div>
            </div>
            {visibleCount < students.length && (
                <div className={styles.button}>
                    <button className={styles.more} onClick={() => setVisibleCount(prev => prev + MAX_VISIBLE)}>
                        Show More
                    </button>
                </div>
            )}
        </div>
    )
}

export default HomeFifthSection