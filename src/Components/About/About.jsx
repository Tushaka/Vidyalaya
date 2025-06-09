import React from 'react'
import './About.css'
import about_img from '../../assets/Building.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            
        </div>
        <div className="about-right">
            <h3>About Vidyalaya</h3>
            <h2>A temple of knowledge and growth</h2>
            <p>Our Vidyalaya is a nurturing space where education meets values. We believe in holistic development—academics, discipline,
               and character go hand in hand. 
              From classrooms to playgrounds, every corner of our school inspires learning and curiosity.</p>
            <p>Dedicated teachers and a supportive environment ensure that every student 
              is guided with care and encouraged to reach their full potential. 
              We blend traditional wisdom with modern teaching methods to prepare students for the challenges of tomorrow.</p>
            <p>More than just a school, our vidyalaya is a community—a place where lifelong memories are made, talents are discovered, 
              and strong foundations are built.
               We take pride in shaping responsible, confident, and compassionate individuals.</p>
        </div>
      
    </div>
  )
}

export default About
