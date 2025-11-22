import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.css'
import logo from '../assets/logo.png'

const Login = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setIsAnimating(true)

        // Wait for animation to finish before navigating
        setTimeout(() => {
            navigate('/')
        }, 1500) // Match this with CSS transition duration
    }

    return (
        <div className={styles.wrapper}>
            {/* Background Content (Dashboard) */}
            <div className={styles.backgroundContent}>
                {children}
            </div>

            {/* Login Overlay */}
            <div className={`${styles.container} ${isAnimating ? styles.splitOpen : ''}`}>
                <div className={styles.leftPanel}>
                    <div className={styles.brand}>
                        <img src={logo} alt="Eventify" />
                    </div>
                    <div className={styles.welcomeMessage}>
                        <h2>Welcome Back!</h2>
                        <p>Sign in to access your dashboard, manage events, and stay connected.</p>
                    </div>
                </div>

                <div className={styles.rightPanel}>
                    <div className={styles.formWrapper}>
                        <div className={styles.header}>
                            <h2>Sign In</h2>
                            <p>Please enter your details to continue</p>
                        </div>

                        <form className={styles.form} onSubmit={handleLogin}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email Address</label>
                                <div className={styles.inputWrapper}>
                                    <i className="lni lni-envelope"></i>
                                    <input type="email" id="email" placeholder="Enter your email" defaultValue="johndoe@example.com" />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="password">Password</label>
                                <div className={styles.inputWrapper}>
                                    <i className="lni lni-lock"></i>
                                    <input type="password" id="password" placeholder="Enter your password" defaultValue="password123" />
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Sign In
                            </button>
                        </form>

                        <div className={styles.divider}>
                            <span>Or continue with</span>
                        </div>

                        <div className={styles.socialButtons}>
                            <button className={styles.socialBtn}>
                                <i className="lni lni-google"></i>
                                <span>Google</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <i className="lni lni-facebook-original"></i>
                                <span>Facebook</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <i className="lni lni-microsoft"></i>
                                <span>Microsoft</span>
                            </button>
                        </div>

                        <p className={styles.footer}>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
