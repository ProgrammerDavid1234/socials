import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import logo from '../../Components/Assets/Logo.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';


const LoginPage = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
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
    const handleSignUpClick = () => {
        navigate('/signup'); // Navigate to the Signup page
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
                <p>Dont have an account? <span className="login-link" onClick={handleSignUpClick}>Sign Up</span></p>
            </div>
            <div className="logo1">
                <img src={logo} alt="Logo" />
            </div>
            <div className="container">
                <div className="text">
                    <h3>Login</h3>
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
                    <p>By creating an account, I agree to our Terms of use and
                    Privacy Policy.</p>


                    <div className="signupButton">
                        <h5>Login</h5>
                    </div>
                    <div className="divider">
            <h5>or</h5>
          </div>
                    <div className="signupButton">
            <h5 style={{fontWeight:'400'}}><FaGoogle className='icon' /> Continue with Google</h5>
            <h5 style={{fontWeight:'400'}}><FaFacebook className='icon' /> Continue with Facebook</h5>
            <h5 style={{fontWeight:'400'}}><FaApple className='icon' /> Continue with Apple</h5>
          </div>
                    <div className="rightText1">
                        <p>Already have an account? Log in</p>
                        <p>Forget your user ID or password?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
