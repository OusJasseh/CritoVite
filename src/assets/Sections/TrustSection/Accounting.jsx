import React from 'react'
import './Accounting.css'
import Button from '@assets/Button/Buttons'
import Rating from './Ratings/Rating'
import Icon_1 from '@Images/Icon_1.png'
import Icon from '@Images/Icon.png'
import Icon_2 from '@Images/Icon_2.png'
import Icon_3 from '@Images/Icon_3.png'








function Accounting() {
  return (
    <section className='TrustSection'>
        <div className='TrustBox'>
            <h6>Features</h6>
            <h1>Our Accounting is trusted by thousand of companies</h1>
                <Button title='Learn More' type='yellow' />
        </div>
        <div className='Trusts'>
        <div className='TrustRatings'>
            <img src={Icon_1} alt='' />
            <Rating  title='Business Advice'description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'  />
        </div>
        <div className='TrustRatings'>
            <img src={Icon} alt='' />
            <Rating  title='Startup Business'description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'  />
        </div>
        <div className='TrustRatings'>
            <img src={Icon_2} alt='' />
            <Rating  title='Financial Advice'description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'  />
        </div>
        <div className='TrustRatings'>
            <img src={Icon_3} alt='' />
            <Rating  title='Risk Management'description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'  />
        </div>

        </div>
        
        
        
    </section>
  )
}

export default Accounting