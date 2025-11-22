import React, { useState } from 'react'
import styles from './Calendar.module.css'
import EventCard from '../components/EventCard'
import { eventsData } from '../data/eventsData'

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const dayOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // Calendar calculations
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()
    const startDayOfWeek = firstDayOfMonth.getDay() // 0 = Sunday
    const startOffset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1 // Convert to Monday start

    // Get events for selected date
    const eventsForSelectedDate = eventsData.filter(event => {
        return event.date.getDate() === selectedDate.getDate() &&
            event.date.getMonth() === selectedDate.getMonth() &&
            event.date.getFullYear() === selectedDate.getFullYear()
    })

    // Get dates that have events in current month
    const datesWithEvents = eventsData
        .filter(event => event.date.getMonth() === month && event.date.getFullYear() === year)
        .map(event => event.date.getDate())

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1))
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1))
    }

    const handleDateClick = (date) => {
        setSelectedDate(new Date(year, month, date))
    }

    const isSelectedDate = (date) => {
        return date === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
    }

    const isToday = (date) => {
        const today = new Date()
        return date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
    }

    return (
        <div className={styles.container}>
            <div className={styles.calendarSection}>
                <div className={styles.header}>
                    <button className={styles.navBtn} onClick={handlePrevMonth}>
                        <i className="lni lni-chevron-left"></i>
                    </button>
                    <div className={styles.monthYear}>
                        <span className={styles.monthName}>{monthNames[month]}</span>
                        <span className={styles.yearName}>{year}</span>
                    </div>
                    <button className={styles.navBtn} onClick={handleNextMonth}>
                        <i className="lni lni-chevron-right"></i>
                    </button>
                </div>

                <div className={styles.grid}>
                    {dayNames.map(day => (
                        <div key={day} className={styles.dayLabel}>{day}</div>
                    ))}
                    {/* Empty slots for start offset */}
                    {Array(startOffset).fill(null).map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
                        <div
                            key={date}
                            className={`${styles.dateCell} ${isSelectedDate(date) ? styles.selected : ''} ${isToday(date) ? styles.today : ''}`}
                            onClick={() => handleDateClick(date)}
                        >
                            {date}
                            {datesWithEvents.includes(date) && (
                                <div className={styles.eventIndicator}>
                                    <div className={styles.eventDot}></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.eventListSection}>
                <div className={styles.selectedDateHeader}>
                    <div className={styles.dateBadge}>
                        <span className={styles.dateNum}>{selectedDate.getDate()}</span>
                        <span className={styles.dateMonth}>{monthNames[selectedDate.getMonth()].substring(0, 3).toUpperCase()}</span>
                    </div>
                    <div>
                        <h2 className={styles.fullDate}>
                            {dayOfWeekNames[selectedDate.getDay()]}, {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}, {selectedDate.getFullYear()}
                        </h2>
                        <p className={styles.eventCount}>{eventsForSelectedDate.length} Event{eventsForSelectedDate.length !== 1 ? 's' : ''}</p>
                    </div>
                </div>

                <div className={styles.eventList}>
                    {eventsForSelectedDate.length > 0 ? (
                        eventsForSelectedDate.map(event => (
                            <EventCard key={event.id} event={{ ...event, date: event.dateString }} />
                        ))
                    ) : (
                        <div className={styles.noEvents}>
                            <i className="lni lni-calendar"></i>
                            <p>No events scheduled for this date</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calendar
