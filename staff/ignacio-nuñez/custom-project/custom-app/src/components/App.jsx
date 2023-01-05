import React from "react";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import UserPerfil from "../pages/UserPerfil";
import SearchedUserPerfil from "../pages/SearchedUserPerfil";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from "./Context";
import retrieveUser from "../logic/retrieve-user";

function App() {
  const [user, setMyUser] = useState()

  useEffect(() => {
    if (sessionStorage.token) 
    retrieveUserHandler()
  }, [])
  
  const handleLogout = () => {
    setMyUser()
  }
  
  const retrieveUserHandler = () => {
    retrieveUser(sessionStorage.token)
    .then(user => {
      setMyUser(user)
    })
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
        {<Route path="/perfil"
          element={sessionStorage.token ? <UserPerfil /> : <Navigate replace to="/login" />}
        />}
        {
          <Route path='/user/:targetUserId'
            element={sessionStorage.token ? <SearchedUserPerfil /> : <Navigate replace to="/login" />}
          />}
      </Routes>
    </Context.Provider>
  )
}

export default App;
