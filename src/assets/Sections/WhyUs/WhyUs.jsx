import React from 'react'
import './WhyUs.css'
import HeadLine from '../../Components/HeadLine/HeadLine'
import Logo_1 from '@Images/excellence.png'
import Logo_2 from '@Images/logo2.svg'
import Logo_3 from '@Images/strategicplan.png'
import Logo_4 from '@Images/head.png'
import Ladies from '@Images/ladies.jpg'

function WhyUs() {
  return (
    <div className='WhyUs'>
        <div className='TheBest'>
            <HeadLine title='Why Choose Us' description='Why We Are The Best Business Consulting Agency'/>
            <div className='Strategy'>
                <div className='strategicBox'>
                    
                        <div className='Strategic-Img'>
                            <img src={Logo_1} alt='#' />
                                <HeadLine title='Process Excellence' description='Lorem, ipsum dolor sit amet consectetur.'/>
                        </div>
                        <div className='Strategic-Img'>
                            <img src={Logo_2} alt='#' />
                                <HeadLine title='Strategic Planning' description='Lorem, ipsum dolor sit amet consectetur.'/>
                        </div>
                        <div className='Strategic-Img'>
                            <img src={Logo_3} alt='#' />
                                <HeadLine title='Experience Design' description='Lorem, ipsum dolor sit amet consectetur.'/>
                        </div>
                        <div className='Strategic-Img'>
                            <img src={Logo_4} alt='#' />
                                <HeadLine title='Artificial Inteligence' description='Lorem, ipsum dolor sit amet consectetur.'/>
                        </div>
                        
                        
                   
                </div>
            </div>
        </div>
        <div className='TwoLadies'>
            <img src={Ladies} alt='Ladies' />
        </div>
       
    </div>
  )
}

export default WhyUs