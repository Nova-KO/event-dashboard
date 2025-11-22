import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import EventDetails from './pages/EventDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contribute from './pages/Contribute'
import MyBookings from './pages/MyBookings'
import MyFavorites from './pages/MyFavorites'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/login" element={
        <Login>
          <Layout>
            <Home />
          </Layout>
        </Login>
      } />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Layout><Outlet /></Layout>}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-favorites" element={<MyFavorites />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
