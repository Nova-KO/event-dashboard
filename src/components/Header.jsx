import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { eventsData } from '../data/eventsData'
import styles from './Header.module.css'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState({ events: [], pages: [] })
    const [showSearchResults, setShowSearchResults] = useState(false)

    const dropdownRef = useRef(null)
    const notificationsRef = useRef(null)
    const searchRef = useRef(null)
    const navigate = useNavigate()

    // Searchable pages and features
    const searchablePages = [
        { name: 'Home', path: '/', keywords: 'dashboard events home main' },
        { name: 'Calendar', path: '/calendar', keywords: 'calendar schedule dates timeline' },
        { name: 'My Profile', path: '/profile', keywords: 'profile account user settings' },
        { name: 'My Bookings', path: '/my-bookings', keywords: 'bookings tickets reservations' },
        { name: 'My Favorites', path: '/my-favorites', keywords: 'favorites saved wishlist starred' },
        { name: 'Contribute Event', path: '/contribute', keywords: 'contribute add submit create event' },
        { name: 'Settings', path: '/settings', keywords: 'settings preferences configuration' },
    ]

    const [notifications, setNotifications] = useState([
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
        }
    ])

    const unreadCount = notifications.filter(n => !n.read).length

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })))
    }

    const handleNotificationClick = (link) => {
        if (link) {
            navigate(link)
            setIsNotificationsOpen(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false)
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchResults(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle search with both events and pages
    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            const query = searchQuery.toLowerCase()

            // Search events
            const eventResults = eventsData.filter(event =>
                event.title.toLowerCase().includes(query) ||
                event.location.toLowerCase().includes(query) ||
                event.category.toLowerCase().includes(query)
            )

            // Search pages
            const pageResults = searchablePages.filter(page =>
                page.name.toLowerCase().includes(query) ||
                page.keywords.toLowerCase().includes(query)
            )

            setSearchResults({ events: eventResults, pages: pageResults })
            setShowSearchResults(true)
        } else {
            setSearchResults({ events: [], pages: [] })
            setShowSearchResults(false)
        }
    }, [searchQuery])

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/?search=${encodeURIComponent(searchQuery)}`)
            setShowSearchResults(false)
        }
    }

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`)
        setSearchQuery('')
        setShowSearchResults(false)
    }

    const handlePageClick = (path) => {
        navigate(path)
        setSearchQuery('')
        setShowSearchResults(false)
    }

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'booking': return 'lni-ticket'
            case 'event': return 'lni-calendar'
            case 'reminder': return 'lni-alarm-clock'
            default: return 'lni-bell'
        }
    }

    const totalResults = searchResults.events.length + searchResults.pages.length

    return (
        <header className={styles.header}>
            <div className={styles.searchWrapper} ref={searchRef}>
                <form onSubmit={handleSearchSubmit}>
                    <i className={`lni lni-search-alt ${styles.searchIcon}`}></i>
                    <input
                        type="text"
                        placeholder="Search events, pages, features..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery && setShowSearchResults(true)}
                    />
                </form>

                {showSearchResults && (
                    <div className={styles.searchResults}>
                        {totalResults > 0 ? (
                            <>
                                {searchResults.pages.length > 0 && (
                                    <div className={styles.searchSection}>
                                        <div className={styles.searchSectionHeader}>
                                            <i className="lni lni-layers"></i>
                                            Pages & Features
                                        </div>
                                        {searchResults.pages.map((page, index) => (
                                            <div
                                                key={index}
                                                className={styles.searchPageItem}
                                                onClick={() => handlePageClick(page.path)}
                                            >
                                                <i className="lni lni-angle-double-right"></i>
                                                <span>{page.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {searchResults.events.length > 0 && (
                                    <div className={styles.searchSection}>
                                        <div className={styles.searchSectionHeader}>
                                            <i className="lni lni-ticket"></i>
                                            Events ({searchResults.events.length})
                                        </div>
                                        {searchResults.events.map(event => (
                                            <div
                                                key={event.id}
                                                className={styles.searchResultItem}
                                                onClick={() => handleEventClick(event.id)}
                                            >
                                                <img src={event.image} alt={event.title} />
                                                <div className={styles.searchResultContent}>
                                                    <h4>{event.title}</h4>
                                                    <div className={styles.searchResultMeta}>
                                                        <span><i className="lni lni-calendar"></i> {event.dateString}</span>
                                                        <span><i className="lni lni-map-marker"></i> {event.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={styles.noSearchResults}>
                                <i className="lni lni-search-alt"></i>
                                <p>No results found for "{searchQuery}"</p>
                                <span>Try searching for events, pages, or features</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.actions}>
                <div className={styles.notificationsWrapper} ref={notificationsRef}>
                    <button
                        className={styles.iconBtn}
                        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    >
                        <i className="lni lni-alarm"></i>
                        {unreadCount > 0 && (
                            <span className={styles.notificationBadge}>{unreadCount}</span>
                        )}
                    </button>

                    {isNotificationsOpen && (
                        <div className={styles.notificationsDropdown}>
                            <div className={styles.notificationsHeader}>
                                <h3>Notifications</h3>
                                <button className={styles.markAllRead} onClick={markAllAsRead}>Mark all as read</button>
                            </div>
                            <div className={styles.notificationsList}>
                                {notifications.map(notification => (
                                    <div
                                        key={notification.id}
                                        className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                                        onClick={() => handleNotificationClick(notification.link)}
                                    >
                                        <div className={styles.notificationIcon}>
                                            <i className={`lni ${getNotificationIcon(notification.type)}`}></i>
                                        </div>
                                        <div className={styles.notificationContent}>
                                            <h4>{notification.title}</h4>
                                            <p>{notification.message}</p>
                                            <span className={styles.notificationTime}>{notification.time}</span>
                                        </div>
                                        {!notification.read && <div className={styles.unreadDot}></div>}
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/notifications"
                                className={styles.viewAll}
                                onClick={() => setIsNotificationsOpen(false)}
                            >
                                View All Notifications
                            </Link>
                        </div>
                    )}
                </div>

                <div className={styles.profileWrapper} ref={dropdownRef}>
                    <div
                        className={styles.profile}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className={styles.avatar}
                        />
                        <div className={styles.profileInfo}>
                            <span className={styles.profileName}>John Doe</span>
                            <span className={styles.profileRole}>Explorer</span>
                        </div>
                        <i className={`lni lni-chevron-down ${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`}></i>
                    </div>

                    {isDropdownOpen && (
                        <div className={styles.dropdown}>
                            <Link to="/profile" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                                <i className="lni lni-user"></i>
                                <span>My Profile</span>
                            </Link>
                            <Link to="/my-bookings" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                                <i className="lni lni-ticket"></i>
                                <span>My Bookings</span>
                            </Link>
                            <Link to="/my-favorites" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                                <i className="lni lni-heart"></i>
                                <span>My Favorites</span>
                            </Link>
                            <Link to="/settings" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                                <i className="lni lni-cog"></i>
                                <span>Settings</span>
                            </Link>
                            <div className={styles.dropdownDivider}></div>
                            <Link to="/login" className={`${styles.dropdownItem} ${styles.logoutItem}`} onClick={() => setIsDropdownOpen(false)}>
                                <i className="lni lni-exit"></i>
                                <span>Logout</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
