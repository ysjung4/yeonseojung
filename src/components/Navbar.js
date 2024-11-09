// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">PROJECTS</Link>
            <Link to="/about">ABOUT ME</Link>
            <a href="/YeonseoJung.pdf" download="YeonseoJung.pdf"> {/* 실제 파일 경로와 파일 이름으로 변경 */}
                Download CV
            </a>
        </nav>
    );
}

export default Navbar;
