import React from "react";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import UserPerfil from "../pages/UserPerfil";
import SearchedUserPerfil from "../pages/SearchedUserPerfil";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [searchedUser, setSearchedUser] = useState()

  const onSearchedUserClick = (searchedUser) => {
    setSearchedUser(searchedUser)
  }

  const ConditionalHome = () => {

    return sessionStorage.userId ? <Home onSearchedUserClick={onSearchedUserClick} /> : <Navigate replace to="/login" />
  }

  const ConditionalUserPerfil = () => {

    return sessionStorage.userId ? <UserPerfil onSearchedUserClick={onSearchedUserClick} /> : <Navigate replace to="/login" />
  }

  return (
    <Routes>
      {<Route path="/login"
        element={sessionStorage.userId ? <Navigate replace to="/" /> : <Login />}
      />}
       {<Route path="/register"
        element={sessionStorage.userId ? <Navigate replace to="/" /> : <Register />}
      />}
      {<Route path="/"
        element={<ConditionalHome />}

      />}
       {<Route path="/perfil"
        element={<ConditionalUserPerfil />}
      />}
      {
        <Route path='/user/:userId'
          element={<SearchedUserPerfil />}
          searchedUser={searchedUser}
        />}
    </Routes>
  );
}

export default App;
