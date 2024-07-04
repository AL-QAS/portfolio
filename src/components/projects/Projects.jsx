import React from 'react'

import './projects.css'

import { projects } from "../../constants"
const Projects = () => {
  return (
    <>
      <div className="app__projects section__padding">
        <div className="app__header-component">
          <h3 id="works"><span>#</span>projects</h3>
          <div className="app__header-component_dash"/>
        </div>
        <div className='app__projects-products'>
        {projects.map((proj,i)=>(
          <div key={proj.id} className="product">
            <div className="product-img">
              <img src={proj.img} alt="image" />
            </div>
            <div className="products-title">
              <p>{proj.name}</p>
              <div className="projects-view">
                <a href={proj.live} target='blank'>{proj.link}</a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Projects
