
import React from 'react'
import './footer.css'
import {union,github} from "../../assets"
const Footer = () => {
  return (
    <>
      <div className="app__footer section__padding">
        <div className="app__footer-box">
        <div className="app__footer1-box">
      <div className="app__footer1">
      <div className='app__footer-logo'>
      <img src={union} alt="logo" className="union"/>
      <h5>Qassim Rufai</h5>
      </div>
      <span>rufaiqassim@gmail.com</span>
      </div>
      <p>Front-end developer</p>
    </div>
    <div className="app__footer2-box">
      <h5>Media</h5>
      <a href="https://github.com/AL-QAS?tab=repositories" target='blank'><img src={github}/></a>
    </div>
    </div>
    <p>© Copyright 2024. Made by Qassim Rufai</p>
      </div>
    </>
  )
}

export default Footer
