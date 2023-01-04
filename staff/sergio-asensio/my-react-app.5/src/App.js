import Login from './pages/Login'
import Home from './pages/Home'
import log from './utils/coolog'
import Register from './pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hello from './components/Hello'
import Profile from './pages/Profile'

function App() {
  log.info('App -> render')

  const ConditionalHome = () => {
    log.info('ConditionalHome -> render')

    return window.userId ? <Home /> : <Navigate replace to="/login" />
  }

  return <Routes>
    <Route path="/login" element={window.userId ? <Navigate replace to="/" /> : <Login />} />
    <Route path="/register" element={window.userId ? <Navigate replace to="/" /> : <Register />} />
    <Route path="/" element={<ConditionalHome />} />
    <Route path="/hello/:who" element={<Hello />} />
    <Route path="/profile/:targetUserId" element={<Profile />}/>
  </Routes>
}

export default App;