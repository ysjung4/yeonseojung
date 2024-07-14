// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">PROJECTS</Link>
            <Link to="/about">ABOUT ME</Link>
            <Link to="/cv">CV</Link>
        </nav>
    );
}

export default Navbar;
