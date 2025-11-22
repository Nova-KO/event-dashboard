import React, { useState } from 'react'
import styles from './EventDetails.module.css'
import EventCard from '../components/EventCard'

const EventDetails = () => {
    const [ticketCounts, setTicketCounts] = useState({ general: 1, vip: 0 })
    const [showFullDescription, setShowFullDescription] = useState(false)

    const similarEvents = [
        {
            id: 1,
            title: "Jazz Night Live",
            date: "28 Jan - 28 Jan",
            location: "Blue Note Club",
            image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "Tech Conference 2024",
            date: "10 Jun - 12 Jun",
            location: "Convention Center",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        }
    ]

    const handleTicketChange = (type, delta) => {
        setTicketCounts(prev => ({
            ...prev,
            [type]: Math.max(0, prev[type] + delta)
        }))
    }

    const totalPrice = (ticketCounts.general * 999) + (ticketCounts.vip * 2499)
    const totalTickets = ticketCounts.general + ticketCounts.vip

    // Real Google Maps location
    const venueLocation = {
        name: "Brookefields Banquet Halls",
        address: "Kozhikode, Kerala",
        mapUrl: "https://www.google.com/maps/place/Brookefields+Banquet+Halls/@11.0079936,76.9599946,15z",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9824385562474!2d76.95741631530644!3d11.007993592150956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859014acf6f77%3A0xcb0dbce5ff16adf5!2sBrookefields%20Banquet%20Halls!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    }

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <img
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
                    alt="Event Hero"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay}>
                    <button className={styles.iconBtn}>
                        <i className="lni lni-share"></i>
                    </button>
                    <button className={styles.iconBtn}>
                        <i className="lni lni-heart"></i>
                    </button>
                </div>
            </div>

            <div className={styles.mainInfo}>
                <div className={styles.titleSection}>
                    <div>
                        <div className={styles.categoryBadge}>Music • Concert</div>
                        <h1 className={styles.title}>The Homecoming Tour | Sid Sriram Live in Concert</h1>
                        <div className={styles.meta}>
                            <span>
                                <i className="lni lni-calendar"></i> Friday, 22 January 2025
                            </span>
                            <span>
                                <i className="lni lni-alarm-clock"></i> 7:00 PM
                            </span>
                            <span>
                                <i className="lni lni-map-marker"></i> {venueLocation.name}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        <section className={styles.section}>
                            <h2>About the Event</h2>
                            <p className={styles.description}>
                                Some voices don't just sing, they awaken something deep within. Sid Sriram is one of those rare artists who doesn't just perform music... he becomes it.
                                <br /><br />
                                This concert isn't just about a setlist or a stage, it's a journey. A moment suspended in time. A powerful collective experience where every note pulls at memory.
                                {showFullDescription && (
                                    <>
                                        <br /><br />
                                        Join us for an unforgettable evening featuring Sid Sriram's soulful melodies, blending Carnatic music with contemporary R&B. Experience his chart-topping hits and exclusive unreleased tracks in an intimate setting.
                                    </>
                                )}
                            </p>
                            <button
                                className={styles.readMore}
                                onClick={() => setShowFullDescription(!showFullDescription)}
                            >
                                {showFullDescription ? 'Show Less' : 'Read More'}
                            </button>
                        </section>

                        <section className={styles.section}>
                            <h2>Event Highlights</h2>
                            <div className={styles.highlights}>
                                <div className={styles.highlightCard}>
                                    <i className="lni lni-music"></i>
                                    <div>
                                        <h4>Live Performance</h4>
                                        <p>3+ hours of music</p>
                                    </div>
                                </div>
                                <div className={styles.highlightCard}>
                                    <i className="lni lni-users"></i>
                                    <div>
                                        <h4>Meet & Greet</h4>
                                        <p>VIP tickets only</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Venue Location</h2>
                            <div className={styles.mapContainer}>
                                <iframe
                                    src={venueLocation.embedUrl}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className={styles.venueInfo}>
                                <div>
                                    <h4>{venueLocation.name}</h4>
                                    <p>{venueLocation.address}</p>
                                </div>
                                <a
                                    href={venueLocation.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.directionsBtn}
                                >
                                    <i className="lni lni-map"></i>
                                    Get Directions
                                </a>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Important Information</h2>
                            <ul className={styles.infoList}>
                                <li><i className="lni lni-checkmark-circle"></i> Gates open at 6:00 PM</li>
                                <li><i className="lni lni-ticket"></i> E-tickets mandatory</li>
                                <li><i className="lni lni-wheelchair"></i> Wheelchair accessible</li>
                                <li><i className="lni lni-car"></i> Free parking available</li>
                            </ul>
                        </section>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.stickySection}>
                            <section className={styles.ticketCard}>
                                <h2>Select Tickets</h2>
                                <div className={styles.ticketSelector}>
                                    <div className={styles.ticketType}>
                                        <div>
                                            <h3>General Admission</h3>
                                            <p>Main concert area</p>
                                        </div>
                                        <div className={styles.ticketPrice}>
                                            <span>₹ 999</span>
                                            <div className={styles.quantityControl}>
                                                <button onClick={() => handleTicketChange('general', -1)}>-</button>
                                                <span>{ticketCounts.general}</span>
                                                <button onClick={() => handleTicketChange('general', 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.ticketType}>
                                        <div>
                                            <h3>VIP Access</h3>
                                            <p>Front row + Meet & Greet</p>
                                        </div>
                                        <div className={styles.ticketPrice}>
                                            <span>₹ 2,499</span>
                                            <div className={styles.quantityControl}>
                                                <button onClick={() => handleTicketChange('vip', -1)}>-</button>
                                                <span>{ticketCounts.vip}</span>
                                                <button onClick={() => handleTicketChange('vip', 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {totalTickets > 0 && (
                                    <div className={styles.priceBreakdown}>
                                        <div className={styles.priceRow}>
                                            <span>{totalTickets} ticket{totalTickets > 1 ? 's' : ''}</span>
                                            <span>₹ {totalPrice.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.priceRow}>
                                            <span>Booking Fee</span>
                                            <span>₹ {Math.round(totalPrice * 0.05).toLocaleString()}</span>
                                        </div>
                                        <div className={`${styles.priceRow} ${styles.totalRow}`}>
                                            <strong>Total</strong>
                                            <strong>₹ {Math.round(totalPrice * 1.05).toLocaleString()}</strong>
                                        </div>
                                        <button className={styles.bookBtn}>Proceed to Book</button>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.similarSection}>
                <h2>You Might Also Like</h2>
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
