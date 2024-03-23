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
  const [searchDate, setSearchDate] = useState(null);
  const [event, setEvent] = useState([]);
  const [theme, setTheme] = useState([]);
  // console.log(search);
  const [searchData, setSearchData] = useState('');
  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/AdminEvents.php", {
    });

    const result = response?.data?.allEvents?.map(booking => ({
      ...booking,
      event_date: moment(booking.event_date).format('DD-MM-YYYY'),// Convert checkIn date using Moment.js
    }));
    setAllEventData(result)
  }

  const fetchEventTheme = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/EventTheme.php", {
    });
    const events = response.data.event;
    setEvent(events)
    const themes = response.data.Theme;
    setTheme(themes)
  }

  useEffect(() => {
    fetchData();
    fetchEventTheme();
  }, []);

  useEffect(() => {
    setSearchData('');
    setSearchDate(null);
  }, [search]);

  const filteredData = allEventData?.length > 0
    ? allEventData.filter(data =>
      (filter === 'All' || data.Status.includes(filter)) &&
      (search === 'bid'
        ? data.e_booking_id.toString().includes(searchData)
        : search === 'email'
          ? data.email_id.toLowerCase().includes(searchData.toLowerCase())
          : search === 'mno'
            ? data.mno.includes(searchData)
            : search === 'eDate'
              ? (!searchDate || moment(data.event_date, 'DD-MM-YYYY').isSame(moment(searchDate), 'day'))
              : search === 'eName'
                ? data.event_name.toLowerCase().includes(searchData.toLowerCase())
                : search === 'tName'
                  ? data.theme_name.toLowerCase().includes(searchData.toLowerCase())
                  : true
      )
    )
    : [];
  return (
    <>
      <Header
        isChecked={isChecked}
        header="Events"
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
                  <option value="eDate">Event Date</option>
                  <option value="eName">Event Name</option>
                  <option value="tName">Theme Name</option>
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
                        : (search === 'eDate')
                          ? <DatePicker
                            selected={searchDate} onChange={(date) => setSearchDate(date)}
                            showIcon={true}
                            toggleCalendarOnIconClick={true}
                            icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                            placeholderText="Event Date"
                            dateFormat="dd/MM/yyyy"
                            // minDate={new Date()}
                            calendarClassName="datepic" />
                          : (search === 'eName')
                            ? <select value={searchData} onChange={(e) => setSearchData(e.target.value)}>
                              <option value="" disabled selected>Select Event Name</option>
                              {event.map((option, index) => (
                                <option key={index} value={option.event_name}>
                                  {option.event_name}
                                </option>
                              ))}
                            </select>
                            : (search === 'tName')
                              ? <select value={searchData} onChange={(e) => setSearchData(e.target.value)}>
                                <option value="" disabled selected>Select Theme Name</option>
                                {theme.map((option, index) => (
                                  <option key={index} value={option.theme_name}>
                                    {option.theme_name}
                                  </option>
                                ))}
                              </select>
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
                {filteredData.map((data, index) => (
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
                ))}
              </tbody>
            </Table>
          ) : (
            <div className='no-data'>No data available to display!</div>
          )}
        </div>
      </div >
    </>
  )
}

export default AllEvents
