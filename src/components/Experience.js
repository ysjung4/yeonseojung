// src/components/Header.js

import React from 'react';


const Experience = () => {
    const experiences = [
        {
            title: "Ocare M (Hybrid App_2 for KB Healthcare) - 2023.09 ~ 2024.03",
            description: "Integrated the Naver Maps API and REST API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Connected to a simplified personal authentication API to retrieve health checkup results."
        },
// {
//     title: "Ocare M Maintenance - 2023.04 ~ 2023.09",
//     description: "Conducted maintenance to improve functionality and resolve errors for sustainability."
// },
        {
            title: "Ocare M (Hybrid App_2 for KB Healthcare) - 2022.08 ~ 2023.09",
            description: "Integrated the Google Maps API and REST API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Developed a feature to find health checkup hospitals that meet user criteria for reservations."
        },
        {
            title: "Electronic Employment Contract / Nursing Department OCS (for Kangbuk Samsung Hospital) - 2022.07",
            description: "Maintained electronic employment contracts by integrating the eForm solution."
        },
        {
            title: "Hipass System (for Kangbuk Samsung Hospital) - 2022.03 ~ 2022.06",
            description: "Developed card registration functionality by integrating an electronic keypad solution for payment."
        },
        {
            title: "Zerooneis WordPress Site - 2022.01 ~ 2022.02",
            description: "Developed a corporate website tailored to business needs using WordPress."
        },
        {
            title: "MindOnCare (Hybrid App_2 for Kangbuk Samsung Hospital) - 2021.07 ~ 2022.06",
            description: "Developed a psychological counseling page designed for a two-week program."
        },
        {
            title: "CGM Report (for Kangbuk Samsung Hospital) - 2021.06 ~ 2021.07",
            description: "Developed reporting functionality for patient-specific diabetes and chronic disease healthcare by integrating the ozReport solution."
        },
        {
            title: "Kyci (Web) - 2021.02 ~ 2021.06",
            description: "Developed membership registration, login, password retrieval, and 'My Page' features for the Teen Smartphone Addiction Coaching Service."
        }

    ];
    return (
        <div className="container-md">
            <header className="major">
                <h2>Experience</h2>
            </header>
            <div className="career-item">
                {experiences.map((experience, index) => (
                    <div key={index} className="experience-item">
                        <h3>{experience.title} </h3>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
