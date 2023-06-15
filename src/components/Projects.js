import React from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";

function Projects ({skillsState}) {
    return (
            <div className="projects-outer">
                <div className="projects">                    
                    <iframe src ="https://rdgroup-usa.com/" title="RD Group Consulting">
                    </iframe>
                    <a href="https://rdgroup-usa.com/" target='_blank'><h3>RD Group</h3></a>
                    <p>RD Group, interior and exterior design architects</p>
                </div>
                <div className="projects">                    
                    <iframe src ="https://dayanamorales.com" title="Dayana Morales Actress Portfolio">
                    </iframe>
                    <a href="https://dayanamorales.com" target='_blank'><h3>Dayana Morales Actress Portfolio</h3></a>
                    <p>Portfolio page of Venezuelan actress Dayana Morales</p>
                </div>
                <div className="projects">                    
                    <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights">
                    </iframe>
                    <a href="https://hilites.netlify.app/" target='_blank'><h3>Highlights</h3></a>
                    <p>Get the lates highlights from Europe's top three leagues: The English Premier League, The Spanish La Liga, and The Italian Serie A</p>
                </div>
                <div className="projects">        
                    <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>
                    <a href="https://toodue.netlify.app/" target='_blank'><h3>To do list</h3></a>         
                    <p>Organize your day with this to-do list app</p>
                </div>
                <div className="projects">
                    <iframe src ="https://expat-journals.netlify.app/" title="latest soccer highlights"></iframe>
                    <a href="https://expat-journals.netlify.app/" target='_blank'><h3>Expat Journal</h3></a>
                    <p>Expats document through images their experiences while living abroad</p>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        skillsState: state.skillsState
    }
}

export default connect(mapStateToProps,{})(Projects)