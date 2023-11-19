import React from 'react'
import './OurTeam.css'
import HeadLine from '../../Components/HeadLine/HeadLine'
import Buttons from '../../Button/Buttons'
import Members from './Members'
import member1 from '@Images/Member1.jpg'
import member2 from '@Images/mark.jpg'
import member3 from '@Images/Kimbereley.jpg'
import member4 from '@Images/justin.jpg'
import cassandra from '@Images/cassandra.jpg'
import amanda from '@Images/Amanda.jpg'
import Jack from '@Images/Jack.jpg'

function OurTeam() {
  return (
    <div className='Team-Members'>
        <div className='ourTeam'>
            <div className='Team-Headline'>
                <HeadLine title='Meet our team' description='Experience Team Members' />
                <Buttons title='Browse Team' type='transparent' />
            </div>
        </div>
        <div className='OurMembers'>
                
                <div className='member1'>
                        <img src={member1} alt='member' />
                        <Members title='Kristine Palmer' description='Chef Operation Officer' />
                </div>
           
            <div className='member1'>
            <img src={member2} alt='member' />
                <Members title='Mark Aubri' description='Senior Consultant' />
            </div>

              <div className='member1'>
                    <img src={member3} alt='member' />
                    <Members title='Kimberly Hansen' description='Senior Consultant' />
            </div>
            
            <div className='member1'>
                <img src={member4} alt='member' />
                <Members title='Justin Willoman' description='Senior Tech Consultant' />
            </div>  
           
            
            
                
            

        </div>
        <div className='clientRating'>
            <div className='RatingHeader'>
                    <HeadLine title='Testimonial' description='What Our Client Says' />
            </div>
            <div className='FeedbackRatings'>
            <div className='Ratings'>
                <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className='RatingBio'>
                    <div>
                         <img src={cassandra} alt="" />
                    </div>
                        <HeadLine title='Cassandra Warren' description='Business Manager, Dorfus' />
                    </div>
            </div>
            <div className='Ratings'>
                <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className='RatingBio'>
                    <div>
                         <img src={amanda} alt="" />
                    </div>
                        <HeadLine title='Amanda Tulling' description='Senior Developer, Square' />
                    </div>
            </div>
            <div className='Ratings'>
                <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className='RatingBio'>
                    <div>
                         <img src={Jack} alt="" />
                    </div>
                        <HeadLine title='Jack McDogglas' description='Key Account Manager, Gobona' />
                    </div>
            </div>
            </div>
                <Buttons title='All Reviews' type='dark'/>
            
        </div>
        </div>

  
  )
}

export default OurTeam