import React from 'react'
import  MultiplePizzas from '../assets/multiplePizzas.jpeg'
import "../styles/About.css"

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us </h1>
        <p> This is a pizza about page  </p>
      </div>
      
    </div>
  )
}

export default About
