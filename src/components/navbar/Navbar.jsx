import {React,useState} from 'react'
import "./navbar.css"
import { navLinks } from "../../constants"
import {union,bars,x} from "../../assets"
const Navbar = () => {
const [toggle,setToggle] = useState("")

  return (
    <>
<div className="app__navbar">
    <div className="app__navbar-logo_container">
    <img src={union} alt="logo" className="union"/>
        <h1>Qassim Rufai</h1>
    </div>
    <ul className="app__navbar-links app__navbar-sm_hidden">
       {navLinks.map((nav,i)=>(
        <li key={nav.id}><a href={`#${nav.id}`}  onClick={()=>setToggle(prev => !prev)}><span>#</span>{nav.title}</a></li>
       ))}
    </ul>
    <div className="app__navbar-smallscreen">
   <img src={toggle?x:bars}
   alt="menu"
   onClick={()=>setToggle(prev => !prev)}
   className='bars'
   />
    {
          toggle &&(
            <div className='app__navbar-smallscreen_overlay app__navbar-lgscreen_hidden sidebar'>
            <ul className="app__navbar-smallscreen_links app__navbar-lgscreen_hidden" >
            {navLinks.map((link,index)=> (
              <li key ={link.id}><a href={`#${link.id}`} ><span>#</span>{link.title}</a> </li>
            ))}
          </ul>
            </div>
          )
        }
    </div>
</div>
    </>
  )
}

export default Navbar
