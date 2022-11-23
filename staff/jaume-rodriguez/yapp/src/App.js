import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import Home from './pages/Home'
import SettingsAccount from './pages/SettingsAccount'
import Community from './pages/Community'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  // FORMS INFO VALUE
  const handleInputEmailAndNameValue = (newValue) => {
    setInputEmailValue(newValue)
    setInputNameValue(newValue.split('@')[0])
  }

  const handleInputPasswordValue = (newValue) => {
    setInputPasswordValue(newValue)
  }

  // APP PAGES RENDER
  const ConditionalHome = () => {
    return window.userId ?
      <Home /> :
      <Navigate replace to="/login" />
  }

  return <Routes>
    <Route path="/login" element={window.userId ?
      <Navigate replace to="/" /> :
      <Login
        onInputEmailValue={handleInputEmailAndNameValue}
        onInputPasswordValue={handleInputPasswordValue}
        registerInputEmailValue={inputEmailValue}
        registerInputPasswordValue={inputPasswordValue}
      />} />
    <Route path="/register" element={window.userId ?
      <Navigate replace to="/" /> :
      <Register
        loginInputNameValue={inputNameValue}
        loginInputEmailValue={inputEmailValue}
        loginInputPasswordValue={inputPasswordValue}
        onInputEmailValue={handleInputEmailAndNameValue}
        onInputPasswordValue={handleInputPasswordValue}
      />} />
    <Route path="/" element={<ConditionalHome />} />
    <Route path="/settings-account" element={<SettingsAccount />} />
    <Route path="/community" element={<Community />} />
  </Routes>
}

export default App;