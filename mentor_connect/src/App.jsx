import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './sections/Login/Login';
import SignupForm from "./sections/signup_form/signup";
import Header from './sections/Header/Header';
import Hero from './sections/hero/hero';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/mentee" element={<SignupForm role="mentee" />} />
          <Route path="/signup/mentor" element={<SignupForm role="mentor" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
