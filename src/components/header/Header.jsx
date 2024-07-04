import React from 'react'
import './header.css'
import {headerpic1,logo,quote} from "../../assets"
const Header = () => {
  return (
    <>
   <div className=" section__padding">
    <div className="app__header " id="home">
    <div className="app__header-content">
      <h2>Qassim is a <span>front-end developer</span></h2>
      <p>He transforms ideas into stunning, responsive websites. Explore his portfolio to see how he turns creative concepts into pixel-perfect web experiences.</p>
      <a href='#contacts'>Contact me !!</a>
    </div>

    <div className="app__header-img">
    <img src={logo} alt="logo" className='logo'/>
    <img src={headerpic1} alt="profile pic" className="profile" />
    </div>
    </div>

    <div className="app__header-quote">
    <img src={quote} alt="quote" className='quote' />
    </div>
    
    </div>   
  
    </>
  )
} 

export default Header
