import React from 'react'
import { Link } from 'react-router-dom'
import food from "../../../Images/food.jpg"
import spa from "../../../Images/spa.jpg"
import gym from "../../../Images/gym.jpg"
import pool from "../../../Images/pool.jpg"
import "./Attraction.css"

function Attraction() {
    return (
        <div className="services section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="img left">
                            <Link to="#">
                                <img src={food} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 bg-darkblack valign">
                        <div className="content">
                            <div className="cont text-left">
                                <div className="info">
                                    <h6>Discover</h6>
                                </div>
                                <h4>The Restaurant</h4>
                                <p>
                                    Restaurant inilla duiman at elit finibus viverra nec a lacus themo
                                    the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue
                                    duru the ivite dianne onen nivami acsestion augue artine.
                                </p>
                                <div className="butn-dark">
                                    <Link to="#">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 bg-darkblack p-0 order2 valign">
                        <div className="content">
                            <div className="cont text-left">
                                <div className="info">
                                    <h6>Experiences</h6>
                                </div>
                                <h4>Spa Center</h4>
                                <p>
                                    Spa center inilla duiman at elit finibus viverra nec a lacus themo
                                    the nesudea seneoice misuscipit non sagie the fermen ziverra
                                    tristiue duru the ivite dianne onen nivami acsestion augue artine.
                                </p>
                                <div className="butn-dark">
                                    <Link to="#">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 order1">
                        <div className="img">
                            <Link to="#">
                                <img src={spa} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="img left">
                            <Link to="#">
                                <img src={gym} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 bg-darkblack valign">
                        <div className="content">
                            <div className="cont text-left">
                                <div className="info">
                                    <h6>Modern</h6>
                                </div>
                                <h4>Fitness Center</h4>
                                <p>
                                    Restaurant inilla duiman at elit finibus viverra nec a lacus themo
                                    the nesudea seneoice misuscipit non sagie the fermen ziverra
                                    tristiue duru the ivite dianne onen nivami acsestion augue artine.
                                </p>
                                <div className="butn-dark">
                                    <Link to="#">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 bg-darkblack p-0 order2 valign">
                        <div className="content">
                            <div className="cont text-left">
                                <div className="info">
                                    <h6>Experiences</h6>
                                </div>
                                <h4>The Health Club & Pool</h4>
                                <p>
                                    The health club & pool at elit finibus viverra nec a lacus themo
                                    the nesudea seneoice misuscipit non sagie the fermen ziverra
                                    tristiue duru the ivite dianne onen nivami acsestion augue artine.
                                </p>
                                <div className="butn-dark">
                                    <Link to="#">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 order1">
                        <div className="img">
                            <Link to="#">
                                <img src={pool} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attraction
