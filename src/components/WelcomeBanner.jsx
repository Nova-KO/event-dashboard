import React from 'react'
import styles from './WelcomeBanner.module.css'

const WelcomeBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <p className={styles.greeting}>Welcome Back,</p>
                <h1 className={styles.username}>Jane Doe</h1>
            </div>

            <div className={styles.featuredList}>
                <div className={styles.featuredCard}>
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
                        className={styles.featuredImage}
                        alt="Event"
                    />
                    <div className={styles.featuredInfo}>
                        <h4>International Music Festival...</h4>
                        <p>22 Jan - 24 Jan</p>
                        <p className={styles.subtext}>Cultural Hall, Brookefield</p>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80"
                        className={styles.featuredImage}
                        alt="Event"
                    />
                    <div className={styles.featuredInfo}>
                        <h4>International Music Festival...</h4>
                        <p>22 Jan - 24 Jan</p>
                        <p className={styles.subtext}>Cultural Hall, Brookefield</p>
                    </div>
                </div>

                <div className={styles.moreCount}>
                    +2
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner
