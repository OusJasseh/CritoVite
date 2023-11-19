import React from 'react'
import './Projects.css'
import HeadLine from '../../Components/HeadLine/HeadLine'
import growth from '@Images/growth.jpg'
import responsive from '@Images/responsive.jpg'
import educate from '@Images/educate.jpg'
import insight from '@Images/insight.jpg'
import Button from '../../Button/Buttons'

function Projects() {
  return (
    <div className='Projects'>
        <div className='ProjectHeader'>
            <HeadLine title='Project & Case Studies' description='Let’s Looks Our Global Projects'/>
        </div>
        <div className='CaseStudies'>
            <div className='Cases'>
                <img src={growth} alt='Grow your Business' />
                <HeadLine title='Grow Your Business' />
                <Button type='transparent' title ='Read More' />
            </div>
            <div className='Cases'>
            <img src={responsive} alt='Grow your Business' />
                <HeadLine title='Why your client needs a responsive website' />
                <Button type='transparent' title ='Read More' />
            </div>
            <div className='Cases'>
            <img src={educate} alt='Grow your Business' />
                <HeadLine title='Educate your employees to get better results' />
                <Button type='transparent' title ='Read More' />
            </div>
            <div className='Cases'>
            <img src={insight} alt='Grow your Business' />
                <HeadLine title='Business Insights is a important piece of your business' />
                <Button type='transparent' title ='Read More' />
            </div>
        </div>
        <div className='ProjectButton'>
            <Button  type='dark' title='All Recent Projects' />
        </div >
        
    </div>
  )
}

export default Projects