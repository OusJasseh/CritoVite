import React from 'react'
import './SignUp.css'
import HeadLine from '../../Components/HeadLine/HeadLine'
import Buttons from '../../Button/Buttons'

function SignUp() {
  return (
    <div className='signup'>
        <HeadLine description='Get News Updates By Signup '/>
        <span>username@domain.com</span>
        <div className='signupBtn'>
            <Buttons title='Subscribe' type='yellow' />
        </div>
        

    </div>
  )
}

export default SignUp