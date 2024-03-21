import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import Header from '../Header/Header'
import { GiGlassCelebration } from "react-icons/gi";
import { HiMiniUsers } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactApexChart from 'react-apexcharts';
import test1 from "../../Images/test1.jpg"
import test2 from "../../Images/test2.jpg"
import axios from 'axios';
import moment from 'moment';

function Dashboard() {

  const [currentBookingData, setCurrentBookingData] = useState('');
  const [currentEventData, setCurrentEventData] = useState('');
  const [user, setUser] = useState('');
  const [calEventData, setCalEventData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [calEventDetails, setCalEventDetails] = useState([]);
  const [calBookingDetails, setCalBookingDetails] = useState([]);
  const [usedRoom, setUsedRoom] = useState(0);
  const [totRoom, setTotRoom] = useState(0);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/adminDashboard.php", {});

    const result = response.data.CurrentbookingData;

    const result1 = response.data.CurrenteventData;
    const result2 = response.data.user;
    const result3 = response.data.avlRoom;
    const result4 = response.data.totRoom;
    const result5 = response.data.calEventData;
    const result6 = response.data.bookingData;

    setCurrentBookingData(result)
    setCurrentEventData(result1)
    setUser(result2)
    setUsedRoom(result3)
    setTotRoom(result4)
    setCalEventData(result5)
    setBookingData(result6)
  }
  const fetchReportData = async () => {
    const response = await axios.post("http://localhost/Resort-API/reportAdmin.php", {});

    const resultReport = response.data.reportData;
    setReportData(resultReport)

  }
  useEffect(() => {
    fetchData();
    fetchReportData();
  }, []);

  const [tgl, setTgl] = useState('')
  const [series, setSeries] = useState([
    {
      name: 'Total Booking',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Cancel Bookings',
      // data: [reportData.map((item, index) => (
      //   item.reportData
      // ))]
      data: [20, 30, 80, 5, 25, 43]
    }
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#aa8453', "#fff"],
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01"
      ]
    }, yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (value) {
          return value;
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  });
  const events = [].concat(calEventData?.map(date => moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')),
    bookingData?.map(date => moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY'))
  );

  const useRoomNow = (usedRoom / totRoom) * 100;
  const avlRoomNow = ((totRoom - usedRoom) / totRoom) * 100;

  const handleCal = async (selectedDate) => {
    setTgl(selectedDate);
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    try {
      const response = await axios.post("http://localhost/Resort-API/adminDashboard1.php", {
        date: formattedDate
      });
      const result7 = response?.data?.CurrentbookingData?.map(event => ({
        ...event,
        event_date: moment(event.event_date).format('DD-MM-YYYY')
      }));

      // const result8 = response.data.CurrentbookinggData;
      const result8 = response?.data?.CurrentbookinggData?.map(booking => ({
        ...booking,
        checkIn: moment(booking.checkIn).format('DD-MM-YYYY')
      }));
      setCalEventDetails(result7);
      setCalBookingDetails(result8);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <>
      <div className='admin-dashboard'>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><GiGlassCelebration /></i>
              </div>
              <div className='card-info'>
                <h6>Upcoming Events</h6>
                {currentEventData}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><BsListNested /></i>
              </div>
              <div className='card-info'>
                <h6>Upcoming Bookings</h6>
                {currentBookingData}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><HiMiniUsers /></i>
              </div>
              <div className='card-info'>
                <h6>Total Users</h6>
                {user}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><FaEye /></i>
              </div>
              <div className='card-info'>
                <h6>Toatal Reviews</h6>
                50
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 dashboard-cal'>
          <div className='row'>
            <div className='col-md-7'>
              <div>
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
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='admin-report'>
                <div id="chart">
                  <ReactApexChart options={options} series={series} type="area" height={350} />
                </div>
                <div id="html-dist"></div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 avlbl-card-outer'>
              <div className='avlbl-card'>
                <div className='avlbl-1'>
                  <div className='avlbl-card-text'>
                    <h6>Availabe Room Today</h6>
                    <h4>{(totRoom - usedRoom)}</h4>
                  </div>
                  <ProgressBar now={avlRoomNow} />;
                </div>
              </div>
              <div className='avlbl-card'>
                <div className='avlbl-1'>
                  <div className='avlbl-card-text'>
                    <h6>Used Room Today</h6>
                    <h4>{usedRoom}</h4>
                  </div>
                  <ProgressBar now={useRoomNow} />;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='rev'>
                <div className='rev-text'>
                  <p>
                    From the moment we arrived at the hotel, we were greeted with warmth and professionalism. The staff went above and beyond
                    to ensure that our stay was nothing short of exceptional. The room was immaculate, with stunning views and luxurious
                    amenities.
                  </p>
                </div>
                <div className='rev-data'>
                  <img src={test2} />
                  <div className='rev-name'>
                    <h6>Nolan White</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='rev'>
                <div className='rev-text'>
                  <p>
                    Our experience at the hotel was phenomenal! The room was luxurious, the amenities were top-notch, and the staff were
                    incredibly attentive. From check-in to check-out, everything exceeded our expectations. We can't wait to return for
                    another unforgettable stay!
                  </p>
                </div>
                <div className='rev-data'>
                  <img src={test1} />
                  <div className='rev-name'>
                    <h6>Emily Brown</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
