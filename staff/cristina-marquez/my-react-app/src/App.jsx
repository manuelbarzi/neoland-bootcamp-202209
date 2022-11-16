import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import UserContext from './UserContext'


function App() {
  console.log('App -> render')

  const [view, setView] = useState('login')
  const [user, setUser] = useState()

  const providerValue = { user, setUser }


  const navigateToHome = () => setView('home')


  return (
    <UserContext.Provider value={providerValue}>
      <h1>Hello</h1>
      {view === 'login' && <Login onLoggedIn={navigateToHome} />}
      {view === 'home' && <Home />}
    </UserContext.Provider>
  )

}

export default App;