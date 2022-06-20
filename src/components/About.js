import React from 'react'
import Typed from 'react-typed'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      className='About'
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <Typed
        className='title'
        strings={['About Me:']}
        typeSpeed={100}
        // backSpeed={45}
        // loop
      />
      <div className='about-contents'>
        <div className='skills-box'>
          <span className='my-skills'>MY SKILLS:</span> <br />
          <span className='skills'>
            HTML / CSS / JAVASCRIPT / REACT / BOOTSTRAP / SASS / GIT / FIGMA / ADOBE XD / PHOTOSHOP
            / ILLUSTRATOR
          </span>
        </div>

        <h1>
          Hello! I'm <span className='my-name'>Jack Stevens</span>.
        </h1>
        <h2>A driven, multi-talented, self-directed Web Developer.</h2>
        <p className='desc'>
          When I first discovered Web Development, I absolutely fell in love. The problems to solve,
          the potential to become more efficient, the challenges in both layout and structure, all
          of it drew me in immediately. Not only that but the better I become as a Web Developer the
          more I notice that I continue to love this field even more. I'm super passionate about
          this skillset and I hope that every day I can continue to get better. <br />
          <br /> Ever since I was young, around 5 or so, my family and friends would always tell me
          I had a knack for completing puzzles and solving problems. I was definitely born with an
          analytical brain, and it's clear to me that the itch I have to solve problems only gets
          stronger the older I get.
          <br />
          <br /> Web Development is an absolutely perfect fit for me because every day I get to
          solve something new, complete a new puzzle, and answer unanswered questions. I simply feel
          at home when I'm doing this work. But I'm not just a thinker. I have always had a creative
          side as well, and Web Development has allowed me to fuel that side of myself everyday. I
          really can't imagine myself doing anything else.
          <span className='fun-fact'>
            FUN FACT: I have over 10 years of experience as a Portrait Artist! I love to do both
            digital and traditional painting, sketching, and designing. I've also worked as a Lead
            Caricature Artist, Apprentice Tattoo Artist, and as a Freelance Graphic Designer! I love
            how as an artist it feels like you never stop learning. I believe this side of my
            skillset makes me a better developer because I have a trained eye for design,
            functionality, and appeal.
          </span>
        </p>
      </div>
    </motion.div>
  )
}

export default About
