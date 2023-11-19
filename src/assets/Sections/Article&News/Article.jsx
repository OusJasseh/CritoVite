import React from 'react'
import './article.css'
import HeadLine from '../../Components/HeadLine/HeadLine'
import Buttons from '../../Button/Buttons'
import article1 from '@Images/article1.jpg'
import article2 from '@Images/article2.jpg'
import article3 from '@Images/article3.jpg'


function Article() {
  return (
    <div className='articleNews'>
            <div className='articleHeader'>
                <HeadLine title='Article & News' description='Get Every Single Articles & News' />
                <div className='articleButton'>
                    <Buttons title='Browse Articles' type='transparent' />
                </div>
            </div>
            <div className='articles'>
                <div className='news'>
                    <img src={article1} alt='' />
                    <div className='newsHeader'>
                        <HeadLine title='Business' description='How To Use Digitalization In The Classroom'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                <div className='news'>
                    <img src={article2} alt='' />
                    <div className='newsHeader'>
                        <HeadLine title='Business' description='How To Implement Chat GPT In Your Projects'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                <div className='news'>
                    <img src={article3} alt='' />
                    <div className='newsHeader'>
                        <HeadLine title='Business' description='The Guide To Support Modern CSS Design'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
            </div>
            
            
    </div>
  )
}

export default Article