import React, { useState } from 'react'
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

function Dashboard() {
  const [tgl, setTgl] = useState(new Date())
  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
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
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  });
  const events = ['27-03-2024'];
  return (
    <>
      <Header
        header="Dashboard"
      />
      <div className='admin-dashboard'>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><GiGlassCelebration /></i>
              </div>
              <div className='card-info'>
                <h6>Current Events</h6>
                50
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className='dashboard-card'>
              <div className='dashboard-icon'>
                <i><BsListNested /></i>
              </div>
              <div className='card-info'>
                <h6>Current Bookings</h6>
                50
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
                50
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
                  onChange={setTgl}
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
                    <Card.Title>Upcoming Events & Bookings</Card.Title>
                    <Card.Text>
                      No Upcoming Events & Bookings
                    </Card.Text>
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
                    <h4>50</h4>
                  </div>
                  <ProgressBar now={60} />;
                </div>
              </div>
              <div className='avlbl-card'>
                <div className='avlbl-1'>
                  <div className='avlbl-card-text'>
                    <h6>Availabe Room Today</h6>
                    <h4>50</h4>
                  </div>
                  <ProgressBar now={40} />;
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
