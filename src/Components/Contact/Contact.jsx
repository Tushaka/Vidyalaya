import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aec7be16-3c1c-446d-824e-e79128aab28c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>We’re here to help. </h3>
            <p>Have questions or want to get in touch? We're here to help! Whether you're a parent,
               student, alumni, or visitor, feel free to reach out to us for any information or support.
               Your connection matters to us.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />vidyalaya.edu.np</li>
                <li><img src={phone_icon} alt="" />+980849783333</li>
                <li><img src={location_icon} alt="" />Kathmandu</li>
            </ul>


        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result} </span>
        </div>

      
    </div>
  )
}

export default Contact
