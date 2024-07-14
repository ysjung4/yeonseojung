// src/components/Main.js

import React from 'react';
import Header from './Header';
import Experience from "./Experience";
import Project from "./Projects";
import About from "./About";
import Footer from "./Footer";



const Main = () => {
    return (
        <div className="main">

            <Header/>
            {/* 프로젝트 섹션 */}

            <section id="projects" className="section">
                <Experience/>
            </section>
            {/* 어바웃비 섹션 */}
            <section id="about" className="section">
                <Project/>
            </section>

            {/* CV 섹션 */}
<Footer/>
        </div>
    );
}

export default Main;
