import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>LOGO</div>

            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}>🏠</span>
                    Home
                </NavLink>
                <NavLink
                    to="/calendar"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}>📅</span>
                    Calendar
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}>👤</span>
                    Profile
                </NavLink>

                <div className={styles.divider}></div>

                <button className={styles.item}>
                    <span className={styles.icon}>⚙️</span>
                    Settings
                </button>
                <button className={styles.item}>
                    <span className={styles.icon}>❓</span>
                    Help
                </button>
            </nav>
        </aside>
    )
}

export default Sidebar
