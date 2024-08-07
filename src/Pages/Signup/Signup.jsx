import React, { useState, useEffect } from 'react';
import './Signup.css';
import logo from '../../Components/Assets/Logo.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const validatePassword = (password) => {
    setHasEightChars(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  return (
    <div className="signup-container">
      <div className="rightText">
        <p>Already have an account? Log in</p>
        <p>Forget your user ID or password?</p>
      </div>
      <div className="logo">
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
          <div className="signupButton">
            <h5>Sign up</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
