import React from 'react';
import './Dashboard.css';
import Navbar from '../../Components/Navbar/Navbar';
import loginImg from '../Assets/log.png';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-general">
        <div className="login-inputField">
          <h4 className="login-heading">Explore connections, <br /> share experiences, and <br /> build your network.</h4>
          <p className="login-paragraph">Connect deeply, engage meaningfully. Discover your world, <br /> share your journey.</p>
          <div className="login-signupButton">
            <h5 className="login-button"><FaGoogle className="login-icon" /> Continue with Google</h5>
            <h5 className="login-button"><FaFacebook className="login-icon" /> Continue with Facebook</h5>
            <h5 className="login-button"><FaApple className="login-icon" /> Continue with Apple</h5>
          </div>
          <div className="login-divider">
            <h5 className="login-divider-text">or</h5>
          </div>
          <div className="login-signupButton">
            <h5 
              className="login-emailButton" 
              onClick={handleSignUpClick}
            >
              Sign up with email
            </h5>
          </div>
          <p className="login-terms">By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including cookie use.</p>
        </div>
        <div className="login-imgSpace">
          <img src={loginImg} className="login-LoginImg" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
