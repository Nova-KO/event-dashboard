import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css' // Reusing Login styles for consistency
import logo from '../assets/logo.png'

const Signup = () => {
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        // Simulate signup logic
        alert('Account created successfully!')
        navigate('/login')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <div className={styles.brand}>
                        <img src={logo} alt="Eventify" />
                    </div>
                    <div className={styles.welcomeMessage}>
                        <h2>Join the Community!</h2>
                        <p>Create an account to discover amazing events, book tickets, and connect with people.</p>
                    </div>
                </div>

                <div className={styles.rightPanel}>
                    <div className={styles.formWrapper}>
                        <div className={styles.header}>
                            <h2>Create Account</h2>
                            <p>Please enter your details to sign up</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSignup}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Full Name</label>
                                <div className={styles.inputWrapper}>
                                    <i className="lni lni-user"></i>
                                    <input type="text" id="name" placeholder="Enter your full name" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email Address</label>
                                <div className={styles.inputWrapper}>
                                    <i className="lni lni-envelope"></i>
                                    <input type="email" id="email" placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="password">Password</label>
                                <div className={styles.inputWrapper}>
                                    <i className="lni lni-lock"></i>
                                    <input type="password" id="password" placeholder="Create a password" required />
                                </div>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Sign Up
                            </button>
                        </form>

                        <div className={styles.divider}>
                            <span>Or sign up with</span>
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
                            Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
