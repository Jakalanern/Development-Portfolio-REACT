import React, { useState } from 'react'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import gitHubLogo from '../icons/github.png'
import linkedInLogo from '../icons/linkedin.png'

const Contact = () => {
  return (
    <motion.div
      className='Contact'
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <Typed
        className='title'
        strings={['Contact Me:']}
        typeSpeed={100}
        // backSpeed={45}
        // loop
      />

      <form
        action='https://formsubmit.co/jack.withers.stevens@gmail.com'
        method='POST'
        encType='multipart/form-data'>
        <div className='first-last-name'>
          <div className='first-name'>
            <label>First Name</label>
            <input type='text' name='first-name' />
          </div>
          <div className='last-name'>
            <label>Last Name</label>
            <input type='text' name='last-name' />
          </div>
        </div>
        <label>Email</label>
        <input type='email' name='email' />
        <label>Message</label>
        <textarea name='message' cols='30' rows='10'></textarea>
        <button className='send-btn'>Submit</button>
      </form>
      <div className='contact-links'>
        <img
          onClick={() => {
            window.open('https://www.github.com/Jakalanern')
          }}
          src={gitHubLogo}
          alt=''
        />
        <img
          onClick={() => {
            window.open('https://www.linkedin.com/in/jack-stevens-889121b1/')
          }}
          src={linkedInLogo}
          alt=''
        />
      </div>
    </motion.div>
  )
}

export default Contact
