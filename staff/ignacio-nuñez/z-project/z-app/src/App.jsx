import React from "react";
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from "./components/Context";
import retrieveUser from "./logic/retrieveUser";
import UserOffers from "./pages/UserOffers";
import OfferDetail from "./pages/OfferDetail";
import CurriculumDetail from "./pages/CurriculumDetail"
import PublishedOffers from "./pages/PublishedOffers";
import UserCurriculums from "./pages/UserCurriculums";
import Alert from './components/Alert'
import errorHandling from "./utils/errorHandling";

function App() {
  const [user, setUser] = useState()
  const [message, setMessage] = useState()
  const [level, setLevel] = useState()

  useEffect(() => {
    if (sessionStorage.token)
      retrieveUserHandler()
  }, [])

  const handleLogout = () => {
    setUser()
  }

  const retrieveUserHandler = () => {
    try {
      retrieveUser(sessionStorage.token)
        .then(user => setUser(user))
        .catch(error => {
          const { errorMessage, type } = errorHandling(error)
          showAlert(errorMessage, type)
        })
    } catch (error) {
      const { errorMessage, type } = errorHandling(error)
      showAlert(errorMessage, type)
    }
  }

  const onLoggedIn = () => {
    retrieveUserHandler()
  }


  const showAlert = (message, level = 'error') => {
    setMessage(message)
    setLevel(level)
  }

  const closeAlert = () => setMessage()

  return (
    <Context.Provider value={{ handleLogout, user, showAlert }}>
      <Routes>
        {<Route path="/login"
          element={sessionStorage.token ? <Navigate replace to="/" /> : <Login onLoggedIn={onLoggedIn} />}
        />}
        {<Route path="/register"
          element={sessionStorage.token ? <Navigate replace to="/" /> : <Register />}
        />}
        {<Route path="/"
          element={sessionStorage.token ? <Home /> : <Navigate replace to="/login"
          />}
        />}
        {<Route path="/offers"
          element={sessionStorage.token ? <PublishedOffers /> : <Navigate replace to="/login"
          />}
        />}
        {<Route path="/user/profile"
          element={!sessionStorage.token ? <Navigate replace to="/login" /> : user?.role === 'company' ? <UserOffers /> :
            user?.role === 'worker' ? <UserCurriculums /> : null}
        />}
        {<Route path="/offers/:offerId"
          element={sessionStorage.token ? <OfferDetail /> : <Navigate replace to="/login"
          />}
        />}
          {<Route path="/curriculums/:curriculumId"
          element={sessionStorage.token ? <CurriculumDetail /> : <Navigate replace to="/login"
          />}
        />}
      </Routes>
      {message && <Alert message={message} level={level} onAlertClose={closeAlert} />}

    </Context.Provider>
  )
}

export default App;
