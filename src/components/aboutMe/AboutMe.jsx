
import React from 'react'
import {  headerpic2} from "../../assets"
import "./aboutMe.css"
const AboutMe = () => {
  return (
    <>
      <div className="app__aboutMe section__padding">
      <div className="app__header-component">
          <h3 id="about-me"><span>#</span>about-me</h3>
          <div className="app__header-component_dash"/>
        </div>
        <div className="app__aboutMe-container">
          <div className="app__aboutMe-container_content">
            <p>Hello,I'm Qassim</p>
            <p>Passionate front-end developer dedicated to creating visually appealing and highly functional web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React, I specialize in transforming ideas into dynamic, user-friendly websites. My focus on clean, efficient code and modern design principles ensures that every project meets the highest standards of quality and performance.</p>
            <p>Whether you're an employer looking to enhance your team's capabilities or a client seeking innovative web solutions, my commitment to delivering exceptional results is unwavering. I am eager to collaborate on impactful projects, providing tailored solutions to meet your unique needs. Let's work together to create a compelling online presence that sets you apart from the competition.
</p>
          </div>
          <div className="app__aboutMe-container_img">
            <img src={headerpic2} alt="image"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
