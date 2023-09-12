import React, {useEffect} from 'react'
import casual from '../assets/casual.png'

function Header() {
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
    <div className='grid'>
      <div className="gridText">
        <div className="get title hidde">
            Get Aligned Around Your Goals
        </div>
        <div className="sub other hidde">
        From roadmaps to workflows, power team collaboration and move work forward with the #1 project management tool used by agile teams.
        </div>
        <div className="find other">
            <span>Find Out More</span>
        </div>
      </div>
      <div className="gridImage hidden">
        <img src={casual} alt="" />
      </div>
    </div>
  )
}

export default Header
