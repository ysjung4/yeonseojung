// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">PROJECTS</Link>
            <Link to="/about">ABOUT ME</Link>
            <a href="/YeonseoJung.pdf" download="YeonseoJung.pdf"> 
                Download CV
            </a>
        </nav>
    );
}

export default Navbar;
