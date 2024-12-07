import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Sahayata</h1>
      <p>
        Sahayata is a platform dedicated to providing care and support to cancer patients and their caregivers. We offer resources, reminders, health tracking, and a supportive community.
      </p>
      <p>
        Whether you are managing your health, looking for a support network, or staying on top of your daily tasks, Sahayata is here to help.
      </p>
      <div className="button-container">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;

