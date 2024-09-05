import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/job">Job</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
