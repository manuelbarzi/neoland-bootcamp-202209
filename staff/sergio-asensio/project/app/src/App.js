import Login from './pages/Login'
import Home from './pages/Home'
import Noticias from './pages/Noticias'
import log from './utils/coolog'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Context from './components/Context'
import Alert from './components/Alert'
import Events from './pages/Events'
import EventByMonthName from './pages/EventByMonthName'
import Users from './pages/Users'
import Profile from './pages/Profile'



function App() {
  log.info('App -> render')

  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.token)
  // const [role, setRole] = useState()
  const [message, setMessage] = useState()
  const [level, setLevel] = useState()
  const navigate = useNavigate()

  const login = token => {
    sessionStorage.token = token

    setLoggedIn(true)

    navigate('/')
  }

  // const saveRole = (role) => {
  //   setRole(role)
  // }

  const logout = () => {
    delete sessionStorage.token

    setLoggedIn(false)
  }

  const showAlert = (message, level) => {
    setMessage(message)
    setLevel(level)
  }

  const closeAlert = () => setMessage()

  {/* // return <Context.Provider value={{ login, logout, showAlert, saveRole }}> */ }
  return <Context.Provider value={{ login, logout, showAlert }}>
    {loggedIn ? <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:monthName" element={<EventByMonthName />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />


      {/* {role === "admin" && <Route path="/users" element={<Users />} />} */}

    </Routes>
      :
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />

      </Routes>}

    {message && <Alert message={message} level={level} onClose={closeAlert} />}
  </Context.Provider>
}

export default App;