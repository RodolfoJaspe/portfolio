import React from 'react'
import "../styles/Header.css"

export default function Skills({focus}) {
  return (
    <div>{!focus?<div className='skills-container'>
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
</div>:null}</div>
  )
}
