import React, { useState, useEffect } from 'react';
import './Signup.css';
import logo from '../../Components/Assets/Logo.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // New state for username
  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const validatePassword = (password) => {
    setHasEightChars(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  const validateForm = () => {
    if (username.trim() === '') {
      setError('Username is required.');
      return false;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 8 || !hasUpperCase || !hasNumber || !hasSymbol) {
      setError('Please ensure your password meets all requirements.');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', { email, password, username });
      localStorage.setItem('token', res.data.token);
      navigate('/loginpage');
    } catch (err) {
      setError('Sign up failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  return (
    <div className="signup-container">
      <div className="rightText">
        <p>Already have an account? <span className="login-link" onClick={() => navigate('/loginpage')}>Login</span></p>
        <p>Forget your user ID or password?</p>
      </div>
      <div className="logo1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="text">
          <h3>Create an account</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Morbi lobortis maximus</p>
        </div>
        <div className="input">
          <div className="input-container">
            <label htmlFor="username">Username</label> {/* New Username Field */}
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="tooltip">We will use your email as your user ID.</span>
          </div>

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" />

          <p>We strongly recommend adding a phone number. This will help verify your account and keep it safe.</p>

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="requirements">
            <label>
              <input type="checkbox" checked={hasEightChars} readOnly /> Use 8 or more characters
            </label>
            <label>
              <input type="checkbox" checked={hasUpperCase} readOnly /> Use upper and lower case letters (e.g. Aa)
            </label>
            <label>
              <input type="checkbox" checked={hasNumber} readOnly /> Use a number (e.g. 1234)
            </label>
            <label>
              <input type="checkbox" checked={hasSymbol} readOnly /> Use a symbol (e.g. !@#$)
            </label>
          </div>
          <div className="signupButton" onClick={handleSignUp} style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.6 : 1 }}>
            <h5>{loading ? 'Signing up...' : 'Sign up'}</h5>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="rightText1">
            <p>Already have an account? Log in</p>
            <p>Forget your user ID or password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
