import React from "react";
import "./Projects.css";

function Projects () {
    return (
        <div>
            <h2>Projects</h2>
            <div >
                <div className="projects">
                <h3><a href="https://hilites.netlify.app/">HiLites App</a></h3>
                <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights"></iframe>
                <p>Get the lates highlights from Europe's top three leagues: The English Premier League, The Spanish La Liga, and The Italian Serie A</p>
            </div>
            <div className="projects">
                <h3><a href="https://toodue.netlify.app/">TooDue App</a></h3>
                <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>         
                <p>Organize your day with this to-do list app</p>
            </div>
            <div className="projects">
                <h3><a href="https://expat-journals.netlify.app/">Expat Journal</a></h3>
                <iframe src ="https://expat-journals.netlify.app/" title="latest soccer highlights"></iframe>
                <p>Expats document through images their experiences while living abroad</p>
            </div>
            </div>
            
        </div>
    )
}

export default Projects