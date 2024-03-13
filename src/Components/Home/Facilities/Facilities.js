import React from 'react'
import { IoFitnessOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoWifiSharp } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import "./Facilities.css"

function Facilities() {
    return (
        <div className='facilties section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-subtitle">
                            Our Services
                        </div>
                        <div className="section-title">
                            Hotel Facilities
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-world">
                                <IoFitnessOutline />
                            </span>
                            <h5>Fitness Center</h5>
                            <p> Fully equipped fitness facilities with exercise machines, free weights, or yoga sessions.
                            </p>
                            <div className="facility-shape">
                                <span className="flaticon-world">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-car">
                                <IoCarSportOutline />
                            </span>
                            <h5>Parking Space</h5>
                            <p> On-site parking options, with secure and convenient access for guests with vehicles.</p>
                            <div className="facility-shape">
                                <span className="flaticon-car">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-bed">
                                <IoBedOutline />
                            </span>
                            <h5>Room Service</h5>
                            <p>Our dedicated team is at your service to fulfill your culinary desires.</p>
                            <div className="facility-shape">
                                <span className="flaticon-bed">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-swimming">
                                <LiaSwimmingPoolSolid />
                            </span>
                            <h5>Swimming Pool</h5>
                            <p>Swimming pools, including children's pools, for relaxation and recreation.</p>
                            <div className="facility-shape">
                                <span className="flaticon-swimming">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-wifi">
                                <IoWifiSharp />
                            </span>
                            <h5>Fibre Internet</h5>
                            <p>Complimentary Wi-Fi access available throughout the premises, including guest rooms, and meeting spaces.</p>
                            <div className="facility-shape">
                                <span className="flaticon-wifi">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="flaticon-breakfast">
                                <MdFastfood />
                            </span>
                            <h5>Restaurant</h5>
                            <p>Restaurants, offering a variety of options, including breakfast, lunch, dinner, snacks, and beverages.</p>
                            <div className="facility-shape">
                                <span className="flaticon-breakfast">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities
