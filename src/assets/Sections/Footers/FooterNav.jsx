import React from 'react'
import './Footer.css'

function FooterNav({title, links, links1, links2, links3}) {
  return (
    <div className='FooterNav'>
        <h1 className='footerHeader'>{title}</h1>
        <p className='FooterLinks'>{links}</p>
        <p className='FooterLinks'>{links1}</p>
        <p className='FooterLinks'>{links2}</p>
        <p className='FooterLinks'>{links3}</p>
    </div>
  )
}

export default FooterNav