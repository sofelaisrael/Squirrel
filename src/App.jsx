import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

function App() {
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
    <>
        
        <Navbar />
        <div id="co">
            <Outlet />
        </div>
        
    </>
  )

}

export default App
