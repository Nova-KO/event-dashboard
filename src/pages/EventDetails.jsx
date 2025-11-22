import React from 'react'
import styles from './EventDetails.module.css'
import EventCard from '../components/EventCard'

const EventDetails = () => {
    const similarEvents = [
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
            <div className={styles.hero}>
                <img
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
                    alt="Event Hero"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay}>
                    <button className={styles.iconBtn}>🔗</button>
                    <button className={styles.iconBtn}>❤️</button>
                </div>
            </div>

            <div className={styles.mainInfo}>
                <div className={styles.titleSection}>
                    <div>
                        <h1 className={styles.title}>The Homecoming Tour | Sid Sriram Live in Concert</h1>
                        <div className={styles.meta}>
                            <span>📅 22 Jan - 24 Jan</span>
                            <span>📍 Cultural Hall, Brookefield</span>
                        </div>
                    </div>
                    <button className={styles.bookBtn}>Book Your Spot</button>
                </div>

                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        <section className={styles.section}>
                            <h2>About the Event</h2>
                            <p className={styles.description}>
                                Some voices don't just sing, they awaken something deep within. Sid Sriram is one of those rare artists who doesn't just perform music... he becomes it.
                                <br /><br />
                                This concert isn't just about a setlist or a stage, it's a journey. A moment suspended in time. A powerful collective experience where every note pulls at memory.
                            </p>
                            <button className={styles.readMore}>Read More</button>
                        </section>

                        <section className={styles.section}>
                            <h2>Gallery</h2>
                            <div className={styles.galleryGrid}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <img
                                        key={i}
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=200&q=80`}
                                        className={styles.galleryThumb}
                                        alt=""
                                    />
                                ))}
                                <div className={styles.galleryMore}>14+</div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.rightCol}>
                        <section className={styles.section}>
                            <h2>Venue</h2>
                            <div className={styles.mapPlaceholder}>
                                <span>Map View</span>
                                <div className={styles.mapPin}>
                                    <span>Cultural Hall</span>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Tickets Booked</h2>
                            <div className={styles.attendees}>
                                <div className={styles.avatarPile}>
                                    {[1, 2, 3, 4].map(i => (
                                        <img
                                            key={i}
                                            src={`https://images.unsplash.com/photo-${1530000000000 + i}?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80`}
                                            className={styles.avatar}
                                            alt=""
                                        />
                                    ))}
                                    <div className={styles.avatarMore}>2K+</div>
                                </div>
                                <button className={styles.inviteBtn}>Invite</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className={styles.similarSection}>
                <h2>Similar events</h2>
                <div className={styles.similarGrid}>
                    {similarEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventDetails
