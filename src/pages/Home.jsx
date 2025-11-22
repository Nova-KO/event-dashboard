import React, { useState } from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import CategoryFilter from '../components/CategoryFilter'
import EventCard from '../components/EventCard'
import { eventsData } from '../data/eventsData'
import styles from './Home.module.css'

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('all')

    // Convert events to display format for EventCard
    const events = eventsData.map(event => ({
        ...event,
        date: event.dateString // Use the human-readable string for display
    }))

    const filteredEvents = activeCategory === 'all'
        ? events
        : events.filter(event => event.category === activeCategory)

    return (
        <div className={styles.container}>
            <WelcomeBanner />
            <CategoryFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <div className={styles.grid}>
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Home
