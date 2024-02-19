import React from 'react'

const Content = ({image,name,price}) => {
  return (
    <div>
      <div className='menuItem'>
      <div style={{background:`url(${image})`}}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
    </div>
  )
}

export default Content
