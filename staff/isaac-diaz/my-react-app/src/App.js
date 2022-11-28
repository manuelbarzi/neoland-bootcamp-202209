import Login from './pages/Login'
import Home from './pages/Home'
import log from './utils/coolog'
import Register from './pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './pages/Profile'
import { useState } from 'react'

export default function App() {
  log.info('App -> render')

  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.userId)

  const handleLoggedIn = () => setLoggedIn(true)

  const handleLoggedOut = () => setLoggedIn(false)

  return loggedIn ? <Routes>
    <Route path="/" element={<Home onLoggedOut={handleLoggedOut} />} />
    <Route path="/profile/:targetUserId" element={<Profile onLoggedOut={handleLoggedOut} />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
  :
  <Routes>
    <Route path="/login" element={<Login onLoggedIn={handleLoggedIn} />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </Routes>
  
  
}


