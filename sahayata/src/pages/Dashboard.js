import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>Here are the sections you can manage:</p>
      <div className="grid">
        <div className="card">
          <h3>Task Manager</h3>
          <p>Manage your tasks and to-do list.</p>
          <Link to="/task-manager" className="btn">
            Go to Task Manager
          </Link>
        </div>
        <div className="card">
          <h3>Health Tracker</h3>
          <p>Track your health metrics and progress.</p>
          <Link to="/health-tracker" className="btn">
            Go to Health Tracker
          </Link>
        </div>
        <div className="card">
          <h3>Support Network</h3>
          <p>Find and connect with support groups.</p>
          <Link to="/support-network" className="btn">
            Go to Support Network
          </Link>
        </div>
        <div className="card">
          <h3>Reminders</h3>
          <p>Set and manage important reminders.</p>
          <Link to="/reminders" className="btn">
            Go to Reminders
          </Link>
        </div>
        <div className="card">
          <h3>Profile</h3>
          <p>View and update your profile.</p>
          <Link to="/profile" className="btn">
            Go to Profile
          </Link>
        </div>
        <div className="card">
          <h3>Settings</h3>
          <p>Manage your settings and preferences.</p>
          <Link to="/settings" className="btn">
            Go to Settings
          </Link>
        </div>
        <div className="card">
          <h3>Help Center</h3>
          <p>Find answers to common questions and contact support.</p>
          <Link to="/help" className="btn">
            Go to Help Center
          </Link>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>Check your recent notifications.</p>
          <Link to="/notifications" className="btn">
            Go to Notifications
          </Link>
        </div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Dashboard;
