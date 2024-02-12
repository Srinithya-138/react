import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import  Facebook from '@mui/icons-material/Facebook'
// import LinkedIn from '@mui/icons-material/LinkedIn '

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {/* {" "} */}
            <Instagram/><Twitter/><Facebook/> 
        </div>
        <p>&copy;2024 pizzacorner.com</p>
      
    </div>
  )
}

export default Footer
