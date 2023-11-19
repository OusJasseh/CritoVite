import React from 'react'
import './OurServices.css'
import ServiceBox from './ServiceBox/ServiceBox'
import HeadLine from '../../Components/HeadLine/HeadLine'
import Button from '@assets/Button/Buttons'

function OurServices() {
  return (
    <div className='Service'>
      <div className='HeadLine'>
          < HeadLine title='Our Service' description='We Provide The Best Service For Consulting'/>
      </div>
      <div className='serviceBox'>
            <ServiceBox title='Business Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
            <ServiceBox title='Startup Business' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
            <ServiceBox title='Financial Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
            <ServiceBox title='Risk Management' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'/>
        </div>
        <div className='OurServiceBtn'>
          < Button type='transparent' title='Browse Services'/>
        </div>
        
    </div>
  )
}

export default OurServices