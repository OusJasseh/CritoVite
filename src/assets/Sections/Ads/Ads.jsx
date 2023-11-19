
import React from 'react'
import './ads.css'
import paperz from '@Images/paperz.svg'
import dorfus from '@Images/dorfus.svg'
import martino from '@Images/dorfus.svg'
import square from '@Images/square.svg'
import gobona from '@Images/gobona.svg'

function Ads() {
  return (
    <section className='Ads'>
        <img className='AdImage' src={paperz} alt='Add Image' />
        <img className='AdImage' src={dorfus} alt='Add Image' />
        <img className='AdImage' src={martino} alt='Add Image' />
        <img className='AdImage' src={square} alt='Add Image' />
        <img className='AdImage' src={gobona} alt='Add Image' />
    </section>
  )
}

export default Ads