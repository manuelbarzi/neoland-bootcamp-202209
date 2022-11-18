import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { useState} from 'react'
import log from './utils/coolog'

function App() { 
  log.info('App -> render')

  const [view, setView] = useState('login')

  const navigateToHome = () => {
    setView('home')
  }

  const navigateToRegister = () => {
    setView('register')
  }

  const navigateToLogin = () => {
    setView('login')
  }

return <>
  <h1>Hola App</h1>
  {view === 'login' && <Login onLoggedIn={navigateToHome} onRegisterClick={navigateToRegister}/>}
  {view === 'register' && <Register onNavigateToLogin={navigateToLogin} />}
  {view === 'home' && <Home />}
  </>
}

export default App;
 