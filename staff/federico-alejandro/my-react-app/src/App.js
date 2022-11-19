import Login from './pages/Login'
import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import log from './utils/coolog'

function App() {
  log.info('App -> render')

  const [view, setView] = useState('login')

  const navigateToLogin = () => setView('login')

  const navigateToHome = () => setView('home')

  const navigateToRegister = () => setView('register')

  return <>
    <h1>hola app</h1>

    {view === 'login' && <Login onLogin={navigateToHome} onNavigateToRegister={navigateToRegister} />}
    {view === 'register' && <Register onNavigateToLogin={navigateToLogin} onRegisterUser={navigateToLogin} />}
    {view === 'home' && <Home />}
  </>
}

export default App;
