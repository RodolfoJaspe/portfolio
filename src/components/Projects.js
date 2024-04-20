import React from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";

function Projects ({skillsState}) {
    return (
            <div className="projects-outer">
                <div className="projects">              
                    <iframe src ="https://zaniacsteam.com" title="Zaniac South Miami">
                    </iframe>
                    <a href="https://zaniacsteam.com" target='_blank'></a>
                    <p>Zaniac South Miami, k-12 STEM Classes</p>
                </div>
                <div className="projects">              
                    <iframe src ="https://rdgroup-usa.com/" title="RD Group Consulting">
                    </iframe>
                    <a href="https://rdgroup-usa.com/" target='_blank'></a>
                    <p>RD Group, interior and exterior design</p>
                </div>
                <div className="projects">                 
                    <iframe src ="https://dayanamorales.com" title="Dayana Morales Actress Portfolio">
                    </iframe>
                    <a href="https://dayanamorales.com" target='_blank'></a>
                    <p>Portfolio page of Actress Dayana Morales</p>
                </div>
                <div className="projects">                    
                    <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights">
                    </iframe>
                    <a href="https://hilites.netlify.app/" target='_blank'></a>
                    <p>The latest highlights from the world's top football leagues</p>
                </div>
                <div className="projects">        
                    <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>
                    <a href="https://toodue.netlify.app/" target='_blank'></a>         
                    <p>Create and save to-do lists</p>
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