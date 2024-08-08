import React, { useState } from 'react';
import './LoginPage.css';
import logo from '../../Components/Assets/Logo.jpg';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = async () => {
    setLoading(true); // Set loading to true when the request starts
    setError(''); // Reset error message on new attempt
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please check your email and password.');
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="login-container">
      <div className="rightText">
        <p>Don't have an account? <span className="login-link" onClick={() => navigate('/signup')}>Sign Up</span></p>
      </div>
      <div className="logo1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="text">
          <h3>Login</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Morbi lobortis maximus</p>
        </div>
        <div className="input">
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
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <p>By creating an account, I agree to our Terms of use and Privacy Policy.</p>
          <div className="signupButton" onClick={handleLogin} style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.6 : 1 }}>
            <h5>{loading ? 'Loading...' : 'Login'}</h5> {/* Show loading text when loading */}
          </div>
          <div className="divider">
            <h5>or</h5>
          </div>
          <div className="signupButton">
            <h5 style={{ fontWeight: '400' }}><FaGoogle className='icon' /> Continue with Google</h5>
            <h5 style={{ fontWeight: '400' }}><FaFacebook className='icon' /> Continue with Facebook</h5>
            <h5 style={{ fontWeight: '400' }}><FaApple className='icon' /> Continue with Apple</h5>
          </div>
          <div className="rightText1">
            <p>Already have an account? Log in</p>
            <p>Forget your user ID or password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
