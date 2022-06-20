import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Project from './Project'
import Typed from 'react-typed'
import data from '../data/projectData'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [projects, setProjects] = useState(data)

  function filterAll() {
    setProjects(data)
  }

  function filterApps() {
    setProjects(data)
    const appProjects = data.filter((proj) => proj.type === 'App')
    setProjects(appProjects)
  }

  function filterGames() {
    setProjects(data)
    const gameProjects = data.filter((proj) => proj.type === 'Game')
    setProjects(gameProjects)
  }

  function filterUtilities() {
    setProjects(data)
    const utilityProjects = data.filter((proj) => proj.type === 'Utility')
    setProjects(utilityProjects)
  }

  function filterPortfolios() {
    setProjects(data)
    const portfolioProjects = data.filter((proj) => proj.type === 'Portfolio')
    setProjects(portfolioProjects)
  }

  function scrollToTop() {
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      className='Projects'
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <Typed
        className='title'
        strings={['My Projects:']}
        typeSpeed={100}
        // backSpeed={45}
        // loop
      />
      {
        <div className='scroll-to-top' onClick={scrollToTop}>
          Scroll To Top
        </div>
      }
      <div className='filter-buttons'>
        <button onClick={filterAll}>All Projects</button>
        <button onClick={filterPortfolios}>Portfolios</button>
        <button onClick={filterGames}>Games</button>
        <button onClick={filterUtilities}>Utilities</button>
        <button onClick={filterApps}>Apps</button>
      </div>
      {projects.map((item) => (
        <Project
          title={item.title}
          desc={item.desc}
          img={item.img}
          type={item.type}
          code={item.code}
          demo={item.demo}
          key={item.id}></Project>
      ))}
    </motion.div>
  )
}

export default Projects
