// src/components/Header.js

import React from 'react';


const Experience = () => {
    const experiences = [
        {
            techStack: ["Vue.js", "Node.js"],
            title: "Ocare M (Hybrid App_2 for KB Healthcare) - Sept 2023 ~ Mar 2024",
            description: "Integrated the Naver Maps API and REST API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Connected to a simplified personal authentication API to retrieve health checkup results."
        },
        {
            techStack: ["Jquery"],
            title: "Ocare M (Hybrid App_2 for KB Healthcare) - Aug 2022 ~ Sept 2023",
            description: "Integrated the Google Maps API and REST API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Developed a feature to find health checkup hospitals that meet user criteria for reservations."
        },
        {
            techStack: ["Jquery", "Java", "ozForm"],
            title: "Electronic Employment Contract / Nursing Department OCS (for Kangbuk Samsung Hospital) - Jul 2022",
            description: "Maintained electronic employment contracts by integrating the eForm solution."
        },
        {
            techStack: ["Jquery", "Java", "Secure Keypad"],
            title: "Hipass System (for Kangbuk Samsung Hospital) - Mar 2022 ~ Jun 2022",
            description: "Developed card registration functionality by integrating an electronic keypad solution for payment."
        },
        {
            techStack: ["WordPress"],
            title: "Zerooneis WordPress Site - Jan 2022 ~ Feb 2022",
            description: "Developed a corporate website tailored to business needs using WordPress."
        },
        {
            techStack: ["Jquery", "Java"],
            title: "MindOnCare (Hybrid App_2 for Kangbuk Samsung Hospital) - Jul 2021 ~ Jun 2022",
            description: "Developed a psychological counseling page designed for a two-week program."
        },
        {
            techStack: ["Jquery", "Java", "ozForm"],
            title: "CGM Report (for Kangbuk Samsung Hospital) - Jun 2021 ~ Jul 2021",
            description: "Developed reporting functionality for patient-specific diabetes and chronic disease healthcare by integrating the ozReport solution."
        },
        {
            techStack: ["Jquery"],
            title: "Kyci (Web) - Feb 2021 ~ Jun 2021",
            description: "Developed membership registration, login, password retrieval, and 'My Page' features for the Teen Smartphone Addiction Coaching Service."
        }


    ];
    return (
        <div className="container-md">
            <header className="major">
                <h2>Experience</h2>
            </header>
            <div className="career-item">
                <div className="career-title">
                    <h3>Warmhiltlab - Seoul, Korea , Frontend Developer (Feb 2021 ~ Apr 2024)</h3>

                {experiences.map((experience, index) => (

                    <li key={index} className="experience-item">

                        <ul>{experience.title} </ul>
                        <ul>{experience.description}</ul>
                        <div className="tech-stack">
                            {experience.techStack.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>



                    </li>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
