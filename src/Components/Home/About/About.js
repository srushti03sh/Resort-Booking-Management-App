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
              <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan
                vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit.
                Donec id velit ac arcu posuere blane.
              </p>
              <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula.
                Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus
                nellentesque habitant morbine.
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
