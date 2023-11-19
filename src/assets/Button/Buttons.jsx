import React from 'react'
import './Buttons.css'
 

const Buttons = ({type, url, title}) => {
    
    const getButtonClassName = () => {
        
        switch(type) {
            case 'yellow':
                    return 'btn-yellow'
                   
        case 'dark':
            return 'btn-dark'
 
        case 'transparent':
            return 'btn-transparent'
           
        
        }
    }
  return (

        <button className={getButtonClassName()} href={url}>{title}<i className="fa-regular fa-arrow-up-right"></i></button> 

  )
}

export default Buttons
