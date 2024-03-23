import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Header from '../Header/Header';

function AllBookings({ isChecked }) {

  const [allBookingData, setAllBookingData] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('bid');
  const [searchDate, setSearchDate] = useState(null);
  const [searchData, setSearchData] = useState('');
  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/AdminBookings.php", {
    });

    const result = response?.data?.allBookings?.map(booking => ({
      ...booking,
      checkIn: moment(booking.checkIn).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
      checkOut: moment(booking.checkOut).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
    }));
    setAllBookingData(result)
  }

  const fetchRoomType = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/roomTypeSearch.php", {
    });
    // console.log(response);
    const room = response.data.roomData;
    setRooms(room)
  }

  useEffect(() => {
    fetchData();
    fetchRoomType();
  }, []);

  useEffect(() => {
    setSearchData('');
    setSearchDate(null);
  }, [search]);

  const filteredData = allBookingData?.length > 0
    ? allBookingData.filter(data =>
      (filter === 'All' || data.Status.includes(filter)) &&
      (search === 'bid'
        ? data.booking_id.toString().includes(searchData)
        : search === 'email'
          ? data.email_id.toLowerCase().includes(searchData.toLowerCase())
          : search === 'mno'
            ? data.mno.includes(searchData)
            : search === 'iDate'
              ? (!searchDate || moment(data.checkIn, 'DD-MM-YYYY').isSame(moment(searchDate), 'day'))
              : search === 'oDate'
                ? (!searchDate || moment(data.checkOut, 'DD-MM-YYYY').isSame(moment(searchDate), 'day'))
                : search === 'rType'
                  ? data.roomType.toLowerCase().includes(searchData.toLowerCase())
                  : search === 'rno'
                    ? data.room_no.toString().includes(searchData)
                    : search === 'guest'
                      ? data.guest.toString().includes(searchData)
                      : true
      )
    )
    : [];
  // console.log(rooms);
  return (
    <>
      <Header
        isChecked={isChecked}
        header="Bookings"
      />
      <div className='Current-booking-body'>
        <div className='Current-booking-top'>
          <div className='search-group'>
            <div>Search:</div>
            <div className='d-flex'>
              <div className='search'>
                <select onChange={e => setSearch(e.target.value)} value={search} >
                  <option value="bid">Booking ID</option>
                  <option value="email">Email ID</option>
                  <option value="mno">Mobile Number</option>
                  <option value="iDate">CheckIn Date</option>
                  <option value="oDate">CheckOut Date</option>
                  <option value="rType">Room Type</option>
                  <option value="rno">No. of Room</option>
                  <option value="guest">No. of Guest</option>
                </select>
              </div>
              <div className='select-input-search'>
                {
                  (search === 'bid')
                    ? <input type="number" placeholder='Booking ID' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    : (search === 'email')
                      ? <input type="email" placeholder='Email' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                      : (search === 'mno')
                        ? <input type="text" placeholder='Mobile Number' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                        : (search === 'iDate')
                          ? <DatePicker
                            selected={searchDate} onChange={(date) => setSearchDate(date)}
                            showIcon={true}
                            toggleCalendarOnIconClick={true}
                            icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                            placeholderText="CheckIn Date"
                            dateFormat="dd/MM/yyyy"
                            calendarClassName="datepic" />
                          : (search === 'oDate')
                            ? <DatePicker
                              selected={searchDate} onChange={(date) => setSearchDate(date)}
                              showIcon={true}
                              toggleCalendarOnIconClick={true}
                              icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                              placeholderText="CheckOut Date"
                              dateFormat="dd/MM/yyyy"
                              calendarClassName="datepic" />
                            : (search === 'rType')
                              ? <select value={searchData} onChange={(e) => setSearchData(e.target.value)}>
                                <option value="" disabled selected>Select Room Type</option>
                                {rooms.map((option, index) => (
                                  <option key={index} value={option.roomType}>
                                    {option.roomType}
                                  </option>
                                ))}
                              </select>
                              : (search === 'rno')
                                ? <input type="text" placeholder='No. of Room' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                                : (search === 'guest')
                                  ? <input type="text" placeholder='No. of Guest' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                                  : ''
                }
              </div>
            </div>
          </div>
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
          {filteredData.length > 0 ? (
            <Table striped bordered variant="dark" responsive>
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
                {filteredData.map((data, index) => (
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
                ))}
              </tbody>
            </Table>
          ) : (
            <div className='no-data'>No data available to display!</div>
          )}
        </div>
      </div>

    </>
  )
}

export default AllBookings
