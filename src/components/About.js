import React from "react";
import headshot from "../Assets/headshot.jpg";
import "../styles/About.css";

function About () {
    return (
        <div className='about-container'>
            <div 
                className="about-picture">
                <img src={headshot} alt="headshot"/>
            </div>
            <div className="bio">   
                <p>
                    I am a full stack web developer with a passion for front-end development. My skills include Javascript, React, Redux, Three.js, Node.js, PostgreSQL, Express, HTML, CSS and styled-components, among others. 
                </p>
                <p>
                    For over ten years I've worked in multiple teams and enjoy the process of creation and development from collective ideas. My experience training and working as an actor and a bartender have provided me with very valuable soft skills easily transferable to any profession where communication is key for success.
                </p>
                <p>
                    When I'm not coding I'm usually on dad mode, improving my guitar skills, or supporting Manchester United.
                </p>
            </div>
        </div>
    )
}

export default About