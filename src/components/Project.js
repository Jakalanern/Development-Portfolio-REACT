import React from 'react'
import githubIcon from '../icons/github.png'
import demoIcon from '../icons/play.png'
// import { AnimationOnScroll } from 'react-animation-on-scroll'

const Project = ({ title, desc, img, type, code, demo }) => {
  return (
    <section className='project'>
      <div className='project-desc desc'>
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <div className='project-buttons'>
          <button
            onClick={() => {
              window.open(code)
            }}>
            Code
          </button>
          <button
            onClick={() => {
              if (demo !== '') {
                window.open(demo)
              }
            }}
            style={demo === '' ? { color: 'gray', cursor: 'default', hover: 'false' } : {}}>
            Demo
          </button>
        </div>
      </div>
      <div className='image-container'>
        <img className='project-image' src={img} alt='' />
        {code ? (
          <div className='overlay'>
            <h4>Code:</h4>
            <img
              className='icon'
              src={githubIcon}
              alt=''
              onClick={() => {
                window.open(code)
              }}
            />
            <h4>Demo:</h4>
            <img
              className='icon'
              src={demoIcon}
              alt=''
              onClick={() => {
                if (demo !== '') {
                  window.open(demo)
                }
              }}
            />
          </div>
        ) : (
          <div className='overlay'>
            <h4>Demo:</h4>
            <img
              className='icon'
              src={demoIcon}
              alt=''
              onClick={() => {
                if (demo !== '') {
                  window.open(demo)
                }
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Project
