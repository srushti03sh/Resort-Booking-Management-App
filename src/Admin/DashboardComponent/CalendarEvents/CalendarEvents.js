import React, { useEffect, useState } from 'react'
import "./CalendarEvents.css"
import axios from 'axios';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import Calendar from 'react-calendar';

function CalendarEvents() {

  const [tgl, setTgl] = useState('')
  const [calEventData, setCalEventData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [calEventDetails, setCalEventDetails] = useState([]);
  const [calBookingDetails, setCalBookingDetails] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/CalendarEvents.php", {});

    const calEvent = response.data.calEventData;
    const booking = response.data.bookingData;

    setCalEventData(calEvent)
    setBookingData(booking)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCal = async (selectedDate) => {
    setTgl(selectedDate);
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/CalendarEventsCard.php", {
        date: formattedDate
      });
      const currentEvent = response?.data?.CurrentEventData?.map(event => ({
        ...event,
        event_date: moment(event.event_date).format('DD-MM-YYYY')
      }));

      const currentBooking = response?.data?.CurrentBookingData?.map(booking => ({
        ...booking,
        checkIn: moment(booking.checkIn).format('DD-MM-YYYY')
      }));
      setCalEventDetails(currentEvent);
      setCalBookingDetails(currentBooking);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const events = [].concat(calEventData?.map(date => moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')),
    bookingData?.map(date => moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY'))
  );

  return (
    <>
      <div className='col-md-12 dashboard-cal'>
        <div className='row'>
          <div className='col-md-7'>
            <div>
              <div className='cal-label'>
                <div className='label-cal'>
                  <span></span><div>Bookings / Current Date</div>
                </div>
              </div>
              <Calendar
                onChange={handleCal}
                value={tgl}
                tileClassName={({ date }) => {
                  let day = date.getDate()
                  let month = date.getMonth() + 1
                  if (date.getMonth() < 10) {
                    month = '0' + month
                  }
                  if (date.getDate() < 10) {
                    day = '0' + day
                  }
                  const realDate = day + '-' + month + '-' + date.getFullYear()
                  if (events.find(val => val === realDate)) {
                    return 'highlight'
                  }
                }}
              />
            </div>
          </div>
          <div className='col-md-5'>
            <div className='dashboard-cal-card'>
              <Card >
                <Card.Body>
                  <div className='msg-click'>click the date to show bookings and events</div>
                  <Card.Title>Upcoming Events & Bookings</Card.Title>
                  <div className='up-events'>
                    {calEventDetails?.length > 0 ? (
                      <>
                        <div className='msg-click'>Events : </div>
                        {calEventDetails?.map((data, index) => (
                          <h6 key={index}>
                            {data.event_name}
                            <br />
                            {data.event_date}
                          </h6>
                        ))}
                      </>
                    ) :
                      <h6>No upcoming events</h6>
                    }
                  </div>

                  <div className='up-bookings'>
                    {calBookingDetails?.length > 0 ? (
                      <>
                        <div className='msg-click'>Bookings : </div>
                        {calBookingDetails?.map((data, index) => (
                          <h6 key={index}>
                            {data.roomType}
                            <br />
                            {data.checkIn}
                          </h6>
                        ))}
                      </>
                    ) :
                      <h6>No upcoming bookings</h6>
                    }
                  </div>

                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarEvents
