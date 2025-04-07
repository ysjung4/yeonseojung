// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleDownload = (e) => {
        const confirmDownload = window.confirm("Would you like to download the resume?");
        if (!confirmDownload) {
            e.preventDefault();
        }
    };

    return (
        <nav className="navbar">
            <Link to="/">PROJECTS</Link>
            <Link to="/about">ABOUT ME</Link>
            <a 
                href="/YeonseoJung.pdf" 
                download="YeonseoJung.pdf" 
                onClick={handleDownload}
            >
                Download CV
            </a>
        </nav>
    );
}

export default Navbar;
