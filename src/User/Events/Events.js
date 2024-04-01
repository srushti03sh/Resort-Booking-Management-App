import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Header from '../../Admin/Header/Header';
import Pagination from 'react-bootstrap/Pagination';

function Events({ isChecked }) {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const displayPages = 3; // Number of page numbers to display in the pagination

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/showEvents.php", {
      id: loginData.id
    });

    const events = response?.data?.eventData?.map(event => ({
      ...event,
      event_date: moment(event.event_date).format('DD-MM-YYYY')
    }));
    events.sort((a, b) => a.e_booking_id - b.e_booking_id);
    setEventData(events);
  };

  useEffect(() => {
    fetchData();
  }, [loginData.id]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = eventData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
    const endPage = Math.min(totalPages, startPage + displayPages - 1);

    if (totalPages - startPage < Math.floor(displayPages / 2)) {
      startPage = totalPages - displayPages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Events"
      />
      <div className='user-panl'>
        <div className='booking-table'>
          {currentEvents?.length > 0 ?
            (<Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Event Date</th>
                  <th>Event Name</th>
                  <th>Theme Name</th>
                  <th>No. of Guest</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentEvents.map((data, index) => (
                  <tr key={index}>
                    <td>{data.e_booking_id}</td>
                    <td>{data.event_date}</td>
                    <td>{data.event_name}</td>
                    <td>{data.theme_name}</td>
                    <td>{data.guest}</td>
                    <td>{data.Status}</td>
                  </tr>
                ))}
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
          {currentPage !== 1 && (
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
          {currentPage !== totalPages && (
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          )}
        </Pagination>
      )}
    </>
  );
}

export default Events;
