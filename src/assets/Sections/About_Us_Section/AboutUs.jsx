import React from 'react'
import './AboutUs.css'
import CEO from '@Images/ceo.jpg'
import Button from '@assets/Button/Buttons'


function AboutUs() {
  return (
    <section className='AboutUs'>
        <div className='CeoImg'>
            <img src={CEO} alt='CEO' />
            <div className='ceoInfo'>
                <div className='ceo'>
                    <h1>Samantha Brown, </h1> 
                    <p className='Founder'>Founder</p>
                </div>
                <div className='Lourem-ceo'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
        <div className='AboutCompany'>
              <h1>About Company</h1>
              <p>We Are Business Consulting & Credit Repair Experts</p>
              <p className='Lourem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <Button title='Learn More' type='dark' />
                
        </div>
        <i className="fa-regular fa-circle-play fa-2xl"></i>
        
    </section>
  )
}

export default AboutUs