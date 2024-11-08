import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './sections/hero/hero'
import Header from './sections/Header/Header'
import Login from './sections/Login/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
