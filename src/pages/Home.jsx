import React from 'react'

import '../styles/home.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Tools from '../components/ToolGroup'
import WorkFlow from '../components/WorkFlow'
import Task from '../components/Task'

function Home() {
  return (
    <div>
      <Header />
      <Tools />
      <WorkFlow />
      <Task />
      <Footer />
    </div>
  )
}

export default Home
