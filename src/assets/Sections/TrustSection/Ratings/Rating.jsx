import React from 'react'
import './rating.css'

function Rating({ title, description}) {
  return (
    <div className='Rating'>
        
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Rating