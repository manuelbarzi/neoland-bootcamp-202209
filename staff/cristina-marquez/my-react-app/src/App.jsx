import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'


import UserContext from './UserContext'


function App() {
  console.log('App -> render')

  // const [view, setView] = useState('login')
  const [user, setUser] = useState(null)

  const providerValue = { user, setUser }


  // const navigateToHome = () => setView('home')
  // const navigateToRegister = () => setView('register')


  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
      </Routes>
    </UserContext.Provider>
  )

}

export default App;