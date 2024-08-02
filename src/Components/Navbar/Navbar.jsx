import React from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.jpg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt='Company Logo' />
        </div>
        <div className="right">
            <p>English (United States)</p>
            <h3>Login</h3>
        </div>
        <hr />
    </nav>
  )
}

export default Navbar
