import React, { useEffect, useState } from 'react'
import { GiGlassCelebration } from "react-icons/gi";
import { HiMiniUsers } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";
import "./UpComingCards.css"
import axios from 'axios';

function UpComingCards() {

  const [currentBookingData, setCurrentBookingData] = useState('');
  const [currentEventData, setCurrentEventData] = useState('');
  const [user, setUser] = useState('');

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/Dashboard/UpComingCards.php", {});

    const cEvent = response.data.CurrentbookingData;
    const cBooking = response.data.CurrenteventData;
    const tUser = response.data.user;

    setCurrentBookingData(cEvent)
    setCurrentEventData(cBooking)
    setUser(tUser)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='UpComingCards'>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><GiGlassCelebration /></i>
              </div>
              <div className='card-info'>
                <h6>Upcoming Events</h6>
                {currentEventData}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><BsListNested /></i>
              </div>
              <div className='card-info'>
                <h6>Upcoming Bookings</h6>
                {currentBookingData}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><HiMiniUsers /></i>
              </div>
              <div className='card-info'>
                <h6>Total Users</h6>
                {user}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><FaEye /></i>
              </div>
              <div className='card-info'>
                <h6>Toatal Reviews</h6>
                50
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpComingCards
