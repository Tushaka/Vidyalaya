import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import progran_icon_1 from '../../assets/open-book.png'
import progran_icon_2 from '../../assets/teach.png'
import progran_icon_3 from '../../assets/flask.png'

const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={progran_icon_1} alt="" />
                <p>Excellence in Education</p>
            </div>
        </div>
         <div className="program">
            <img src={program_2} alt="" />
             <div className="caption">
                <img src={progran_icon_2} alt="" />
                <p>Experienced Teachers</p>
            </div>
        </div>

         <div className="program">
            <img src={program_3} alt="" />
             <div className="caption">
                <img src={progran_icon_3} alt="" />
                <p>Well Equipped Laboratories</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
