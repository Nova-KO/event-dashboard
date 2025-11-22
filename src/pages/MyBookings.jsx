import React, { useState } from 'react'
import styles from './ProfileSubPages.module.css'

const MyBookings = () => {
    const [selectedTicket, setSelectedTicket] = useState(null)

    const bookings = [
        {
            id: 1,
            title: "The Homecoming Tour | Sid Sriram Live",
            date: "22 Jan, 2025",
            time: "7:00 PM",
            location: "Cultural Hall, Brookefield",
            tickets: 2,
            type: "VIP",
            status: "Confirmed",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
            bookingId: "EVT-2025-001"
        },
        {
            id: 2,
            title: "Tech Conference 2024",
            date: "10 Jun, 2024",
            time: "9:00 AM",
            location: "Convention Center",
            tickets: 1,
            type: "General",
            status: "Completed",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
            bookingId: "EVT-2024-089"
        }
    ]

    const handleViewTicket = (booking) => {
        setSelectedTicket(booking)
    }

    const handleDownloadInvoice = (booking) => {
        // Simulate invoice download
        const invoiceContent = `
            INVOICE
            ------------------------
            Booking ID: ${booking.bookingId}
            Event: ${booking.title}
            Date: ${booking.date}
            Time: ${booking.time}
            Tickets: ${booking.tickets} x ${booking.type}
            Location: ${booking.location}
            Status: ${booking.status}
            ------------------------
            Thank you for booking with Eventify!
        `
        const blob = new Blob([invoiceContent], { type: 'text/plain' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Invoice-${booking.bookingId}.txt`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
    }

    // QR Code URL (Rick Roll)
    const qrCodeData = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeData)}`

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>My Bookings</h1>

            <div className={styles.list}>
                {bookings.map(booking => (
                    <div key={booking.id} className={styles.card}>
                        <img src={booking.image} alt={booking.title} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3>{booking.title}</h3>
                                <span className={`${styles.status} ${styles[booking.status.toLowerCase()]}`}>
                                    {booking.status}
                                </span>
                            </div>

                            <div className={styles.cardDetails}>
                                <span><i className="lni lni-calendar"></i> {booking.date} • {booking.time}</span>
                                <span><i className="lni lni-map-marker"></i> {booking.location}</span>
                                <span><i className="lni lni-ticket"></i> {booking.tickets} x {booking.type} Ticket</span>
                            </div>

                            <div className={styles.cardActions}>
                                <button
                                    className={styles.primaryBtn}
                                    onClick={() => handleViewTicket(booking)}
                                >
                                    View Ticket
                                </button>
                                {booking.status === 'Confirmed' && (
                                    <button
                                        className={styles.secondaryBtn}
                                        onClick={() => handleDownloadInvoice(booking)}
                                    >
                                        Download Invoice
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ticket Modal */}
            {selectedTicket && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>E-Ticket</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedTicket(null)}
                            >
                                <i className="lni lni-close"></i>
                            </button>
                        </div>
                        <div className={styles.ticketContent}>
                            <div className={styles.qrWrapper}>
                                <img src={qrCodeUrl} alt="Ticket QR Code" />
                                <p>Scan at entry</p>
                            </div>
                            <div className={styles.ticketDetails}>
                                <h3>{selectedTicket.title}</h3>
                                <div className={styles.ticketInfoRow}>
                                    <div>
                                        <label>Date</label>
                                        <p>{selectedTicket.date}</p>
                                    </div>
                                    <div>
                                        <label>Time</label>
                                        <p>{selectedTicket.time}</p>
                                    </div>
                                </div>
                                <div className={styles.ticketInfoRow}>
                                    <div>
                                        <label>Location</label>
                                        <p>{selectedTicket.location}</p>
                                    </div>
                                </div>
                                <div className={styles.ticketInfoRow}>
                                    <div>
                                        <label>Booking ID</label>
                                        <p>{selectedTicket.bookingId}</p>
                                    </div>
                                    <div>
                                        <label>Seat</label>
                                        <p>{selectedTicket.tickets} x {selectedTicket.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.secondaryBtn}
                                onClick={() => handleDownloadInvoice(selectedTicket)}
                            >
                                <i className="lni lni-download"></i> Download Invoice
                            </button>
                            <button
                                className={styles.saveBtn}
                                onClick={() => setSelectedTicket(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyBookings
