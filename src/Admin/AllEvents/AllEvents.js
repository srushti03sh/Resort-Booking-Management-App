import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Table } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import "./AllEvents.css"

function AllEvents({ isChecked }) {

  const [allEventData, setAllEventData] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('bid');
  const [startDate, setStartDate] = useState(null);
  // console.log(search);
  const [searchData, setSearchData] = useState('');
  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/AdminEvents.php", {
    });

    const result = response?.data?.allEvents?.map(booking => ({
      ...booking,
      event_date: moment(booking.event_date).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
    }));
    // console.log(response);
    setAllEventData(result)
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSearchData('');
  }, [search]);

  // console.log(searchData);
  return (
    <>
      <Header
        isChecked={isChecked}
        header="Events"
      />
      <div className='Current-booking-body'>
        <div className='Current-booking-top'>
          <div className='search'>
            <select onChange={e => setSearch(e.target.value)} value={search}>
              <option value="bid">Booking ID</option>
              <option value="email">Email ID</option>
              <option value="mno">Mobile Number</option>
              <option value="eDate">Event Date</option>
              <option value="eName">Event Name</option>
              <option value="tName">Theme Name</option>
            </select>
          </div>
          <div className='select-input-search'>
            {
              (search === 'bid') ? <input type="number" placeholder='Booking ID' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                (search === 'email') ? <input type="email" placeholder='Email' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                  (search === 'mno') ? <input type="text" placeholder='Mobile Number' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                    (search === 'eDate') ?
                      <DatePicker
                        selected={searchData} onChange={(date) => setSearchData(date)}
                        showIcon={true}
                        toggleCalendarOnIconClick={true}
                        icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                        placeholderText="Event Date"
                        dateFormat="dd/MM/yyyy"
                        // minDate={new Date()}
                        calendarClassName="datepic" /> :
                      (search === 'eName') ? <input type="text" placeholder='Event Name' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                        (search === 'tName') ? <input type="text" placeholder='Theme Name' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> : ''
            }
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
          {allEventData?.length > 0 ?
            (<Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Email ID</th>
                  <th>Event Date</th>
                  <th>Event Name</th>
                  <th>Theme Name</th>
                  <th>Mobile Number</th>
                  <th>No. of Guest</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  allEventData?.filter((data) => {
                    return filter === 'All' ? data : data.Status.includes(filter)
                  }).map((data, index) => (
                    <tr key={index}>
                      <td>{data.e_booking_id}</td>
                      <td>{data.email_id}</td>
                      <td>{data.event_date}</td>
                      <td>{data.event_name}</td>
                      <td>{data.theme_name}</td>
                      <td>{data.mno}</td>
                      <td>{data.guest}</td>
                      <td>{data.Status}</td>
                    </tr>
                  ))
                } */}
                {
                  allEventData?.filter((data) => {
                    return (
                      (filter === 'All' || data.Status.includes(filter)) && // Filter by status
                      (
                        search === 'bid' ? data.e_booking_id.toString().includes(searchData) : // Filter by booking ID
                          search === 'email' ? data.email_id.toLowerCase().includes(searchData.toLowerCase()) : // Filter by email
                            search === 'mno' ? data.mno.includes(searchData) : // Filter by mobile number
                              search === 'eDate' ? moment(data.event_date, 'DD-MM-YYYY').isSame(moment(searchData), 'day') : // Filter by event date
                                search === 'eName' ? data.event_name.toLowerCase().includes(searchData.toLowerCase()) : // Filter by event name
                                  search === 'tName' ? data.theme_name.toLowerCase().includes(searchData.toLowerCase()) : // Filter by theme name
                                    true // Return true if search criteria doesn't match
                      )
                    );
                  }).map((data, index) => (
                    <tr key={index}>
                      <td>{data.e_booking_id}</td>
                      <td>{data.email_id}</td>
                      <td>{data.event_date}</td>
                      <td>{data.event_name}</td>
                      <td>{data.theme_name}</td>
                      <td>{data.mno}</td>
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
      </div >
    </>
  )
}

export default AllEvents
