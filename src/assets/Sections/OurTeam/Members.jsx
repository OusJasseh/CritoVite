import React from 'react'
import'./OurTeam.css'

function Members({title, description}) {
  return (
    <div className='Members'>
            <div className='fullName'>{title}</div>
            <div className='occupation'>{description}</div>
    </div>
  )
}

export default Members