import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import Pic1 from "../../../Images/1.jpg"
import Pic2 from "../../../Images/2.jpg"
import Pic3 from "../../../Images/3.jpg"
import Pic4 from "../../../Images/4.jpg"
import Pic7 from "../../../Images/7.jpg"
import "./Rooms.css"

function Rooms({ RoomRef }) {
    return (
        <div className='rooms1 section-padding' ref={RoomRef}>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="section-subtitle">The Cappa Luxury Hotel</div>
                        <div className="section-title">Rooms & Suites</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/JuniorSuite">
                            <div className="item">
                                <div className="position-re o-hidden">
                                    <img src={Pic1} alt="" />
                                </div>
                                <span className="category">
                                    <Link to="/JuniorSuite">Book</Link>
                                </span>
                                <div className="con">
                                    <h6>
                                        <Link to="#">150$ / Night</Link>
                                    </h6>
                                    <h5>
                                        <Link to="#">Junior Suite</Link>
                                    </h5>
                                    <div className="line">
                                    </div>
                                    <div className="row facilities">
                                        <div className="col col-md-7 flex item-center">
                                            <ul>
                                                <li>
                                                    <i><MdOutlineBed /></i>
                                                </li>
                                                <li>
                                                    <i><PiBathtub /></i>
                                                </li>
                                                <li>
                                                    <i><MdOutlineFreeBreakfast /></i>
                                                </li>
                                                <li>
                                                    <i><GiTowel /></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-md-5 text-end flex item-center">
                                            <div className="permalink">
                                                <Link to="/JuniorSuite">
                                                    Details
                                                    <i><FaArrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/FamilyRoom">
                            <div className="item">
                                <div className="position-re o-hidden">
                                    <img src={Pic2} alt="" />
                                </div>
                                <span className="category">
                                    <Link to="/FamilyRoom">
                                        Book
                                    </Link>
                                </span>
                                <div className="con">
                                    <h6>
                                        <Link to="#">200$ / Night</Link>
                                    </h6>
                                    <h5>
                                        <Link to="#">Family Room</Link>
                                    </h5>
                                    <div className="line">
                                    </div>
                                    <div className="row facilities">
                                        <div className="col col-md-7">
                                            <ul>
                                                <li>
                                                    <i><MdOutlineBed /></i>
                                                </li>
                                                <li>
                                                    <i><PiBathtub /></i>
                                                </li>
                                                <li>
                                                    <i><MdOutlineFreeBreakfast /></i>
                                                </li>
                                                <li>
                                                    <i><GiTowel /></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-md-5 text-end">
                                            <div className="permalink">
                                                <Link to="/FamilyRoom">
                                                    Details
                                                    <i><FaArrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/DoubleRoom">
                            <div className="item">
                                <div className="position-re o-hidden">
                                    <img src={Pic3} alt="" />
                                </div>
                                <span className="category">
                                    <Link to="/DoubleRoom">Book</Link>
                                </span>
                                <div className="con">
                                    <h6>
                                        <Link to="#">250$ / Night</Link>
                                    </h6>
                                    <h5>
                                        <Link to="#">Double Room</Link>
                                    </h5>
                                    <div className="line">
                                    </div>
                                    <div className="row facilities">
                                        <div className="col col-md-7">
                                            <ul>
                                                <li>
                                                    <i><MdOutlineBed /></i>
                                                </li>
                                                <li>
                                                    <i><PiBathtub /></i>
                                                </li>
                                                <li>
                                                    <i><MdOutlineFreeBreakfast /></i>
                                                </li>
                                                <li>
                                                    <i><GiTowel /></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-md-5 text-end">
                                            <div className="permalink">
                                                <Link to="/DoubleRoom">
                                                    Details
                                                    <i><FaArrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/DeluxeRoom">
                            <div className="item">
                                <div className="position-re o-hidden">
                                    <img src={Pic4} alt="" />
                                </div>
                                <span className="category">
                                    <Link to="/DeluxeRoom">Book</Link>
                                </span>
                                <div className="con">
                                    <h6>
                                        <Link to="#">300$ / Night</Link>
                                    </h6>
                                    <h5>
                                        <Link to="#">Deluxe Room</Link>
                                    </h5>
                                    <div className="line"></div>
                                    <div className="row facilities">
                                        <div className="col col-md-7">
                                            <ul>
                                                <li>
                                                    <i><MdOutlineBed /></i>
                                                </li>
                                                <li>
                                                    <i><PiBathtub /></i>
                                                </li>
                                                <li>
                                                    <i><MdOutlineFreeBreakfast /></i>
                                                </li>
                                                <li>
                                                    <i><GiTowel /></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-md-5 text-end">
                                            <div className="permalink">
                                                <Link to="/DeluxeRoom">
                                                    Details
                                                    <i><FaArrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/SuperiorRoom">
                            <div className="item">
                                <div className="position-re o-hidden">
                                    <img src={Pic7} alt="" />
                                </div>
                                <span className="category">
                                    <Link to="/SuperiorRoom">Book</Link>
                                </span>
                                <div className="con">
                                    <h6>
                                        <Link to="#">150$ / Night</Link>
                                    </h6>
                                    <h5>
                                        <Link to="#">Superior Room</Link>
                                    </h5>
                                    <div className="line"></div>
                                    <div className="row facilities">
                                        <div className="col col-md-7">
                                            <ul>
                                                <li>
                                                    <i><MdOutlineBed /></i>
                                                </li>
                                                <li>
                                                    <i><PiBathtub /></i>
                                                </li>
                                                <li>
                                                    <i><MdOutlineFreeBreakfast /></i>
                                                </li>
                                                <li>
                                                    <i><GiTowel /></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-md-5 text-end">
                                            <div className="permalink">
                                                <Link to="/SuperiorRoom">
                                                    Details
                                                    <i><FaArrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
