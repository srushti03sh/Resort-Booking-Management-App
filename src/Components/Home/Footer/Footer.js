import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
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
                                        Welcome to the best five-star deluxe hotel in New York.
                                        Hotel elementum sesue the aucan vestibulum aliquam justo in sapien
                                        rutrum volutpat.
                                    </p>
                                    <div className="footer-language">
                                        <i className="lni ti-world">
                                            <TbWorld />
                                        </i>
                                        <select>
                                            <option>English</option>
                                            <option >German</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1">
                                <div className="footer-column footer-explore clearfix">
                                    <h3 className="footer-title">Explore</h3>
                                    <ul className="footer-explore-list list-unstyled">
                                        <li><Link to="index.html">Home</Link></li>
                                        <li><Link to="rooms.html">Rooms & Suites</Link></li>
                                        <li><Link to="restaurant.html">Restaurant</Link></li>
                                        <li><Link to="spa-wellness.html">Spa &amp; Wellness</Link></li>
                                        <li><Link to="about.html">About Hotel</Link></li>
                                        <li><Link to="contact.html">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-column footer-contact">
                                    <h3 className="footer-title">Contact</h3>
                                    <p className="footer-contact-text">
                                        1616 Broadway NY, New York 10001<br />
                                        United States of America
                                    </p>
                                    <div className="footer-contact-info">
                                        <p className="footer-contact-phone">
                                            <span className="flaticon-call"><FiPhoneCall /></span>
                                            855 100 4444
                                        </p>
                                        <p className="footer-contact-mail">
                                            info@luxuryhotel.com
                                        </p>
                                    </div>
                                    <div className="footer-about-social-list">
                                        <Link to="#">
                                            <i className="ti-instagram">
                                                <FaInstagram />
                                            </i>
                                        </Link>
                                        <Link to="#">
                                            <i className="ti-twitter">
                                                <FiTwitter />
                                            </i>
                                        </Link>
                                        <Link to="#">
                                            <i className="ti-youtube">
                                                <FiYoutube />
                                            </i>
                                        </Link>
                                        <Link to="#">
                                            <i className="ti-facebook">
                                                <FaFacebookF />
                                            </i>
                                        </Link>
                                        <Link to="#">
                                            <i className="ti-pinterest">
                                                <FaPinterestP />
                                            </i>
                                        </Link>
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
