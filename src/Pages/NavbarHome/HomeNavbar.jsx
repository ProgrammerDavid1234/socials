import React, { useEffect, useState } from 'react';
import './HomeNavbar.css';
import defaultProfile from '../Assets/profile.jpeg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomeNavbar = () => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Retrieve profile image from localStorage
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    } else {
      setProfileImage(defaultProfile);
    }

    // Retrieve bio from localStorage
    const storedBio = localStorage.getItem('bio');
    if (storedBio) {
      setBio(storedBio);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData); // Save image data to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.clear();
    navigate('/loginpage'); // Redirect to login page after logout
  };

  return (
    <div className="sidebar">
      <img className="profile-image" src={profileImage} alt="Profile" />
      <label htmlFor="file-input" className="edit-button">
        Edit profile picture
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <h3 className="username">Welcome {username}</h3> {/* Display the dynamic username */}
      <p className="bio" contentEditable suppressContentEditableWarning>
        {bio || 'Click to set bio'}
      </p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomeNavbar;
