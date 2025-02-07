import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css'; // Optional global/app-level CSS
import Profile from './pages/Profile';
import HomeChat from './pages/home';

function App() {
  return (
    <Routes>
      {/*
        Define your routes here.
        "/" -> renders the SignUp page
        "/signin" -> renders the SignIn page
      */}
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<HomeChat />} />
    </Routes>
  );
}

export default App;
