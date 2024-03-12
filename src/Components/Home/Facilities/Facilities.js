import React from 'react'
import { FaTruckPlane } from "react-icons/fa6";
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
                                <FaTruckPlane />
                            </span>
                            <h5>Pick Up & Drop</h5>
                            <p>We'll pick up from airport while you comfy on your ride,
                                mus nellentesque habitant.
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
                            <p>Fusce tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
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
                            <p>Room tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
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
                            <p>Swimming pool tincidunt nise ace park norttito sit space,
                                mus nellentesque habitant.</p>
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
                            <p>Wifi tincidunt nis ace park norttito sit amet space,
                                mus nellentesque habitant.</p>
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
                            <h5>Breakfast</h5>
                            <p>Eat tincidunt nisa ace park norttito sit amet space,
                                mus nellentesque habitant mus habitant.</p>
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
