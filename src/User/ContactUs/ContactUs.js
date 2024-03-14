import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';
import "./ContactUs.css"
import Header from '../Header/Header';

function ContactUs() {
    return (
        <>
            <Header
                header="Contact Us"
            />
            <section className="user-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-60">
                            <h3>The Cappa Luxury Hotel</h3>
                            <p>
                                Thank you for your interest in our resort. We're here to assist you with any questions or inquiries you may 
                                have. Please feel free to reach out to us.
                            </p>
                            <div className="user-reservations mb-30">
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
                            <div className="user-reservations mb-30">
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
                            <div className="user-reservations">
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
                        <div className="col-md-5 mb-30">
                            <h3>Get in touch</h3>
                            <form method="post" className="user-contact__form">
                                <div className="row">
                                    <div className="col-md-6 user-form-group">
                                        <input name="name" type="text" placeholder="Your Name *" required="" />
                                    </div>
                                    <div className="col-md-6 user-form-group">
                                        <input name="email" type="email" placeholder="Your Email *" required="" />
                                    </div>
                                    <div className="col-md-6 user-form-group">
                                        <input name="phone" type="text" placeholder="Your Number *" required="" />
                                    </div>
                                    <div className="col-md-6 user-form-group">
                                        <input name="subject" type="text" placeholder="Subject *" required="" />
                                    </div>
                                    <div className="col-md-12 user-form-group">
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
                </div>
            </section >
        </>
    )
}

export default ContactUs
