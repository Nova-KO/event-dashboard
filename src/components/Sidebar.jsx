import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import logo from '../assets/logo.png'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt="Eventify" />
            </div>

            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-home ${styles.icon}`}></i>
                    Home
                </NavLink>
                <NavLink
                    to="/calendar"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-calendar ${styles.icon}`}></i>
                    Calendar
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-user ${styles.icon}`}></i>
                    Profile
                </NavLink>

                <NavLink
                    to="/my-bookings"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-ticket ${styles.icon}`}></i>
                    My Bookings
                </NavLink>
                <NavLink
                    to="/contribute"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-plus ${styles.icon}`}></i>
                    Contribute
                </NavLink>

                <div className={styles.divider}></div>

                <NavLink
                    to="/settings"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <i className={`lni lni-cog ${styles.icon}`}></i>
                    Settings
                </NavLink>
                <button className={styles.item} disabled>
                    <i className={`lni lni-trophy ${styles.icon}`}></i>
                    Leaderboard
                    <span className={styles.comingSoon}>Soon</span>
                </button>
            </nav>
        </aside>
    )
}

export default Sidebar
