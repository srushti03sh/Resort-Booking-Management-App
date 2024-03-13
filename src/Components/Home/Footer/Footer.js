import React from 'react'
import { Link } from 'react-router-dom'
import { TbWorld } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import "./Footer.css"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-column footer-about">
                                    <h3 className="footer-title">About Hotel</h3>
                                    <p className="footer-about-text">
                                    Discover comfort and luxury at our hotel. With stunning views, impeccable service, and world-class amenities,
                                     we offer the perfect blend of sophistication and relaxation for your stay.
                                    </p>
                                    <div className="footer-language">
                                        <i className="lni ti-world">
                                            <TbWorld />
                                        </i>
                                        <select>
                                            <option>English</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1">
                                <div className="footer-column footer-explore clearfix">
                                    <h3 className="footer-title">Explore</h3>
                                    <ul className="footer-explore-list list-unstyled">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/FAQ">F.A.Q.</Link></li>
                                        <li><Link to="/Restaurant">Restaurant</Link></li>
                                        <li><Link to="/Spa">Spa &amp; Wellness</Link></li>
                                        <li><Link to="/Gallery">Gallery</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-column footer-contact">
                                    <h3 className="footer-title">Contact</h3>
                                    <div className="footer-contact-info">
                                        <p className="footer-contact-phone">
                                            <span className="flaticon-call"><FiPhoneCall /></span>
                                            855 100 4444
                                        </p>
                                        <p className="footer-contact-mail">
                                            info@luxuryhotel.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-bottom-inner">
                                    <p className="footer-bottom-copy-right">
                                        © Copyright 2024 by &nbsp;
                                        <Link to="#">Srushti Manvani</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
