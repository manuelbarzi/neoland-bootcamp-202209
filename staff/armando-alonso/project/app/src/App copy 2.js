import NewsPage from './pages/NewsPage'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateNews from './pages/CreateNews'
import { useState } from 'react'
import log from './utils/coolog'
import { Routes, Route } from 'react-router-dom'



function App() {
  log.info('App -> render')

  const [view, setView] = useState('login')

  const navigateToHome = () => setView('home')

  const navigateToLogin = () => setView('login')

  const navigateToRegister = () => setView('register')

  const navigateToNews = () => setView('createNews')

  return <>
    {view === 'login' && <Login onLogin={navigateToHome} onNavigateToRegister={navigateToRegister} />}
    {view === 'register' && <Register onRegister={navigateToLogin} onNavigateToLogin={navigateToLogin} />}
    {view === 'createNews' && <CreateNews onNavigateToHome={navigateToHome} />}
    {view === 'home' && <NewsPage onNavigateToCreateNews={navigateToNews} />}
  </>
}

export default App;