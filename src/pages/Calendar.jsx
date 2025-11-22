import React, { useState } from 'react'
import styles from './Calendar.module.css'
import EventCard from '../components/EventCard'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(15)

    // Mock calendar data for June 2025
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const dates = Array.from({ length: 30 }, (_, i) => i + 1) // 30 days
    const startOffset = 6 // Starts on Sunday (mock)

    const events = [
        {
            id: 1,
            title: "The Homecoming Tour | Sid Sriram Live",
            date: "22 Jan - 24 Jan",
            location: "Cultural Hall, Brookefield",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "Tech Conference 2024",
            date: "10 Jun - 12 Jun",
            location: "Convention Center",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.calendarSection}>
                <div className={styles.header}>
                    <div className={styles.monthSelector}>
                        <span>June</span>
                        <span className={styles.chevron}>⌄</span>
                    </div>
                    <div className={styles.yearSelector}>
                        <span>2025</span>
                        <span className={styles.chevron}>⌄</span>
                    </div>
                </div>

                <div className={styles.grid}>
                    {days.map(day => (
                        <div key={day} className={styles.dayLabel}>{day}</div>
                    ))}
                    {/* Empty slots for start offset */}
                    {Array(startOffset).fill(null).map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {dates.map(date => (
                        <div
                            key={date}
                            className={`${styles.dateCell} ${selectedDate === date ? styles.selected : ''}`}
                            onClick={() => setSelectedDate(date)}
                        >
                            {date}
                            {[2, 15, 20].includes(date) && (
                                <div className={styles.eventIndicator}>
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.eventListSection}>
                <div className={styles.selectedDateHeader}>
                    <div className={styles.dateBadge}>
                        <span className={styles.dateNum}>{selectedDate}</span>
                        <span className={styles.dateMonth}>JUN</span>
                    </div>
                    <div>
                        <h2 className={styles.fullDate}>Monday, {selectedDate} June, 2025</h2>
                        <p className={styles.eventCount}>2 Events</p>
                    </div>
                </div>

                <div className={styles.eventList}>
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar
