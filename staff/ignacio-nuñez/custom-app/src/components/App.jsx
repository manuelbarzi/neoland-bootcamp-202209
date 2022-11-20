import React from "react";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import UserPerfil from "../pages/UserPerfil";
import SearchedUserPerfil from "../pages/SearchedUserPerfil";
const { useState } = React

function App() {
  const [view, setView] = useState(sessionStorage.userId ? "home": "login")
  const [searchedUser,  setSearchedUser] = useState()

  const navigateToHome = () => setView('home')

  const navigateToLogin = () => setView('login')

  const navigateToRegister = () => setView('register')

  const navigateToPerfil = () => setView('perfil')

  const onSearchedUserClick = (searchedUserId) =>{
    setSearchedUser(searchedUserId)

    setView('searchedUserPerfil')
  }

  return (
    <>
      {view === 'login' && <Login onAuthenticate={navigateToHome} onRegisterClick={navigateToRegister} />}
      {view === 'register' && <Register onRegister={navigateToLogin} onLoginClick={navigateToLogin}/>}
      {view === 'home' && <Home onLogoutClick={navigateToLogin} onPerfilClick={navigateToPerfil} onSearchedUserClick={onSearchedUserClick} onHomeClick={navigateToHome}/>}
      {view === 'perfil' && <UserPerfil onLogoutClick={navigateToLogin} onHomeClick={navigateToHome} onSearchedUserClick={onSearchedUserClick} onPerfilClick={navigateToPerfil}/>}
      {view === 'searchedUserPerfil' && <SearchedUserPerfil onLogoutClick={navigateToLogin} onHomeClick={navigateToHome} onSearchedUserClick={onSearchedUserClick} onSearchUser={searchedUser} onPerfilClick={navigateToPerfil}/>}
    </>
  );
}

export default App;
