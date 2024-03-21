import React from 'react'
import "./Facilities.css"
import { HomeFacilities } from '../../../Data/Data';

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
                    {
                        HomeFacilities.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="single-facility">
                                    <span className="flaticon-world">
                                        {data.icon}
                                    </span>
                                    <h5>{data.title}</h5>
                                    <p>{data.des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Facilities
