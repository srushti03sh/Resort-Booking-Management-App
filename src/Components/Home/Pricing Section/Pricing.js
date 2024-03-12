import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Price1 from "../../../Images/price1.jpg"
import Price2 from "../../../Images/price2.jpg"
import Price3 from "../../../Images/price3.jpg"
import Price4 from "../../../Images/price4.jpg"
import { FiPhoneCall } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./Pricing.css"

function Pricing() {
    const options = {
        responsiveClass: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 2,

            }
        },
    };

    return (
        <div className='pricing section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="section-subtitle"><span>Best Prices</span></div>
                        <div className="section-title">Extra Services</div>
                        <p className="color-2">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                        <p className="color-2">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                        <div className="reservations mb-30">
                            <div className="icon">
                                <span className="flaticon-call"><FiPhoneCall /></span>
                            </div>
                            <div className="text">
                                <p className="color-2">For information</p>
                                <Link href="tel:855-100-4444">855 100 4444</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <OwlCarousel items={2} margin={30} autoplay={true} loop={true} {...options}>
                            <div className="pricing-card">
                                <img src={Price1} alt="" />
                                <div className="desc">
                                    <div className="name">Room cleaning</div>
                                    <div className="amount">$50<span>/ month</span></div>
                                    <ul className="list-unstyled list">
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Hotel ut nisan the duru
                                        </li>
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Orci miss natoque vasa ince
                                        </li>
                                        <li>
                                            <i className="ti-close unavailable"><RxCross1 /></i>
                                            Clean sorem ipsum morbin
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <img src={Price2} alt="" />
                                <div className="desc">
                                    <div className="name">Drinks included</div>
                                    <div className="amount">$30<span>/ month</span></div>
                                    <ul className="list-unstyled list">
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Hotel ut nisan the duru
                                        </li>
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Orci miss natoque vasa ince
                                        </li>
                                        <li>
                                            <i className="ti-close unavailable"><RxCross1 /></i>
                                            Clean sorem ipsum morbin
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <img src={Price3} alt="" />
                                <div className="desc">
                                    <div className="name">Room Breakfast</div>
                                    <div className="amount">$30<span>/ month</span></div>
                                    <ul className="list-unstyled list">
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Hotel ut nisan the duru
                                        </li>
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Orci miss natoque vasa ince
                                        </li>
                                        <li>
                                            <i className="ti-close unavailable"><RxCross1 /></i>
                                            Clean sorem ipsum morbin
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <img src={Price4} alt="" />
                                <div className="desc">
                                    <div className="name">Safe & Secure</div>
                                    <div className="amount">$15<span>/ month</span></div>
                                    <ul className="list-unstyled list">
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Hotel ut nisan the duru
                                        </li>
                                        <li>
                                            <i className="ti-check"><IoCheckmarkOutline /></i>
                                            Orci miss natoque vasa ince
                                        </li>
                                        <li>
                                            <i className="ti-close unavailable"><RxCross1 /></i>
                                            Clean sorem ipsum morbin
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
