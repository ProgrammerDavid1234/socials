import React, { useEffect, useState } from 'react';
import HomeNavbar from '../NavbarHome/HomeNavbar'; // Adjust the import path
import './Home.css'; // Import the general CSS for layout

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="general">
      <HomeNavbar />
      <div className="content">
        <h1>Hello, {username}</h1>
        <p>Welcome back to your dashboard!</p>
        {/* Other components or content can be added here */}
      </div>
    </div>
  );
};

export default Home;
