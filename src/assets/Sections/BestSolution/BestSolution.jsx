import React from 'react'
import './BestSolution.css'
import Buttons from '@assets/Button/Buttons'
import BakgroundImage from '@Images/background-lines.svg'
import ShowCaseImg from '@Images/showcase-image.svg'

const BestSolution = () => {
  return (
    
       <div className='BestSolutions'>
        <div className='SolutionIntro'>
            
        <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div>
                <Buttons className='ConsultingBtn' title='Get Consulting' type='yellow' url='/Services' />
                </div>
                <div className='LearnMore'>
                <Buttons  title='Learn More' type='transparent' url='/Services' />
                </div>
                <img  src={BakgroundImage} alt='Bakground Image'/>  
        </div>
        <div className='BestSolutionImg'>
            <img src={ShowCaseImg} alt="ShowCase" />
        </div>
    </div> 
    
    
    
  )
}

export default BestSolution