import React from 'react'
import FooterLogo from '@Images/Logotype-white.svg'
import './Footer.css'
import './FooterNav'
import FooterNav from './FooterNav'

function Footer() {
  return (
    
        <div className="footerInfo">
                <div className="footerLogo">
                    <img src= {FooterLogo} alt='CompanyLogo' />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
            <div className='FooterNavContainer'>
                  <FooterNav title='Company' links='About' links1='Features' links2='Works' links3='Carrier ' />
                  <FooterNav title='Help' links='Customer Support'  links1='Delivery Details' links2='Terms & Conditions' links3='Privacy Policy'/>
                  <FooterNav title='Resources' links='Free eBooks' links1='Development Tutorial' links2='How to - Blog' links3='Youtube Playlist'/>
                  <FooterNav title='Link' links='Free eBooks' links1='Development Tutorial' links2='How to - Blog' links3='Youtube Playlist'/>
            </div>
               
                
               
                
        </div>
    
  )
}

export default Footer