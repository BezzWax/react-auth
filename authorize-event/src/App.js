import './App.css';
import {
  Routes, Route, Navigate, useLocation
} from 'react-router-dom';
import Userfront from "@userfront/toolkit/react";

import Home from './components/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
      </Routes>
    </div>

  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}