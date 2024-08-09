import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Make sure the path is correct and matches the actual location of your components
import Dashboard from './Pages/Login/Dashbord'
import Signup from './Pages/Signup/Signup'; // Adjust the path as necessary
import LoginPage from './Pages/LoginPage/LoginPage';
import Home from './Pages/Dashboard/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;