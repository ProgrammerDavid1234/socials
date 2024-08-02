import React from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import loginImg from '../Assets/log.png';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <div>
      <Navbar />
      <div className="general">
        <div className="inputField">
          <h4>Explore connections, <br /> share experiences, and <br /> build your network.</h4>
          <p className='para'>Connect deeply, engage meaningfully. Discover your world, <br /> share your journey.</p>
          <div className="signupButton">
            <h5><FaGoogle className='icon' /> Continue with Google</h5>
            <h5><FaFacebook className='icon' /> Continue with Facebook</h5>
            <h5><FaApple className='icon' /> Continue with Apple</h5>
          </div>
          <div className="divider">
            <h5>or</h5>
          </div>
          <div className="signupButton">
            <h5 
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={handleSignUpClick} // Handle click event
            >
              Sign up with email
            </h5>
          </div>
          <p>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including cookie use.</p>
        </div>
        <div className="imgSpace">
          <img src={loginImg} className="LoginImg" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
