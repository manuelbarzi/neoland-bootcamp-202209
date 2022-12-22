import Login from './pages/Login'
import Home from './pages/Home'
import log from './utils/coolog'
import Register from './pages/Register'
import ConditionalProfile from './pages/ConditionalProfile'
import { Routes, Route, Navigate } from 'react-router-dom'
import Context from './components/Context'
import { useState } from 'react'

function App() {
  log.info('App -> render')

  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.userId)

  const login = userId => {
    sessionStorage.userId =userId
    
    setLoggedIn(true)
  }

  const logout = () => {
    delete sessionStorage.userId

    setLoggedIn(false)
  }


  return <Context.Provider value={{ login, logout }}>   
    {loggedIn ? <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:targetUserId' element={<ConditionalProfile />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
    :
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>}
  </Context.Provider>
}

export default App;
