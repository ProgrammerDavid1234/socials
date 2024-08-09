import React, { useState, useEffect } from 'react';
import './HomeNavbar.css';
import defaultProfile from '../Assets/profile.jpeg';

const HomeNavbar = ({ userId }) => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [editingUsername, setEditingUsername] = useState(false);
  const [editingBio, setEditingBio] = useState(false);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`); // Correct URL
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setProfileImage(data.profileImage || defaultProfile);
        setUsername(data.username || '');
        setBio(data.bio || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Update user profile data
  const updateUserProfile = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`, { // Correct URL
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profileImage, username, bio }),
      });
      if (!response.ok) throw new Error('Failed to update user profile');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  useEffect(() => {
    updateUserProfile();
  }, [profileImage, username, bio]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditingUsername(false);
    }
  };

  const handleBioKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditingBio(false);
    }
  };

  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile" />
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
      {editingUsername ? (
        <input
          type="text"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleUsernameKeyDown}
          className="username-input"
          onBlur={() => setEditingUsername(false)}
        />
      ) : (
        <h3 onClick={() => setEditingUsername(true)}>{username || 'Click to set username'}</h3>
      )}
      {editingBio ? (
        <input
          type="text"
          value={bio}
          placeholder="Enter your bio"
          onChange={(e) => setBio(e.target.value)}
          onKeyDown={handleBioKeyDown}
          className="bio-input"
          onBlur={() => setEditingBio(false)}
        />
      ) : (
        <p onClick={() => setEditingBio(true)}>{bio || 'Click to set bio'}</p>
      )}
    </div>
  );
};

export default HomeNavbar;
