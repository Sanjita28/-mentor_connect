import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from './../../assets/OIG3.png';
import Google_logo from '../../assets/gooogle_logo.png';

const Login = () => {
  const [role, setRole] = useState('mentee'); // Track selected role

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-form">
          <h2>Log in</h2>
          
          <div className="login-toggle">
            <button 
              className={`toggle-btn ${role === 'mentee' ? 'active' : ''}`}
              onClick={() => setRole('mentee')}
            >
              I'm a mentee
            </button>
            <button 
              className={`toggle-btn ${role === 'mentor' ? 'active' : ''}`}
              onClick={() => setRole('mentor')}
            >
              I'm a mentor
            </button>
          </div>
          <form>
              <div className="input-group">
                <label>Email or username</label>
                <input type="text" placeholder="Email or username" required />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Password" required />
              </div>

              {/* Unified Login Button */}
              <button type="submit" className="login-btn">Log in as {role === 'mentee' ? "Mentee" : "Mentor"}</button>

              <div className="or-section">
                <hr /> <span>Or</span> <hr />
              </div>

              <button className="google-login-btn">
                <img src={Google_logo} alt="Google Icon" /> Log in with Google
              </button>

              <div className="extra-links">
                <a href="#">Forgot password?</a>
                <p>
                  {role === "mentee" ? (
                    <>Want to become a Mentor? <Link to="/signup/mentee">Apply here</Link></>
                  ) : (
                    <>Signing up as a Mentee instead? <Link to="/signup/mentor">Sign up here</Link></>
                  )}
                </p>
            </div>

            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
