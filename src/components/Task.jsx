import React, {useEffect} from 'react'
import logo from '../assets/logo.png'
import init from '../assets/init.png'
import circles from '../assets/3circles.png'
import phone from '../assets/phone.png'
import redbox from '../assets/redbox.png'
import Carousel from './Carousel'

function Task() {
    {/* from left anmation */}
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
  {/* opacity anmation */}
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
  {/* from down anmation */}
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
  {/* from right anmation */}
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('setr')
            } else {
                entry.target.classList.remove('setr')
            }
        })
    })
    const hidden = document.querySelectorAll('.right')
    
    for (let i = 0; i < hidden.length; i++) {
        const element = hidden[i];
        observer.observe(element)
    }
   }, [])
  return (
    <div className='task'>
        <div className="manage">
            <div className="side1">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="tm hidde">
                    Task Management With Squirrel
                </div>
                <div className="space hidde">
                    One Work Space, Every Team
                </div>
                <div className="find">
                    Find Out More
                </div>
            </div>
            <div className="side2">
                <div className="circles">
                    <img src={circles} alt="" />
                </div>
                <div className="ctexts">
                    <div className="c1 down">
                        <div className="c1title title">
                            Project Planning Software For Everyone
                        </div>
                        <div className="c1cont content">
                        Connect your teams, projects, and docs in Notion — so you can bust silos and move as one.
                        </div>
                    </div>
                    <div className="c1 down">
                        <div className="c1title title">
                        Management Software for an Agile Future
                        </div>
                        <div className="c1cont content">
                        Choose from thousands of free, pre-built setups — for work and life.
                        </div>
                    </div>
                    <div className="c1 down">
                        <div className="c1title title">
                        Collaborate
                        </div>
                        <div className="c1cont content">
                        Squirel solves problems common and unique to every team. These are just a few.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="integrate">
        <div className="int1 hidden">
            <img src={init} alt="" />
        </div>
        <div className="int2">
            <div className="title right">
            Integrate with the apps you already use
            </div>
            <div className="content down">
            Access FreshBooks Classic, FreshBooks, QuickBooks, Google Calendar, iCal, Box, Dropbox, Google Drive, OneDrive and Outlook, bringing them all together within ProofHub.
            </div>
        </div>
      </div>
      <div className="unique">
        <div className="uni1 hidde">
            <div className="titl">
            Built for endless uses.
 Across all teams.<br />
Squirrel solves problems common and unique to every team.
            </div>
            <div className="conte">
                <div className="o1 down" id='01'>Build Together</div>
                <div className="o2 down" id='02'>Design Docs</div>
                <div className="o3 down" id='03'>Website Publishing</div>
            </div>
        </div>
        <div className="uni2 right">
            <img src={phone} alt="" />
        </div>
      </div>
      <div className="spon">
        <div className="spont">
            Used by the world's most innovative teams
        </div>
        <div className="sponc down">
            Squirrel Software has you covered - no matter where your team is in your agile journey
        </div>
      </div>
      <Carousel />
      <div className="build">
        <div className="next hidde">
            Build Whats Next<span className='py'><img src={redbox} alt="" /></span>
        </div>
        <div className="world down">
            Lets Make The World More Productive, Together
        </div>
        <div className="start">
            <div className="inp">
                <input type="email" placeholder='Enter Your Email Address'/>
            </div>
            <div className="inpbtn">
                Get Started
            </div>
        </div>
      </div>
    </div>
  )
}

export default Task
