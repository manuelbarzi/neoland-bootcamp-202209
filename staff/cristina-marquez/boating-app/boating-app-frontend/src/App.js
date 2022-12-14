import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import Login from "./pages/login";
import Register from "./pages/register";
import Boats from "./pages/boats";
import Bookings from "./pages/bookings";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import PortsPage from "./pages/ports";
import appSessionManager from "./helpers/sessionManager";


function App() {


  const [user, setUser] = useState(null)
  const userContextProviderValues = { user, setUser }

  useEffect(() => {
    const session = appSessionManager.loadSessionFromLocalStorage()
    if (session) {
      console.log('Restoring user session')
      setUser(session)
    }
  }, [])


  return (
    <UserContext.Provider value={userContextProviderValues}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate replace to="/login" />}>
            <Route path="ports" element={user ? <PortsPage /> : <Navigate replace to="/login" />} />
            <Route path="boats" element={user ? <Boats /> : <Navigate replace to="/login" />} />
            <Route path="bookings" element={user ? <Bookings /> : <Navigate replace to="/login" />} />
            <Route path="settings" element={user ? <Settings /> : <Navigate replace to="/login" />} />
          </Route>
          <Route path="/login" element={user ? <Navigate replace to="/ports" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate replace to="/ports" /> : <Register />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
