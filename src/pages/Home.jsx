import React from 'react'
import Header from '../components/Header'
import WelcomeBanner from '../components/WelcomeBanner'
import CategoryFilter from '../components/CategoryFilter'
import EventCard from '../components/EventCard'
import styles from './Home.module.css'

const Home = () => {
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
        },
        {
            id: 3,
            title: "Food Carnival",
            date: "15 Aug - 16 Aug",
            location: "City Park",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            title: "Art Exhibition",
            date: "01 Sep - 05 Sep",
            location: "Modern Art Gallery",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            title: "Jazz Night",
            date: "20 Oct - 20 Oct",
            location: "Blue Note Club",
            image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            title: "Startup Summit",
            date: "12 Nov - 14 Nov",
            location: "Tech Park",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
        }
    ]

    return (
        <div className={styles.container}>
            <Header />
            <WelcomeBanner />
            <CategoryFilter />
            <div className={styles.grid}>
                {events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Home
