import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import "./Contact.css"

function Contact() {
  return (
    <>
      <Navbar />
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left cap mt-90">
              <h5>Get in touch</h5>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="contact section-padding">
        <div className="container">
          <div className="row mb-90">
            <div className="col-md-6 mb-60">
              <h3>The Cappa Luxury Hotel</h3>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula.
                Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque
                habitant morbine.
              </p>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-call">
                    <FiPhoneCall />
                  </span>
                </div>
                <div className="text">
                  <p>
                    Reservation
                  </p>
                  <Link to="tel:855-100-4444">
                    855 100 4444
                  </Link>
                </div>
              </div>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-envelope">
                    <IoMailOutline />
                  </span>
                </div>
                <div className="text">
                  <p>
                    Email Info
                  </p>
                  <Link to="mailto:info@luxuryhotel.com">
                    info@luxuryhotel.com
                  </Link>
                </div>
              </div>
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-location-pin">
                    <SlLocationPin />
                  </span>
                </div>
                <div className="text">
                  <p>
                    Address
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-30 offset-md-1">
              <h3>Get in touch</h3>
              <form method="post" className="contact__form">
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-success contact__msg">
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input name="name" type="text" placeholder="Your Name *" required="" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="email" type="email" placeholder="Your Email *" required="" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="phone" type="text" placeholder="Your Number *" required="" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="subject" type="text" placeholder="Subject *" required="" />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required=""></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="butn-dark2">
                      <span>
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
            <div className="row">
              <div className="col-md-12 map">
                <iframe src="https://maps.google.com/maps?q=katargam&output=embed" width="100%" height="600"
                  allowFullScreen="" loading="lazy" title='Map'>
                </iframe>
              </div>
            </div>
        </div>
      </section >
      <Footer />
    </>
  )
}

export default Contact
