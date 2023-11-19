import React from 'react'
import './HeadLine.css'

function HeadLine({title, description}) {
  return (
    <div className='HeadLiner'>
        <h6 className='headline_1'>{title}</h6>
        <h1 className='headline_2'>{description}</h1>
    </div>
  )
}

export default HeadLine