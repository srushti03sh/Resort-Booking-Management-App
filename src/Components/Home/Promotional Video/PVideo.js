import React from 'react'
import { Link } from 'react-router-dom'
import { CiPlay1 } from "react-icons/ci";
import "./Pvideo.css"

function PVideo(videoId) {

    return (
        <div className="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark="3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                        </span>
                        <div className="section-subtitle">
                            <span>The Cappa Luxury Hotel</span>
                        </div>
                        <div className="section-title">
                            <span>Promotional Video</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-md-12">
                        <Link className="vid" to="https://youtu.be/7BGNAGahig8" target="_blank">
                            <div className="vid-butn">
                                <span className="icon">
                                    <i><CiPlay1 /></i>
                                </span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PVideo
