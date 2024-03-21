import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import "./CurrentBookings.css"

function CurrentBookings() {

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


  const handleCancel = async (bookingId) => {
    // console.log("Booking ID:", bookingId);
    try {
      await axios.post("http://localhost/Resort-API/cancelBooking.php", {
        booking_id: bookingId
      });
      fetchData();
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };
  const handleEventCancel = async (bookingId) => {
    console.log("Booking ID:", bookingId);
    try {
      await axios.post("http://localhost/Resort-API/cancelBooking.php", {
        e_booking_id: bookingId
      });
      fetchData();
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  return (
    <>
      <div className='Current-booking-body'>
        <h4>Upcoming Event Bookings : </h4>
        <div className='booking-table'>
          {currentEventData?.length > 0 ?
            (<Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Event Date</th>
                  <th>Event Name</th>
                  <th>Theme NAme</th>
                  <th>No. of Guest</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  currentEventData?.map((data, index) => (
                    <tr key={index}>
                      <td>{data.e_booking_id}</td>
                      <td>{data.event_date}</td>
                      <td>{data.event_name}</td>
                      <td>{data.theme_name}</td>
                      <td>{data.guest}</td>
                      <td>{data.Status}</td>
                      <td>
                        <button className='cnt-booking' onClick={() => handleEventCancel(data.e_booking_id)}>
                          Cancel Booking
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>) :
            <h2>There's no such data to display!</h2>
          }
        </div>
        <h4>Upcoming Resort Bookings : </h4>
        <div className='booking-table'>
          {currentBookingData?.length > 0 ?
            (<Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Check-In Date</th>
                  <th>Check-Out Date</th>
                  <th>Room Type</th>
                  <th>No. of Rooms</th>
                  <th>No. of Guest</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  currentBookingData?.map((data, index) => (
                    <tr key={index}>
                      <td>{data.booking_id}</td>
                      <td>{data.checkIn}</td>
                      <td>{data.checkOut}</td>
                      <td>{data.roomType}</td>
                      <td>{data.room_no}</td>
                      <td>{data.guest}</td>
                      <td>{data.Status}</td>
                      <td>
                        <button className='cnt-booking' onClick={() => handleCancel(data.booking_id)}>
                          Cancel Booking
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>) :
            <h2>There's no such data to display!</h2>
          }
          <div className='cnt-book'>
            <Link to="/BookingPage">
              <button className='cnt-booking'>
                Want to do another booking?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentBookings
