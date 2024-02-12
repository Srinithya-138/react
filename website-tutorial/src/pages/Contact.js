import React from 'react'
// import pizzaLeft from '../assets/pizzaLeft.jpg';
import pizzaLeft from '../assets/pizzaLeft.jpg'
import "../styles/Contact.css"
const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'
       style={{ backgroundImage: `url(${pizzaLeft})` }}>
        {/* <img className='leftSide' src={pizzaLeft}></img> */}
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>
        <form id="Contact-form" method="POST">
          <label htmlFor='name'for>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'/>
          <label htmlFor='name'for>Email</label>
          <input name='email' placeholder='Enter email..' type='text'/>
          <label htmlFor='messafe'for>Message</label>
          <textarea rows="6" 
          placeholder='Enter message'
          name='message'
          required
          >
          </textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
