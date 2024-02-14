import React from 'react'
import { navigate, useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate=useNavigate()
    const nextPage=()=>{
        navigate("/expense-tracker")
    }
   
  return (
    <div className='login-page'>
      <p>Sign In With Google</p>
      <button className='login-with-google ' onClick={nextPage}>Click to Sign In </button>
    </div>
  )
}

export default Auth
