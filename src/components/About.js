

import React from 'react';



const About = () => {
    return (
        <div className="about-me-container">
            <section className="about-me-section">
                <h2>About Me</h2>
                <p>
                    Hi, I'm YeonSeo Jung from Korea, a passionate front-end developer. I graduated with a diploma in
                    Computer Programming and have spent the last three years working as a front-end developer in South
                    Korea, where I primarily focused on developing websites and hybrid apps tailored to user
                    requirements.
                    Recently, I relocated to London to advance my career in front-end development.
                    I am highly motivated and thrive on challenges, particularly when it comes to solving problems with
                    persistence and determination, even when I encounter unfamiliar issues.
                </p>
            </section>

            <section className="education-section">
                <h2>Education</h2>
                <p>React Programming Course, EZEN Academy Seoul, South Korea, Nov 2020 - Jan 2021</p>
                <p>Seneca College, Toronto, Canada - Computer Programming Diploma , Sep 2016 – Feb 2018</p>


            </section>

            <section className="skills-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                <li>JavaScript</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Jquery</li>
                    <li>HTML & CSS</li>
                    <li>Java</li>
                </ul>
            </section>
            <section className="skills-section">
                <div className="contact-me-container">
                    <h2>Contact Me</h2>
                    <div className="contact-links">
                        <a href="mailto:Yeonseo940311@gmail.com" className="email-link" aria-label="Email">
                            <svg width="24" height="24" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
                                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                            <span>Yeonseo940311@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/yeonseojung94" className="contact-link"
                           aria-label="LinkedIn">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            <span>linkedin.com/in/yeonseojung94</span>
                        </a>
                        <a href="https://github.com/ysjung4" className="contact-link"
                           aria-label="github">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            <span>github.com/ysjung4</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
