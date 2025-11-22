import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import EventDetails from './pages/EventDetails'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Layout>
  )
}

export default App
