import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

import { useState } from 'react'


function App() {
  const [view, setView] = useState('login')

  const navigateToHome = () => setView('home')

  const navigateToLogin = () => setView('login')

  const navigateToRegister = () => setView('register')

  return <>
  <h1>hola</h1>

  { view === 'login'  && <Login onLogin={navigateToHome} onNavigateToRegister={navigateToRegister}/>}
  { view === 'home' && <Home/> }
  { view === 'register' && <Register onNavigateToLogin={navigateToLogin} onRegister={navigateToLogin}/>}

  </>
}

export default App;
