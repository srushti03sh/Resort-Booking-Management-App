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
                            <Link to="/Restaurant">
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
                                    Experience culinary excellence at our resort's restaurant. From breakfast to dinner, enjoy a blend of
                                    international flavors and local ingredients in a stunning setting. Impeccable service and unforgettable
                                    flavors await you
                                </p>
                                <div className="butn-dark">
                                    <Link to="/Restaurant">
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
                                    Relax and rejuvenate with a range of indulgent treatments amidst serene surroundings. Let our expert therapists
                                    pamper you with massages, facials, and holistic therapies, leaving you feeling refreshed and revitalized.
                                    Unwind in luxury and embrace serenity at our spa center.
                                </p>
                                <div className="butn-dark">
                                    <Link to="/Spa">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 order1">
                        <div className="img">
                            <Link to="/Spa">
                                <img src={spa} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="img left">
                            <Link to="/FitnessCenter">
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
                                    Discover state-of-the-art equipment with dynamic environment. Whether you're a fitness enthusiast or just
                                    starting your journey, our dedicated environment guide you towards your goals. Energize your body, strengthen
                                    your mind, and embrace a healthier lifestyle at our fitness center.
                                </p>
                                <div className="butn-dark">
                                    <Link to="/FitnessCenter" >
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
                                    Experience ultimate relaxation and fitness at our resort's health club & pool. Dive into tranquility with a
                                    refreshing swim or invigorate your body with a workout in our state-of-the-art facilities. Your wellness journey
                                    begins here.
                                </p>
                                <div className="butn-dark">
                                    <Link to="/HealthClub">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 order1">
                        <div className="img">
                            <Link to="/HealthClub">
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
