import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Alumni from './Components/Alumni/Alumni'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {

 
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
         <Title  subtitle='Our Academics' title='Why Choose Vidyalaya'/>
         <Programs/>
         <About/>
         <Title subtitle='Gallery' title='Moments That Made Memories'/>
         <Campus/>
         <Title subtitle='Alumni' title='What Ex-Student Says'/>
         <Alumni/>
         <Title subtitle='Contact Us' title='Connect with us'/>
         <Contact/>
         <Footer/>
      </div>
     
     
    </div>
  )
}

export default App
