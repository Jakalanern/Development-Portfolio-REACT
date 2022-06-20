import React, { useEffect } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import Particles from 'particlesjs'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  window.dispatchEvent(new Event('resize'))

  // useEffect(() => {
  //   Particles.init({
  //     selector: '.background',
  //     color: '#7f7f7f',
  //     speed: '.15',
  //     connectParticles: true,
  //     maxParticles: 150,
  //     minDistance: 200,
  //     zIndex: '-1',
  //     breakpoint: 999999,
  //     responsive: [
  //       {
  //         breakpoint: 2000,
  //         options: {
  //           maxParticles: 85,
  //         },
  //       },
  //       {
  //         breakpoint: 1200,
  //         options: {
  //           maxParticles: 75,
  //         },
  //       },
  //       {
  //         breakpoint: 850,
  //         options: {
  //           maxParticles: 40,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         options: {
  //           maxParticles: 30,
  //         },
  //       },
  //       {
  //         breakpoint: 320,
  //         options: {
  //           maxParticles: 0,
  //         },
  //       },
  //     ],
  //   })
  // })

  return (
    <div className='App'>
      <Router>
        <Nav></Nav>
        <AnimatedRoutes></AnimatedRoutes>
        <canvas className='background'></canvas>
      </Router>
    </div>
  )
}

export default App
