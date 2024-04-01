import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Header from '../../Admin/Header/Header';
import "./Bookings.css";

function Bookings({ isChecked }) {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const [bookingData, setBookingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page
    const displayPages = 3; // Number of page numbers to display in the pagination

    const fetchData = async () => {
        const response = await axios.post("http://localhost/Resort-API/User/showBooking.php", {
            id: loginData.id
        });

        const result = response?.data?.bookingData?.map(booking => ({
            ...booking,
            checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),
            checkOut: moment(booking.checkOut).format('DD-MM-YYYY')
        }));

        setBookingData(result);
    };

    useEffect(() => {
        fetchData();
    }, [loginData.id]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBookings = bookingData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(bookingData.length / itemsPerPage);
    const totalDisplayPages = Math.min(displayPages, totalPages);

    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - Math.floor(totalDisplayPages / 2));
        const endPage = Math.min(totalPages, startPage + totalDisplayPages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <>
            <Header
                isChecked={isChecked}
                header="Bookings"
            />
            <div className='user-panl'>
                <div className='booking-table'>
                    {currentBookings?.length > 0 ?
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
                                    currentBookings?.map((data, index) => (
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
                        <div className='no-data'>There's no such data to display!</div>
                    }
                </div>
                <div className='cnt-book'>
                    <Link to="/BookingPage">
                        <button className='cnt-booking'>
                            Want to do another booking?
                        </button>
                    </Link>
                </div>
            </div>
            {totalPages > 1 && (
                <Pagination>
                    {currentPage !== 1 && ( // Render Prev button only if not on first page
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                    )}
                    {getPageNumbers().map(pageNumber => (
                        <Pagination.Item
                            key={pageNumber}
                            active={pageNumber === currentPage}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </Pagination.Item>
                    ))}
                    {currentPage !== totalPages && ( // Render Next button only if not on last page
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                    )}
                </Pagination>
            )}
        </>
    )
}

export default Bookings;
