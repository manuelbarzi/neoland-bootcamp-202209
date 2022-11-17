import React from "react";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
const { useState } = React

function App() {
  const [view, setView] = useState(sessionStorage.userId ? "home": "login")

  const navigateToHome = () => setView('home')

  const navigateToLogin = () => setView('login')

  const navigateToRegister = () => setView('register')

  return (
    <>
      {view === 'login' && <Login onAuthenticate={navigateToHome} onRegisterClick={navigateToRegister} />}
      {view === 'register' && <Register onRegister={navigateToLogin} onLoginClick={navigateToLogin}/>}
      {view === 'home' && <Home onLogout={navigateToLogin} />}
    </>
  );
}

export default App;
