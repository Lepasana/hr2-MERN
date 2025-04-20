import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Sidebar from './components/Sidebar';
import ProfileDropdown from './components/ProfileDropdown'; // ✅ Import here
import Dashboard from './pages/Dashboard';
import LearningManagement from './pages/LearningManagement';
import CompetencyManagement from './pages/CompetencyManagement';
import TrainingManagement from './pages/TrainingManagement';
import SuccessionPlanning from './pages/SuccessionPlanning';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('adminToken'));

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="flex">
          {isLoggedIn && <Sidebar />}
          <div className="flex-1 p-8">
            {/* Show ProfileDropdown on top right if logged in */}
            {isLoggedIn && (
              <div className="flex justify-end mb-4">
                <ProfileDropdown />
              </div>
            )}
            <Routes>
              <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <AdminLogin />} />
              <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/learning-management" element={isLoggedIn ? <LearningManagement /> : <Navigate to="/login" />} />
              <Route path="/competency-management" element={isLoggedIn ? <CompetencyManagement /> : <Navigate to="/login" />} />
              <Route path="/training-management" element={isLoggedIn ? <TrainingManagement /> : <Navigate to="/login" />} />
              <Route path="/succession-planning" element={isLoggedIn ? <SuccessionPlanning /> : <Navigate to="/login" />} />
              <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
