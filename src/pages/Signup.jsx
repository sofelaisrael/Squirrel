import React from 'react'
import casual from '../assets/casual.png'
import '../styles/signup.css'

function Signup() {
  return (
    <div className='signup'>
      <div className="sign1">
        <div className="signhead">Sign Up</div>
        <div className="signcont">Give Us Some Information To Get Free Access To Squirrel</div>
        <div className="sign">
            <div className="to">Full Name</div>
            <div className="inp">
                <input type="text" placeholder='Enter Your Full Name' />
            </div>
        </div>
        <div className="sign">
            <div className="to">Email</div>
            <div className="inp">
                <input type="email" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className="sign">
            <div className="to">Phone Number</div>
            <div className="inp">
                <input type="text" placeholder='Enter Your Phone No.' />
            </div>
        </div>
        <div className="create">
            By Creating An Account You Agree To The <span>Terms Of Use</span> And Our <span>Privacy policy</span>
        </div>
        <div className="signbtn">
            Sign Up
        </div>
        <div className="have">
            Already Have An Account? <span>Log In</span>
        </div>
      </div>
      <div className="sign2">
        <img src={casual} alt="" />
      </div>
    </div>
  )
}

export default Signup
