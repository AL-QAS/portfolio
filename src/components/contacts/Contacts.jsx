
import React from 'react'
import "./contacts.css"
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contacts = () => {
  return (
    <>
    <div className="app__contancts section__padding" id="contacts">
    <div className="app__header-component">
          <h3 id="about-me"><span>#</span>contacts</h3>
          <div className="app__header-component_dash"/>
        </div>
        <div className="app__contacts-container">
        <div className="app__contacts-container_cta">
       <p> I am currently seeking freelance opportunities and am eager to collaborate with innovative companies and clients. If you have any projects, requests, or questions, please don't hesitate to get in touch with me. Let's work together to bring your vision to life!</p>
        </div>
        <div className="app__contacts-container_contact">
          <h4>message me here or call me!</h4>
          <div>
         <a href="tel:+234-703-698-4379"> <CiPhone /> </a>
         <span>+234-703-698-4379</span>
          </div>
          <div>
         <a href="whatsapp://send?text=hi i am intrested in your services.please contact me when you get the chance&phone=:+234 805 832 0211"> <FaWhatsapp /> </a>
         <span>+234-805-832-0211</span>
          </div>
          <div>
         <a href="mailto:rufaiqassim@gmail.com?Subject=Interest in  your services"> <MdOutlineEmail /> </a>
         <span>rufaiqassim@gmail.com</span>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contacts
