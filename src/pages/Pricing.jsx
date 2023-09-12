import React, { useEffect, useState } from 'react'
import '../styles/pricing.css'
import Price from '../lists/priceFeatures'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import FAQ from '../lists/FAQLists'
import casual from '../assets/casual.png'
import Footer from '../components/Footer'
import Pro from '../lists/proFeatures'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io'
import Carousel from '../components/Carousel'

function Pricing() {
  const [drop, setDrop] = useState(false)
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
  return (
    <div className="co">
      <div className='pricing'>
      <div className="head">
        <div className="headtitle">Grab Our Exclusive Lifetime Deal</div>
        <div className="headcont">
          Say goodbye to monthly subscriptions. Instead of our regular $9 per user/per month pricing, we're offering a pay-one lifetime deal for a limited time only.
        </div>
      </div>
      <div className="cards">
        <div className="basic down">
          <div className="basictitle">Basic</div>
          <div className="basicline"></div>
          <div className="basicprice">$199</div>
          <div className="back">30-Day Money Back Guarantee</div>
          <div className="features">
            {Price.map(feat => {
              return(
                <span key={feat.id} className='check'><AiOutlineCheck className='ico'/>{feat.content}</span>
              )
            })}
            </div>
            <div className="buyb">Buy Basic</div>
        </div>
        <div className="pro down">
          <div className="protitle">Pro</div>
          <div className="proline"></div>
          <div className="proprice">$199</div>
          <div className="back">30-Day Money Back Guarantee</div>
          <div className="features">
            {Pro.map(feat => {
              return(
                <span key={feat.id} className='check'><AiOutlineCheck className='ico'/>{feat.content}</span>
              )
            })}
            </div>
            <div className="buyb">Buy Pro</div>
        </div>
      </div>
      <div className='grid'>
      <div className="gridText">
        <div className="get title hidde">
            One Tool For Your Whole Company
        </div>
        <div className="sub other hidde">
        From roadmaps to workflows, power team collaboration and move work forward with the #1 project management tool used by agile teams.
        </div>
      </div>
      <div className="gridImage hidden">
        <img src={casual} alt="" />
      </div>
    </div>
    <div className="number">
          <span>5,000+</span>  Companies Around The World Use Squirrel
    </div>
    <Carousel />
    <div className="FAQ">
      <div className="faqhead">Frequently Asked Questions</div>
      <div className="questions accordion accordion-flush" id='que'>
          {FAQ.map(ques => {
            return(
              <div key={ques.id} className="q accordion-item collapsed" data-bs-toggle='collapse' data-bs-target={`#ans${ques.id}`}>
                <div id={`acc${ques.id}`} className="que">
                  {ques.question} <div className="plus" onClick={() => {
                      console.log(ques.id)
                  }}><IoIosAddCircle /></div>
                </div>
                <div id={`ans${ques.id}`} aria-labelledby={`acc${ques.id}`} className="ans accordion-collapse collapse">{ques.content}</div>
                
              </div>
            )
          })}
      </div>
    </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default Pricing
