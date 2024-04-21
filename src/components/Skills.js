import React from 'react'
import "../styles/Header.css"
import IsometricText from './lib/IsometricText'

export default function Skills({focus}) {
  return (
    <div>{!focus?<div className='skills-container'>
    <IsometricText text={"Skills"} mainColor={"#0077b5"} sideColor={"#014367"} fontSize={"2em"}/>
    <h2>{'{'}</h2>
    <div className='skills-outer'>
        <div className='skills-inner'>
            <div className='skills-title'>front-end :</div>  <h4>[</h4> <p>'Next.js'</p>, <p>'React'</p>, <p>'Redux'</p>, <p>'Context API'</p>, <p>'Yup'</p>, <p>Zod</p>, <p>'Axios'</p>, <p>'Javascript'</p>, <p>'HTML'</p>, <p>'CSS'</p>, <p>'Taiwind CSS'</p>, <p>'Three.js'</p>, <p>'slick-carousel'</p>, <p>TypeScript</p>, <p>Resend</p>, <h4>]</h4><h3>,</h3>
        </div>
        <br/>
        <div className='skills-inner'>
            <div className='skills-title'>back-end :</div>  <h4>[</h4> <p>'Python'</p>, <p>'Node.js'</p>, <p>'Express'</p>, <p>'REST'</p>, <p>'Postman'</p>, <p>SEO and Metadata Management</p>, <p>'Heroku'</p>, <p>'Helmet'</p>, <p>'CORS'</p>, <p>'SQL'</p>, <p>'Knex'</p>, <p>'bcrypt'</p>, <p>'JWT'</p>, <p>'Jest'</p><h4>]</h4>
        </div>
    </div>
    <h2>{'}'}</h2>
</div>:null}</div>
  )
}
