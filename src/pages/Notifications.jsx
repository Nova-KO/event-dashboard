import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Notifications.module.css'

const Notifications = () => {
    const navigate = useNavigate()

    const notifications = [
        {
            id: 1,
            type: 'booking',
            title: 'Booking Confirmed',
            message: 'Your ticket for Sid Sriram Live is confirmed',
            time: '2 hours ago',
            read: false,
            link: '/my-bookings'
        },
        {
            id: 2,
            type: 'event',
            title: 'New Event Near You',
            message: 'Jazz Night at Blue Note Club',
            time: '5 hours ago',
            read: false,
            link: '/event/1'
        },
        {
            id: 3,
            type: 'reminder',
            title: 'Event Tomorrow',
            message: 'Tech Conference 2024 starts tomorrow',
            time: '1 day ago',
            read: true,
            link: '/calendar'
        },
        {
            id: 4,
            type: 'system',
            title: 'Welcome to Eventify',
            message: 'Thanks for joining! Start exploring events near you.',
            time: '3 days ago',
            read: true,
            link: '/'
        },
        {
            id: 5,
            type: 'promotion',
            title: 'Early Bird Offer',
            message: 'Get 20% off on your next booking with code EARLY20',
            time: '1 week ago',
            read: true,
            link: '/'
        }
    ]

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'booking': return 'lni-ticket'
            case 'event': return 'lni-calendar'
            case 'reminder': return 'lni-alarm-clock'
            case 'system': return 'lni-cog'
            case 'promotion': return 'lni-offer'
            default: return 'lni-bell'
        }
    }

    const handleNotificationClick = (link) => {
        if (link) {
            navigate(link)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Notifications</h1>
                <button className={styles.markAllRead}>Mark all as read</button>
            </div>

            <div className={styles.list}>
                {notifications.map(notification => (
                    <div
                        key={notification.id}
                        className={`${styles.item} ${!notification.read ? styles.unread : ''}`}
                        onClick={() => handleNotificationClick(notification.link)}
                    >
                        <div className={styles.iconWrapper}>
                            <i className={`lni ${getNotificationIcon(notification.type)}`}></i>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.topRow}>
                                <h3>{notification.title}</h3>
                                <span className={styles.time}>{notification.time}</span>
                            </div>
                            <p>{notification.message}</p>
                        </div>
                        {!notification.read && <div className={styles.unreadDot}></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications
