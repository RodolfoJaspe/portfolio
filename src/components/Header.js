import React from 'react';
import '../styles/Header.css';
import linkedIn from '../Assets/linkedin.png'
import github from '../Assets/github.png'
import { connect } from 'react-redux';
import { showSkills } from '../actions'

function Header({skillsState, showSkills, focus}) {

    return (
        <header> 
        <div className='linkedin-icon'>    
            <a href='https://www.linkedin.com/in/rodolfo-jaspe/' target='_blank'>   
                <img src={linkedIn} alt='linkedin-icon'
                />     
            </a>
        </div>
        <div className='github-icon'>    
            <a href='https://github.com/RodolfoJaspe' target='_blank'>   
                <img src={github} alt='github-icon'
                />     
            </a>
        </div>
        <div className={!skillsState?"h1-div":"h1-div2"}>
                <div className='name-title'>
                    <h1 className ='name'>
                        <div className='first-name'>Rodolfo</div>
                        <div className='last-name'>Jaspe</div>
                    </h1> 
                    {/* <div className='slash'>
                        /
                    </div> */}
                    {/* <div className='title' onClick={()=>showSkills(skillsState)}>
                        Full Stack Developer
                    </div> */}
                </div>
                 {!focus?<div className='skills-container'>
                    <h2>{'{'}</h2>
                    <div className='skills-outer'>
                        <div className='skills-inner'>
                            <div className='skills-title'>Front-end :</div>  <h4>[</h4> <p>'React'</p>, <p>'Redux'</p>, <p>'Context API'</p>, <p>'Yup'</p>, <p>'Axios'</p>, <p>'Javascript'</p>, <p>'HTML'</p>, <p>'CSS'</p>, <p>'Three.js'</p>, <p>'Ant Design'</p> <h4>]</h4><h3>,</h3>
                        </div>
                        <br/>
                        <div className='skills-inner'>
                            <div className='skills-title'>Back-end :</div>  <h4>[</h4> <p>'Node.js'</p>, <p>'Express'</p>, <p>'REST'</p>, <p>'Postman'</p>, <p>'Heroku'</p>, <p>'Helmet'</p>, <p>'CORS'</p>, <p>'SQL'</p>, <p>'Knex'</p>, <p>'bcrypt.js'</p>, <p>'JWT'</p>, <p>'Jest'</p><h4>]</h4>
                        </div>
                    </div>
                    <h2>{'}'}</h2>
                </div>:null}
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        skillsState: state.skillsState
    }
}

export default connect(mapStateToProps, {showSkills})(Header)