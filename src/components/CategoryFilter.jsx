import React from 'react'
import styles from './CategoryFilter.module.css'

const categories = [
    { id: 'all', label: 'All Events', icon: 'lni lni-grid-alt' },
    { id: 'music', label: 'Music', icon: 'lni lni-music' },
    { id: 'food', label: 'Food Festival', icon: 'lni lni-dinner' },
    { id: 'tech', label: 'Tech', icon: 'lni lni-display' },
    { id: 'art', label: 'Art & Craft', icon: 'lni lni-brush' },
    { id: 'nature', label: 'Nature', icon: 'lni lni-leaf' },
]

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
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
                        className={`${styles.pill} ${activeCategory === cat.id ? styles.active : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        <i className={`${cat.icon} ${styles.icon}`}></i>
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilter
