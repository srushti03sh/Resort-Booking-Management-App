import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';

function AllBookings({ isChecked }) {

    const [allBookingData, setAllBookingData] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        const response = await axios.post("http://localhost/Resort-API/AdminBookings.php", {
        });

        const result = response?.data?.allBookings?.map(booking => ({
            ...booking,
            checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
            checkOut: moment(booking.checkOut).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
        }));
        // console.log(response);
        setAllBookingData(result)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header
                isChecked={isChecked}
                header="Bookings"
            />
            <div className='Current-booking-body'>
                <div className='Current-booking-top'>
                    {/* <div className='search'>
                        <select onChange={e => setSearch(e.target.value)} defaultValue={search}>
                            <option value="bid">Booking ID</option>
                            <option value="email">Email ID</option>
                            <option value="mno">Mobile No.</option>
                            <option value="checkIn">CheckIn Date</option>
                            <option value="checkOut">CheckOut Date</option>
                            <option value="rtype">Room Type</option>
                        </select>
                    </div> */}
                    <div className='selection'>
                        <div>Filter : </div>
                        <select onChange={e => setFilter(e.target.value)} defaultValue={filter}>
                            <option value="All">All</option>
                            <option value="Cancel">Cancel</option>
                            <option value="Pending">Pending</option>
                            <option value="Current">Current</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className='booking-table'>
                    {allBookingData?.length > 0 ?
                        (<Table striped bordered variant="dark" responsive>
                            <thead >
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Email ID</th>
                                    <th>Mobile No.</th>
                                    <th>CheckIn Date</th>
                                    <th>CheckOut Date</th>
                                    <th>Room Type</th>
                                    <th>No. of Room</th>
                                    <th>No. of Guest</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBookingData?.filter((data) => {
                                        return filter === 'All' ? data : data.Status.includes(filter)
                                    }).map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.booking_id}</td>
                                            <td>{data.email_id}</td>
                                            <td>{data.mno}</td>
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
                </div>
            </div>

        </>
    )
}

export default AllBookings
