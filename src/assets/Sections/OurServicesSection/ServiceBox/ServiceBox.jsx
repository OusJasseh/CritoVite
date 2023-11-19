import React from 'react'
import './ServiceBox.css'

function ServiceBox({title, description}) {
  return (
    <div className='Box'>
        <div className='BoxSize'>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='Arrow'>
                    <i className="fa-solid fa-arrow-right fa-lg"></i>
                </div>
                
        </div>
        
    </div>
  )
}

export default ServiceBox