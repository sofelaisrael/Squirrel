import React, {useEffect} from 'react'
import Tools from './Tools'
import young from '../assets/young.png'

function ToolGroup() {
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
  return (
    <div className='cas'>
        <div className="young hidden">
            <img src={young} alt="" />
        </div>
        <div className="too">
            <span className='title right'>One Tool For Your Whole Company</span>
            <Tools />
        </div>
    </div>
  )
}

export default ToolGroup
