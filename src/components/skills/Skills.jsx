import React from 'react'
import {skillImg} from "../../assets"
import { skills } from "../../constants"
import './skills.css'
const Skills = () => {
  return (
    <>
     <div className="app__skills section__padding">
     <div className="app__header-component">
          <h3 id="works"><span>#</span>Skills</h3>
          <div className="app__header-component_dash"/>
        </div>
        <div className="app__skills-container">
          <div className="app__skills-container_img">
          <img src={skillImg} alt="imgae" />
          </div>
          <div className="app__skills-container_content">
            {skills.map((skill,i)=>(
              <div key={skill.id}><p>{skill.name1}</p> <p>{skill.name2}</p></div>
            ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default Skills
