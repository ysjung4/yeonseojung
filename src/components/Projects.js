// src/components/Header.js

import React from 'react';

const Projects = () => {
    const projects = [
        {
            techStack: ["React", "JavaScript (ES6+)","HTML","CSS", "NHS API", "Google Maps API"],
            path:'/images/screenshoot5.png',
            link: "https://findnhshospital.netlify.app/",
            title: "HealthMate",
            description: "Developed a healthcare app utilizing the NHS Open API. ",
        },

        {
            techStack: ["React", "JavaScript (ES6+)","HTML","CSS", "Fake Store API"],
            path:'/images/store.png',
            link: "https://stockmanaging.netlify.app/",
            title: " VirtuMall",
            description: "Developed using open APIs to create a realistic online shopping environment."
        },
        {
            techStack: ["React", "JavaScript (ES6+)      ","HTML","CSS"],
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
                                    alt={projects.title}
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
