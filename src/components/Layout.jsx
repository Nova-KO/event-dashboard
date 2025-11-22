import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import ChatWidget from './ChatWidget'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                <Header />
                {children}
            </main>
            <ChatWidget />
        </div>
    )
}

export default Layout
