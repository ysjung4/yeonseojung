// src/components/Header.js

import React from 'react';


const Projects = () => {
    const projects = [
        {
            title: "Hospital Finder Using NHS Open API",
            description: "Developed a location-based hospital finder by integrating the NHS Open API. "
        },

        {
            title: "Shopping Cart Program",
            description: "Created an inventory management shopping cart program that tracks product quantities in real-time. The program updates inventory levels as items are added or removed from the cart, ensuring accurate stock management. "
        },
        {
            title: "Gamja's World",
            description: "Created a virtual fan site for Gamja, a beloved pet, to engage and connect with fans. "
        }

    ];
    return (
        <div className="projects_container-md">
            <header className="major">
                <h2>projects</h2>
            </header>
            <div className="projects-item">
                {projects.map((projects, index) => (
                    <article key={index} className="projects2-item">
                        <div className="projects_content">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>

    );
}

export default Projects;
