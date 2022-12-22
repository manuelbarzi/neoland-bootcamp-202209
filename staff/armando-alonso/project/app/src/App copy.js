import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Registro from './pages/Registro'
import NewsPage from './pages/NewsPage'
import Social from './pages/Social'
import Contacto from './pages/Contacto'
import Error404 from './pages/Error404'
import log from './utils/coolog'
import { Routes, Route } from 'react-router-dom'


function App() {
  log.info('App -> render')

  return (
    
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route exact path="/" element={<NewsPage />} />
      <Route exact path="/home" element={<LandingPage />} />
      <Route exact path="/social" element={<Social />} />
      <Route exact path="/contacto" element={<Contacto />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Registro />} />
      <Route exact path="/error404" element={<Error404 />} />
    </Routes>
  )
}

export default App;