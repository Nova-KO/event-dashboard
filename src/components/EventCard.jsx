import React from 'react'
import { Link } from 'react-router-dom'
import styles from './EventCard.module.css'

const EventCard = ({ event }) => {
    return (
        <Link to={`/event/${event.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={event.image} alt={event.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{event.title}</h3>
                <div className={styles.meta}>
                    <span className={styles.date}>
                        <i className="lni lni-calendar"></i> {event.date}
                    </span>
                    <span className={styles.location}>
                        <i className="lni lni-map-marker"></i> {event.location}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default EventCard
