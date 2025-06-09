import React, { useRef } from 'react'
import './Alumni.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward = () =>{
      if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className= 'next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className= 'back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Dr. Liana Anderson</h3>
                                <span>Doctor</span>
                            </div>
                        </div>
                        <p>My time at this vidyalaya laid the foundation for everything I have achieved in life. 
                            The support of my teachers and the friendships I formed will always hold a special place in my heart.
                            Forever grateful to Vidyalaya.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Er.Steve Garcia</h3>
                                <span>Engineer</span>
                            </div>
                        </div>
                        <p>This school taught me discipline, determination. Every morning assembly, every classroom discussion, and every celebration contributed to unforgettable memories. Wherever I go, I carry the values and spirit of this vidyalaya with pride.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Elena Petrova</h3>
                                <span>National Player</span>
                            </div>
                        </div>
                        <p>Being an alumnus of this institution is an honor I hold dear.
                             It’s where I discovered my strengths, overcame my fears, and found my direction.
                             The lessons learned here continue to guide me through every phase of life</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>David Tanaka</h3>
                                <span>Businessman</span>
                            </div>
                        </div>
                        <p>This vidyalaya has been more than just a place of education for me — it was my second home.
                             The values I learned, the friendships I made, and the guidance I received from my teachers have shaped who I am today.
                             
                           </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
