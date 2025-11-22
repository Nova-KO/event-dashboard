import React from 'react'
import styles from './ProfileSubPages.module.css'
import EventCard from '../components/EventCard'

const MyFavorites = () => {
    const favorites = [
        {
            id: 3,
            title: "Food Carnival",
            date: "15 Aug - 16 Aug",
            location: "City Park",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            category: 'food'
        },
        {
            id: 5,
            title: "Jazz Night",
            date: "20 Oct - 20 Oct",
            location: "Blue Note Club",
            image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
            category: 'music'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.pageTitle}>My Favorites</h1>
                <div className={styles.filters}>
                    <button className={styles.filterBtn}>
                        <i className="lni lni-map-marker"></i> Manage Districts
                    </button>
                    <button className={styles.filterBtn}>
                        <i className="lni lni-heart"></i> Manage Interests
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
                {favorites.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    )
}

export default MyFavorites
