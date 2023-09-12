import React, {useState, useEffect} from 'react'
import '../App.css'
import logo from '../assets/logo.png'
import sq from '../assets/squirel.png'
import {HiMenu} from 'react-icons/hi'
import {HiMenuAlt1} from 'react-icons/hi'
import {HiMenuAlt2} from 'react-icons/hi'
import {HiMenuAlt3} from 'react-icons/hi'
import {HiMenuAlt4} from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Navbar() {

  useEffect(() => {
    var body = document.querySelector(".body")
    var bod = document.querySelector(".navb .lists .divs")
    var divs = document.querySelectorAll(".navb .lists .divs .one")
    let activebox = document.createElement('div')
    activebox.classList.add('hello')

const active = (e) => {
  bod.appendChild(activebox)
  let divx = e.target.getBoundingClientRect().x
  let divy = e.target.getBoundingClientRect().y
  activebox.style.left = `calc((100%))`
  activebox.style.top = `100%`
}
//divs[0].onmouseenter = () => active
divs[0].addEventListener('mouseenter', (e) => {
  bod.appendChild(activebox)
  let divx = e.target.getBoundingClientRect().x
  let divy = e.target.getBoundingClientRect().y
  activebox.style.left = `calc((100% / 3))`
  activebox.style.top = `100%`
})
divs[1].addEventListener('mouseenter', (e) => {
  bod.appendChild(activebox)
  let divx = e.target.getBoundingClientRect().x
  let divy = e.target.getBoundingClientRect().y
  activebox.style.left = `calc((100% / 3 * 2))`
  activebox.style.top = `100%`
})
divs[2].addEventListener('mouseenter', (e) => {
  bod.appendChild(activebox)
  let divx = e.target.getBoundingClientRect().x
  let divy = e.target.getBoundingClientRect().y
  activebox.style.left = `calc((100%))`
  activebox.style.top = `100%`
})
   
  })
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
 

    const [menu, setMenu] = useState(false)

  return (
    <div className='navb content'>
      <div className="brandLogo">
        <img src={sq} alt="" />
      </div>
      <div className="lists">
        <ul className="items divs">
            <li className='one'><Link to={'/Squirrel/'}>Home</Link></li>
            <li className='one'><Link to={'/Squirrel/pricing'}>Pricing</Link></li>
            <li className='one'><Link to={'/Squirrel/contact-us'}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="forms">
        <div className="signUp"><Link to={'/Squirrel/sign-up'}>Sign Up</Link></div>
        <div className="login">Log in</div>
      </div>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <div className="bars"><HiMenuAlt2 /></div>
      </div>
      {menu ? <div className='nsm'>
        <ul className="lsm">
            <li><Link onClick={() => setMenu(false)} to={'/Squirrel/'} content='Home'>Home</Link></li>
            <li><Link onClick={() => setMenu(false)} to={'/Squirrel/pricing'} content='Pricing'>Pricing</Link></li>
            <li><Link onClick={() => setMenu(false)} to={'/Squirrel/contact-us'}>Contact Us</Link></li>
            <li><Link onClick={() => setMenu(false)} to={'/Squirrel/sign-up'}>Sign In</Link></li>
            <li><Link onClick={() => setMenu(false)} to={'/Squirrel/'}>Log in</Link></li>
        </ul>
      </div> : ''}
    </div>

  )
  
}

export default Navbar
