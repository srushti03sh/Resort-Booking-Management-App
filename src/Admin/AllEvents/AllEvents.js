import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import "./AllEvents.css"

function AllEvents({ isChecked }) {

  const [allEventData, setAllEventData] = useState([]);
  const [filter, setFilter] = useState('');
  // console.log(search);
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

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Events"
      />
      <div className='Current-booking-body'>
        <div className='Current-booking-top'>
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
                {
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
