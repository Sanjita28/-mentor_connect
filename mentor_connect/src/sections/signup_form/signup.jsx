import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./signup.css"; // Single CSS file
import logo from "./../../assets/OIG3.png";
import Google_logo from "../../assets/gooogle_logo.png";

const SignupForm = () => {
  const location = useLocation();
  const role = location.pathname.includes("mentor") ? "mentor" : "mentee";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    expertise: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-form">
          <h2>Sign up as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

          <form>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            </div>

            {/* Extra Fields for Mentors */}
            {role === "mentor" && (
              <>
                <div className="input-group">
                  <label>Expertise</label>
                  <input type="text" name="expertise" placeholder="Your Expertise (e.g., AI, Web Dev)" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Experience (in years)</label>
                  <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} required />
                </div>
              </>
            )}

            <button type="submit" className="signup-btn">Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</button>

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

export default SignupForm;
