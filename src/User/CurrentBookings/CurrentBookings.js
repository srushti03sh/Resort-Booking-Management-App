import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import "./CurrentBookings.css"
import Header from '../../Admin/Header/Header';
import { MdOutlineCancel } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';

function CurrentBookings({ isChecked }) {

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [modalShow, setModalShow] = useState(false);
  const [currentBookingData, setCurrentBookingData] = useState([]);
  const [currentEventData, setCurrentEventData] = useState([]);
  const [cnfClick, setCnfClick] = useState(false)

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/currentBooking.php", {
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

const handlecnfClick=()=>{
  
}

  const handleEventCancel = async () => {
    // console.log("Booking ID:", bookingId);
    setModalShow(true)
    // try {
    //   await axios.post("http://localhost/Resort-API/User/cancelBooking.php", {
    //     e_booking_id: bookingId
    //   });
    //   fetchData();
    // } catch (error) {
    //   console.error("Error cancelling booking:", error);
    // }
  };
  return (
    <>
      <Header
        isChecked={isChecked}
        header="Current Bookings"
      />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => handlecnfClick()}>No</button>
          <button onClick={() => setModalShow()}>Yes</button>
        </Modal.Footer>
      </Modal>
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
                  <th>Cancel Booking</th>
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
                      <td style={{ textAlign: "center" }}>
                        <i onClick={() => handleEventCancel(data.e_booking_id)} className='cancel-bk'>
                          <MdOutlineCancel />
                        </i>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>) :
            <div>There's no such data to display!</div>
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
                  <th>Cancel Booking</th>
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
                      <td style={{ textAlign: "center" }}>
                        <i onClick={() => handleEventCancel(data.e_booking_id)} className='cancel-bk'>
                          <MdOutlineCancel />
                        </i>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>) :
            <div className='no-data'>There's no such data to display!</div>
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
