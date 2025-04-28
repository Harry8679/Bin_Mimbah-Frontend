import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Plus tard : import Login, Register, Profile etc.

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tu ajouteras tes autres pages ici plus tard */}
        {/* Exemple : <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
