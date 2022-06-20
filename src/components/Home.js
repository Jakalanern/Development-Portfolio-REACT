import React from 'react'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.div
      className='Home'
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className='intro'>
        <div className='name'>
          <h1>Hi,</h1>
          <h1>I'm Jack Stevens.</h1>
          <Typed
            className='typed typed-main'
            strings={['Web Developer in Orange County, California']}
            typeSpeed={60}
            // backSpeed={45}
            // loop
          />
          <div className='home-buttons'>
            <Link className='Link' to='/projects'>
              <button>Projects</button>
            </Link>
            <Link className='Link' to='/about'>
              <button>About</button>
            </Link>
            <Link className='Link' to='/contact'>
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
