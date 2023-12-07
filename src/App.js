import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route
          path="/dashboard"
          element={
            localStorage.getItem('user') ? (
              <Dashboard />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
