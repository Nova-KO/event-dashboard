import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.searchWrapper}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.actions}>
                <button className={styles.iconBtn}>🔔</button>
                <div className={styles.profile}>
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className={styles.avatar}
                    />
                    <span className={styles.chevron}>⌄</span>
                </div>
            </div>
        </header>
    )
}

export default Header
