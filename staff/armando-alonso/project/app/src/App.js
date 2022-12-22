import log from './utils/coolog'
import LandingPage from './pages/LandingPage'
import NewsPage from './pages/NewsPage'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateNews from './pages/CreateNews'
import Article from './pages/Article'
import OpenArticle from './pages/OpenArticle'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Context from './components/Context'


function App() {
  log.info('App -> render')

  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.userId)

  const login = userId => {
    sessionStorage.userId = userId

     
    setLoggedIn(true)
  }

  const logout = () => {
    delete sessionStorage.userId

    setLoggedIn(false)
  }

  return <Context.Provider value={{ login, logout }}>
  {loggedIn ? <Routes>
    <Route path="/" element={<NewsPage />} />
    <Route path="/createNews" element={<CreateNews />} />
    <Route path="/article/:postId" element={<Article />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
  :
  <Routes>
    <Route path="/landing" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/openarticle/:postId" element={<OpenArticle />} />
    <Route path="*" element={<Navigate replace to="/landing" />} />
  </Routes>}
  </Context.Provider>
}

export default App;