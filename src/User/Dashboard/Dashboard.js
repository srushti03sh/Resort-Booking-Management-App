import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import moment from 'moment';
import axios from 'axios';
import Header from '../../Admin/Header/Header';

function Dashboard({ isChecked }) {

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const [currentBookingData, setCurrentBookingData] = useState([]);
  const [currentEventData, setCurrentEventData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/currentBooking.php", {
      id: loginData.id
    });

    const result = response?.data?.CurrentbookingData?.map(booking => ({
      ...booking,
      checkIn: moment(booking.checkIn).format('DD-MM-YYYY')
    }));

    const result1 = response?.data?.CurrenteventData?.map(event => ({
      ...event,
      event_date: moment(event.event_date).format('DD-MM-YYYY')
    }));

    setCurrentBookingData(result)
    setCurrentEventData(result1)
  }

  useEffect(() => {
    fetchData();
  }, [loginData.id]);

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Dashboard"
      />
      <div className='dashboard-event-body'>
        {loginData.userStatus === 'blocked' ? <div className='block-warn'>
          You can not do any bookings !
        </div>
          : ""}

        <h4>Upcoming Events:</h4>
        <div className='row'>
          {currentEventData?.length > 0 ? (
            currentEventData.map((data, index) => (
              <div key={index} className='col-md-4 col-sm-6 mb-3'>
                <Link to="/UserPanel/CurrentBookings">
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title>{data.event_name}</Card.Title>
                      <div className='card-date'>Event Date : {data.event_date}</div>
                      <Card.Text>
                        Status: <Badge bg="success">Pending</Badge>
                        <Link className='dashboard-event-btn' to="/UserPanel/CurrentBookings">Details <FaArrowRight /></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          ) : <div className='no-data'>There's no such data to display!</div>}
        </div>
      </div>
      <div className='dashboard-booking-body'>
        <h4>Upcoming Resort Bookings:</h4>
        <div className='row'>
          {currentBookingData?.length > 0 ? (
            currentBookingData.map((data, index) => (
              <div key={index} className='col-lg-4 col-md-6 mb-3'>
                <Link to="/UserPanel/CurrentBookings">
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title>{data.roomType}</Card.Title>
                      <div className='card-date'>Check-In Date : {data.checkIn}</div>
                      <Card.Text>
                        Status: <Badge bg="success">Pending</Badge>
                        <Link className='dashboard-event-btn' to="/UserPanel/CurrentBookings">Details <FaArrowRight /></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          ) : <div className='no-data'>There's no such data to display!</div>}
        </div>
      </div>
    </>
  )
}

export default Dashboard;
