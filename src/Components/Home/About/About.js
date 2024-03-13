import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from "react-icons/fi";
import Pic1 from "../../../Images/8.jpg"
import Pic2 from "../../../Images/about-room.jpg"
import "./About.css"

const About = ({ Aboutref }) => {

  return (
    <>
      <div className='about section-padding' ref={Aboutref}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-30'>
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">The Cappa Luxury Hotel</div>
              <div className="section-title">Enjoy a Luxury Experience</div>
              <p>Escape the ordinary with our Resorts where luxury meets excellence! Enjoy beautiful moments with your loved ones.
                The Cappa Group has gained remarkable prominence in the hospitality industry and believes in making your stay a memorable one.
                A staycation to make your weekends filled with joy and happiness.
              </p>
              <p>Our Resort believes in customer satisfaction and hence offers the best service for 
                you to have a wonderful stay.
              </p>
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-call"><FiPhoneCall /></span>
                </div>
                <div className="text">
                  <p>Reservation</p>
                  <Link to="tel:855-100-4444">
                    855 100 4444
                  </Link>
                </div>
              </div>
            </div>
            <div className='col col-md-3'>
              <img src={Pic1} className='mt-90 mb-30' alt=""></img>
            </div>
            <div className='col col-md-3' alt="">
              <img src={Pic2} ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
