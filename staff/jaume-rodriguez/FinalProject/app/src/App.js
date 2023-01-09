import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Adventures from './pages/Adventures'
import MyAdventures from './pages/MyAdventures'
import Adventure from './pages/Adventure'
import Ranking from './pages/Ranking'
import Chat from './pages/Chat'
import Community from './pages/Community'
import Profile from './pages/Profile'
import { Routes, Route, Navigate } from 'react-router-dom'
import Context from './components/Context'
import Alert from './components/Alert'

function App() {
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.token)
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')
  const [message, setMessage] = useState()

  const showAlert = (message = 'error') => {
    setMessage(message)
  }

  const hideAlert = () => setMessage()


  // LOGIN & LOGOUT
  const login = (token) => {
    sessionStorage.token = token

    setLoggedIn(true)
  }
  const logout = () => {
    delete sessionStorage.token

    setLoggedIn(false)
  }

  // FORMS INFO VALUE
  const handleInputEmailAndNameValue = (newValue) => {
    setInputEmailValue(newValue)
    setInputNameValue(newValue.split('@')[0])
  }

  const handleInputPasswordValue = (newValue) => {
    setInputPasswordValue(newValue)
  }

  return <Context.Provider value={{ login, logout, showAlert }}>
    {loggedIn ? <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/community" element={<Community />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/my/adventures" element={<MyAdventures />} />
      <Route path="/adventures/:adventureId" element={<Adventure />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile/:targetUserId" element={<Profile />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
      :
      <Routes>
        <Route path="/login" element={<Login
          onInputEmailValue={handleInputEmailAndNameValue}
          onInputPasswordValue={handleInputPasswordValue}
          registerInputEmailValue={inputEmailValue}
          registerInputPasswordValue={inputPasswordValue}
        />} />
        <Route path="/register" element={<Register
          loginInputNameValue={inputNameValue}
          loginInputEmailValue={inputEmailValue}
          loginInputPasswordValue={inputPasswordValue}
          onInputEmailValue={handleInputEmailAndNameValue}
          onInputPasswordValue={handleInputPasswordValue} />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>}
    {message && <Alert message={message} onClose={hideAlert} />}
  </Context.Provider>
}

export default App;