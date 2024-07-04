import React from 'react'
import { AboutMe,Contacts,Footer,Header,Navbar,Projects,Skills } from './components'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Projects/>
      <Skills/>
      <AboutMe/>
      <Contacts/>
      <div className='app__dash'/>
      <Footer/>
    </div>
  )
}

export default App
