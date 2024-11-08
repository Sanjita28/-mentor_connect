import React from 'react';
import './Login.css';
import logo from './../../assets/OIG3.png'; // Assuming the correct relative path

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src={logo} alt="Logo" /> {/* Updated to use the imported logo */}
        </div>
      </div>

      <div className="login-right">
        <div className="login-form">
          <h2>Log in</h2>
          <div className="login-toggle">
            <button className="toggle-btn active">I'm a mentee</button>
            <button className="toggle-btn">I'm a mentor</button>
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

            <button type="submit" className="login-btn">Log in</button>

            <div className="or-section">
              <hr /> <span>Or</span> <hr />
            </div>

            <button className="google-login-btn">
              <img src="/path-to-google-icon.png" alt="Google Icon" /> Log in with Google {/* Ensure path to Google icon is correct */}
            </button>

            <div className="extra-links">
              <a href="#">Forgot password?</a>
              <p>Don't have an account? <a href="#">Sign up as a mentee</a> or <a href="#">apply to be a mentor</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
