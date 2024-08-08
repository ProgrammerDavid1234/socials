import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Logo.jpg';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt='Company Logo' />
        </div>
        <div className="right">
            <p>English (United States)</p>
            <Link to="/loginpage">
                <h3 style={{fontWeight: '400'}}>Login</h3>
            </Link>
        </div>
        <hr />
    </nav>
  );
};

export default Navbar;
