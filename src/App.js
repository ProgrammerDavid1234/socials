import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Login/Dashbord'; // Adjust the path as necessary
import Signup from './Pages/Signup/Signup'; // Adjust the path as necessary
import LoginPage from './Pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginpage" element={<LoginPage />} />

      </Routes>
    </Router>
  );
};

export default App;
