import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import HealthTracker from './pages/HealthTracker';
import SupportNetwork from './pages/SupportNetwork';
import Reminders from './pages/Reminders';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Notifications from './pages/Notifications';
import ForgotPassword from './pages/ForgotPassword';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/task-manager" element={<TaskManager />} />
              <Route path="/health-tracker" element={<HealthTracker />} />
              <Route path="/support-network" element={<SupportNetwork />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;