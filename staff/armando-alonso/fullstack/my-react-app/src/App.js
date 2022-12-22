import Login from './pages/Login'
import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import log from './utils/coolog'


function App() {
  log.info('App -> render')

  const [view, setView] = useState('login')

  const navigateToHome = () => setView('home')

  const navigateToRegister = () => setView('register')

  const navigateToLogin = () => setView('login')

  return <>

    {view === 'login' && <Login onLogin={navigateToHome} onNavigateToRegister={navigateToRegister} />}
    {view === 'home' && <Home />}
    {view === 'register' && <Register onNavigateToLogin={navigateToLogin} />}
  </>
}

export default App;
