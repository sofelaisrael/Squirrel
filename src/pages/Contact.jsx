import React, { useEffect } from 'react'
import '../styles/contact.css'
import circles from '../assets/3circle.png'
import Footer from '../components/Footer'

function Contact() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('setu')
                } else {
                    entry.target.classList.remove('setu')
                }
            })
        })
        const hidden = document.querySelectorAll('.down')
        
        for (let i = 0; i < hidden.length; i++) {
            const element = hidden[i];
            observer.observe(element)
        }
       }, [])
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })
        const hidden = document.querySelectorAll('.hidde')
        
        for (let i = 0; i < hidden.length; i++) {
            const element = hidden[i];
            observer.observe(element)
        }
       }, [])
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showing')
                } else {
                    entry.target.classList.remove('showing')
                }
            })
        })
        const hidden = document.querySelectorAll('.hidden')
        
        for (let i = 0; i < hidden.length; i++) {
            const element = hidden[i];
            observer.observe(element)
        }
       }, [])
  return (
    <div className='contact'>
      <div className="main1">
        <span className="explore hidden">Explore How Squirrel Can Work For You</span>
        <span className="touch hidde">Get In Touch With Us Today</span>
        <span className="office hidden">Our Office</span>
        <div className="details">
            <div className="detailimg">
                <img src={circles} alt="" />
            </div>
            <div className="detailcont down">
                <div className="add">
                    <div className="addtitle">Address</div>
                    <div className="addcont">891 Glen Ridge St. Gainsville, VA 20155</div>
                </div>
                <div className="add">
                    <div className="addtitle">Office Phone</div>
                    <div className="addcont">(+33)7 00 55 54 79</div>
                </div>
                <div className="add">
                    <div className="addtitle">Email Address</div>
                    <div className="addcont">schroeder.ulices@yahoo.com</div>
                </div>
            </div>
        </div>
        <span className="support">Looking For Support? <span className="help">Visit Help And Support</span></span>
      </div>
      <div className="main2 down">
        <div className="items">
            <label htmlFor="" className="top">Full Name</label>
            <div className="inp">
                <input type="text" placeholder='Enter Your Full Name' />
            </div>
        </div>
        <div className="items">
            <label htmlFor="" className="top">Email</label>
            <div className="inp">
                <input type="text" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className="items">
            <label htmlFor="" className="top">Message</label>
            <div className="ta">
                <textarea cols="100%" rows="100%" placeholder='Enter Your Mesage here'></textarea>
            </div>
        </div>
        <div className="submit">Submit</div>
      </div>
    </div>
  )
}

export default Contact
