// CurrentBookings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import "./CurrentBookings.css";
import Header from '../../Admin/Header/Header';
import { MdOutlineCancel } from "react-icons/md";
import CnfModal from '../../Common/Modal/Modal';

function CurrentBookings({ isChecked }) {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [modalShow, setModalShow] = useState(false);
  const [bookingIdToDelete, setBookingIdToDelete] = useState(null);
  const [isEventBooking, setIsEventBooking] = useState(false);
  const [currentBookingData, setCurrentBookingData] = useState([]);
  const [currentEventData, setCurrentEventData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/currentBooking.php", {
      id: loginData.id
    });

    const result = response?.data?.CurrentbookingData?.map(booking => ({
      ...booking,
      checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),
      checkOut: moment(booking.checkOut).format('DD-MM-YYYY')
    }));

    const result1 = response?.data?.CurrenteventData?.map(event => ({
      ...event,
      event_date: moment(event.event_date).format('DD-MM-YYYY'),
    }));
    console.log(result1);
    setCurrentBookingData(result);
    setCurrentEventData(result1);
  };

  useEffect(() => {
    fetchData();
  }, [loginData.id]);

  const handleEventCancel = async (bookingId, isEvent) => {
    setBookingIdToDelete(bookingId);
    setIsEventBooking(isEvent);
    setModalShow(true);
  };

  const handleCancelConfirmation = async (confirmed) => {
    if (confirmed) {
      try {
        const cancelId = isEventBooking ? 'e_booking_id' : 'booking_id';
        await axios.post("http://localhost/Resort-API/User/cancelBooking.php", {
          [cancelId]: bookingIdToDelete
        });
        fetchData();
      } catch (error) {
        console.error("Error cancelling booking:", error);
      }
    }
    setModalShow(false);
    setBookingIdToDelete(null);
    setIsEventBooking(false);
  };

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Current Bookings"
      />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title="Are you sure you want to cancel this booking?"
        description="This action cannot be undone."
      />
      <div className='Current-booking-body'>
        <h4>Upcoming Event Bookings : </h4>
        <div className='booking-table'>
          {currentEventData?.length > 0 ?
            (
              <Table striped bordered variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Event Date</th>
                    <th>Event Name</th>
                    <th>Theme Name</th>
                    <th>No. of Guest</th>
                    <th>Status</th>
                    <th>Cancel Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEventData?.map((data, index) => (
                    <tr key={index}>
                      <td>{data.e_booking_id}</td>
                      <td>{data.event_date}</td>
                      <td>{data.event_name}</td>
                      <td>{data.theme_name}</td>
                      <td>{data.guest}</td>
                      <td>{data.Status}</td>
                      <td style={{ textAlign: "center" }}>
                        <i onClick={() => handleEventCancel(data.e_booking_id, true)} className='cancel-bk'>
                          <MdOutlineCancel />
                        </i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) :
            <div className='no-data'>There's no such data to display!</div>
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
                {currentBookingData?.map((data, index) => (
                  <tr key={index}>
                    <td>{data.booking_id}</td>
                    <td>{data.checkIn}</td>
                    <td>{data.checkOut}</td>
                    <td>{data.roomType}</td>
                    <td>{data.room_no}</td>
                    <td>{data.guest}</td>
                    <td>{data.Status}</td>
                    <td style={{ textAlign: "center" }}>
                      <i onClick={() => handleEventCancel(data.booking_id, false)} className='cancel-bk'>
                        <MdOutlineCancel />
                      </i>
                    </td>
                  </tr>
                ))}
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
  );
}

export default CurrentBookings
