import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
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
    const response = await axios.post("http://localhost/Resort-API/currentBooking.php", {
      id: loginData.id
    });

    const result = response?.data?.CurrentbookingData?.map(booking => ({
      ...booking,
      checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
      checkOut: moment(booking.checkOut).format('DD-MM-YYYY') // Convert checkIn date using Moment.js
    }));

    const result1 = response?.data?.CurrenteventData?.map(event => ({
      ...event,
      event_date: moment(event.event_date).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
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
        <h4>Upcoming Events : </h4>
        <div className='col-md-12'>
          {currentEventData?.length > 0 ? (<div className='col-lg-4 col-md-3 col-sm-6 col-12'>
            {
              currentEventData?.map((data, index) => (
                <Link to="/UserPanel/CurrentBookings" key={index}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{data.event_name}</Card.Title>
                      <Card.Text>
                        Status : <Badge bg="success">Pending</Badge>
                        <Link className='dashboard-event-btn' to="/UserPanel/CurrentBookings">Details <FaArrowRight /></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>

              ))
            }
          </div>
          ) : <h2>There's no such data to display!</h2>
          }
        </div>
      </div>
      <div className='dashboard-booking-body'>
        <h4>Upcoming Resort Bookings : </h4>
        <div className='col-md-12'>
          {currentBookingData?.length > 0 ? (<div className='col-lg-4 col-md-3 col-sm-6 col-12'>
            {
              currentBookingData?.map((data, index) => (
                <Link to="/UserPanel/CurrentBookings" key={index}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{data.roomType}</Card.Title>
                      <Card.Text>
                        Status : <Badge bg="success">Pending</Badge>
                        <Link className='dashboard-event-btn' to="/UserPanel/CurrentBookings">Details <FaArrowRight /></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))
            }
          </div>
          ) : <h2>There's no such data to display!</h2>
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard
