import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import Header from '../../Admin/Header/Header';

function Events({ isChecked }) {

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const [eventData, setEventData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/showEvents.php", {
      id: loginData.id
    });

    const events = response?.data?.eventData?.map(event => ({
      ...event,
      event_date: moment(event.event_date).format('DD-MM-YYYY')
    }));

    setEventData(events)
  }

  useEffect(() => {
    fetchData();
  }, [loginData.id]);

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Events"
      />
      <div className='user-panl'>
        <div className='booking-table'>
          {eventData?.length > 0 ?
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
                {
                  eventData?.map((data, index) => (
                    <tr key={index}>
                      <td>{data.e_booking_id}</td>
                      <td>{data.event_date}</td>
                      <td>{data.event_name}</td>
                      <td>{data.theme_name}</td>
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
    </>
  )
}

export default Events
