import React from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import loginImg from '../Assets/log.png';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="general">
                <div className="inputField">
                    <h4>Explore the world <br /> to experience the <br /> beauty of nature</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Morbi lobortis maximus</p>
                    <div className="signupButton">
                        <h5><FaGoogle /> Continue with Google</h5>
                        <h5><FaFacebook /> Continue with Facebook</h5>
                        <h5><FaApple /> Continue with Apple</h5>
                    </div>
                    <div className="divider">
                        <h5>or</h5>
                    </div>
                    <div className="signupButton">
                        <h5 style={{ backgroundColor: 'black', color: 'white' }}> Sign up with email</h5>
                    </div>
                    <br />
                    <p>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including cookie use.</p>
                </div>
                <div className="imgSpace">
                    <img src={loginImg} className="LoginImg" alt="Login" />
                </div>
            </div>
        </div>
    );
}

export default Login;
