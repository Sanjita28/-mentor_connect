import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup_mentee.css';
import logo from './../../assets/OIG3.png';
import Google_logo from '../../assets/gooogle_logo.png';

const SignupMentee = () => {
  const [role] = useState('mentee'); // Fixed role for signup

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-form">
          <h2>Sign up as Mentee</h2>
          
          <form>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email" required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" required />
            </div>

            <button type="submit" className="signup-btn">Sign Up as Mentee</button>

            <div className="or-section">
              <hr /> <span>Or</span> <hr />
            </div>

            <button className="google-signup-btn">
              <img src={Google_logo} alt="Google Icon" /> Sign up with Google
            </button>

            <div className="extra-links">
              <p>Already have an account? <Link to="/Login">Log in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupMentee;
