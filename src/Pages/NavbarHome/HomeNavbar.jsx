import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext'; // Adjust the import path
import './HomeNavbar.css';
import defaultProfile from '../Assets/profile.jpeg';

const HomeNavbar = () => {
  const { user } = useContext(UserContext); // Use context to get user data
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (user) {
      setProfileImage(user.profileImage || defaultProfile);
      setBio(user.bio || '');
    }
  }, [user]);

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
      <h3>{user?.username || 'No username available'}</h3>
      <p contentEditable suppressContentEditableWarning>
        {bio || 'Click to set bio'}
      </p>
    </div>
  );
};

export default HomeNavbar;
