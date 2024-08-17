// src/components/Header.js

import React from 'react';

const Projects = () => {
    const projects = [
        {
            techStack: ["Vue.js", "Node.js"],
            path:'/images/screenshoot2.png',
            link: "https://findnhshospital.netlify.app/",
            title: "Hospital Finder",
            description: "Developed a location-based hospital finder by integrating the NHS Open API. ",
        },

        {
            techStack: ["React", "Node.js"],
            path:'/images/screenshoot1.png',
            link: "https://stockmanaging.netlify.app/",
            title: "Shopping Cart Program",
            description: "Developed an inventory management shopping cart program that tracks product quantities. "
        },
        {
            techStack: ["React", "Node.js"],
            path:'/images/screenshoot3.png',
            link: "https://gamjaworld.netlify.app",
            title: "Gamja's World",
            description: "Developed a virtual fan site for Gamja, a beloved pet, to engage and connect with fans. "
        }

    ];
    return (
        <div className="projects_container-md">
            <header className="major">
                <h2>Projects</h2>
            </header>

            <div className="projects-item">

                {projects.map((projects, index) => (
                    <article key={index} className="projects2-item">
                        <div className="projects_content">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <div className="tech-stack">
                                {projects.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <a href={projects.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={projects.path}
                                    alt="image"
                                    className="experience-image"
                                />
                            </a>

                        </div>
                    </article>
                ))}
            </div>
        </div>

    );
}

export default Projects;
