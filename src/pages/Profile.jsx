import React from 'react'
import styles from './Profile.module.css'
import EventCard from '../components/EventCard'

const Profile = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&w=800&q=80",
        }
    ]

    const pastEvents = [
        {
            id: 4,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1459749411177-0473ef716175?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            title: "International Music Festival | 'Bangalore'",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.profileHeader}>
                <div className={styles.userInfo}>
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className={styles.avatar}
                    />
                    <div className={styles.userDetails}>
                        <h1 className={styles.name}>John Doe</h1>
                        <p className={styles.email}>Janedoe@gmail.com</p>
                    </div>
                </div>
                <button className={styles.editBtn}>✏️</button>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Upcoming Events</h2>
                    <button className={styles.viewAll}>View All ⌄</button>
                </div>
                <div className={styles.grid}>
                    {upcomingEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Past Events</h2>
                    <button className={styles.viewAll}>View All ⌄</button>
                </div>
                <div className={styles.grid}>
                    {pastEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
