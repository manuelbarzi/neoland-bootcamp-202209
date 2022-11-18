import Login from './pages/Login'
import { useState } from 'react'
import Home from './pages/Home'
import log from './utils/coolog'

function App() {
  log.info('App -> render')

  const [view, setView] = useState('login')

  const navigateToHome = () => setView('home')

  return <>
    <h1>hola app</h1>

    {view === 'login' && <Login onLogin={navigateToHome} />}
    {view === 'home' && <Home />}
  </>
}

export default App;