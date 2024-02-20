import React from 'react'
import "../styles/footer.css"
const Footer = () => {
  return (
    <div>
      <div className='footer'>
      <p>See Personalized recommendations</p>
      <button className='first-button'>Sign in</button>
      <p>New customer ?<span><a href='#' className='text-decoration-none'>Start here</a></span></p>
      </div>
      <hr></hr>
      <div>
        <button className='container-fluid' onClick={() => window.scrollTo(0,0)}>Back to top</button>
      </div>
    </div>
  )
}

export default Footer
