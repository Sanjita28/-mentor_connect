import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './sections/Login/Login';
import SignupMentee from './sections/SignUp_mentee/signup_mentee';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_mentee" element = {<SignupMentee/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
