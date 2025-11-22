import React, { useState } from 'react'
import styles from './CategoryFilter.module.css'

const categories = [
    { id: 'all', label: 'All Events', icon: '📅' },
    { id: 'music', label: 'Music', icon: '🎸' },
    { id: 'food', label: 'Food Festival', icon: '🍟' },
    { id: 'tech', label: 'Tech', icon: '🎮' },
    { id: 'art', label: 'Art & Craft', icon: '🎨' },
    { id: 'nature', label: 'Nature', icon: '🌷' },
]

const CategoryFilter = () => {
    const [active, setActive] = useState('all')

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>Events Around You</h2>
                <button className={styles.viewAll}>View All</button>
            </div>

            <div className={styles.container}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`${styles.pill} ${active === cat.id ? styles.active : ''}`}
                        onClick={() => setActive(cat.id)}
                    >
                        <span className={styles.icon}>{cat.icon}</span>
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilter
