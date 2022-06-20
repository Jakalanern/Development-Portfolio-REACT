import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  function scrollToTop() {
    document.querySelector('body').scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='Nav'>
      <Link className='Link' to='/'>
        <h1 onClick={scrollToTop}>JS</h1>
      </Link>
      <section>
        <Link className='Link' to='/projects'>
          <span onClick={scrollToTop}>Projects</span>
        </Link>
        <Link className='Link' to='/about'>
          <span onClick={scrollToTop}>About</span>
        </Link>

        <Link className='Link' to='/contact'>
          <span onClick={scrollToTop}>Contact</span>
        </Link>
      </section>
    </div>
  )
}

export default Nav
