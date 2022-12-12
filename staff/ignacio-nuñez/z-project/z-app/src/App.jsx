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

function App() {
  const [user, setUser] = useState()

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
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }

  const onLoggedIn = () => {
    retrieveUserHandler()
  }

  return (
    <Context.Provider value={{ handleLogout, user }}>
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
        {<Route path="/user/profile"
          element={sessionStorage.token ? <UserOffers /> : <Navigate replace to="/login"
          />}
        />}
        {<Route path="/offers/:offerId"
          element={sessionStorage.token ? <OfferDetail /> : <Navigate replace to="/login"
          />}
        />}
      </Routes>
    </Context.Provider>
  )
}

export default App;
