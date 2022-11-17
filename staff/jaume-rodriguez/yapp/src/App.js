import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import Home from './pages/Home'

function App() {

  const [view, setView] = useState('Login')
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
  const navigateToLogin = () => setView('Login')
  const navigateToRegister = () => setView('Register')
  const navigateToHome = () => setView('Home')

  return <>
    {view === 'Login' &&
      <Login
        onLoggedIn={navigateToHome}
        onRegisterLinkClick={navigateToRegister}
        onInputEmailValue={handleInputEmailAndNameValue}
        onInputPasswordValue={handleInputPasswordValue}
      />}
    {view === 'Register' &&
      <Register
        onLoggedIn={navigateToHome}
        onLoginLinkClick={navigateToLogin}
        loginInputNameValue={inputNameValue}
        loginInputEmailValue={inputEmailValue}
        loginInputPasswordValue={inputPasswordValue}
      />}
    {view === 'Home' && <Home />}
  </>
}

export default App;