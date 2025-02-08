import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'; // Optional global/app-level CSS

import HomeChat from './pages/home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      {/*
        Define your routes here.
        "/" -> renders the SignUp page
        "/signin" -> renders the SignIn page
      */}
      <Route path="/" element={<Register />} />
      <Route path="/signin" element={<Register />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<HomeChat />} />
    </Routes>
  );
}

export default App;
