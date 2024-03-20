import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import "./Rooms.css"
import { HomeRooms } from '../../../Data/Data';

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
          {
            HomeRooms.map((data, index) => (
              <div className={data.size} key={index}>
                <Link to="/JuniorSuite">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img src={data.src} alt="" />
                    </div>
                    <span className="category">
                      <Link to={data.path}>Book</Link>
                    </span>
                    <div className="con">
                      <h6>
                        <Link to={data.path}>{data.price}</Link>
                      </h6>
                      <h5>
                        <Link to={data.path}>{data.title}</Link>
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
                            <Link to={data.path}>
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Rooms
