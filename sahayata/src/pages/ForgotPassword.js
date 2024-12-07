import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to initiate the password reset process
    console.log('Password reset requested for:', email);
    setMessage('If an account exists for ' + email + ', an email will be sent with further instructions.');
    setEmail('');
  };

  return (
    <div className="page-container">
      <h1>Forgot Password</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="form-link">
        Remember your password? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
