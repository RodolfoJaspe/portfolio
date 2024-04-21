    import React from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";
import IsometricText from "./lib/IsometricText";

    function Projects ({skillsState}) {
        return (
                <div className="projects-outer">
                    <IsometricText text={"Projects"} mainColor={"#0077b5"} sideColor={"#014367"} fontSize={"2.5em"}/>
                    <div className="projects">
                        <p><a href="https://zaniacsteam.com" target='_blank'>Zaniac South Miami, k-12 STEM Classes</a></p>              
                        <iframe src ="https://zaniacsteam.com" title="Zaniac South Miami">
                        </iframe>
                        
                        
                    </div>
                    <div className="projects"> 
                        <p> <a href="https://rdgroup-usa.com/" target='_blank'>RD Group, interior and exterior design</a></p>             
                        <iframe src ="https://rdgroup-usa.com/" title="RD Group Consulting">
                        </iframe>
                       
                        
                    </div>
                    <div className="projects">  
                        <p> <a href="https://dayanamorales.com" target='_blank'>Portfolio page of Actress Dayana Morales</a></p>               
                        <iframe src ="https://dayanamorales.com" title="Dayana Morales Actress Portfolio">
                        </iframe>
                       
                    
                    </div>
                    <div className="projects">
                        <p><a href="https://hilites.netlify.app/" target='_blank'>The latest highlights from the world's top football leagues</a></p>                    
                        <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights">
                        </iframe>
                        
                
                    </div>
                    <div className="projects">  
                        <p><a href="https://toodue.netlify.app/" target='_blank'>Create and save to-do lists</a></p>      
                        <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>
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