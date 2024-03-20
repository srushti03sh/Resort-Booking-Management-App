import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import "./Bookings.css"
import axios from 'axios';
import moment from 'moment';

function Bookings() {

    const loginData = JSON.parse(localStorage.getItem("loginData"));

    const [bookingData, setBookingData] = useState([]);

    const fetchData = async () => {
        const response = await axios.post("http://localhost/Resort-API/showBooking.php", {
            id: loginData.id
        });

        const result = response?.data?.bookingData?.map(booking => ({
            ...booking,
            checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
            checkOut: moment(booking.checkOut).format('DD-MM-YYYY') // Convert checkIn date using Moment.js
        }));

        setBookingData(result)

    }

    useEffect(() => {
        fetchData();
    }, [loginData.id]);

    return (
        <>
            <Header
                header="Bookings"
            />
            <div className='booking-table'>
                {bookingData?.length > 0 ?
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingData?.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.booking_id}</td>
                                        <td>{data.checkIn}</td>
                                        <td>{data.checkOut}</td>
                                        <td>{data.roomType}</td>
                                        <td>{data.room_no}</td>
                                        <td>{data.guest}</td>
                                        <td>{data.Status}</td>
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
        </>
    )
}

export default Bookings
