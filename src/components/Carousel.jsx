import React from 'react'
import '../styles/home.css'
import donalds from '../assets/donalds.png'
import fedex from '../assets/fedex.png'
import bulb from '../assets/bulb.png'
import m from '../assets/m.png'
import outgood from '../assets/outgood.png'
import umbrella from '../assets/umbrella.png'
import w from '../assets/w.png'
import ob from '../assets/ob.png'
import diamond from '../assets/diamond.png'
import ddot from '../assets/ddot.png'

function Carousel(){
return (
       <div className="slides-container">
            <div className="slide-tracks">
                <div className="slide-images">
                    <img className='dimg' src={ddot} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={ob} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={bulb} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={outgood} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={diamond} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={donalds} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={umbrella} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={w} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={fedex} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={m} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={ddot} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={ob} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={bulb} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={outgood} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={diamond} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={donalds} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={umbrella} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={w} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={fedex} alt="" />
                </div>
                <div className="slide-images">
                    <img className='dimg' src={m} alt="" />
                </div>
            </div>
       </div>   
  )
}

export default Carousel
