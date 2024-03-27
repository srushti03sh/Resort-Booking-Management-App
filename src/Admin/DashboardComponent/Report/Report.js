import React, { useEffect, useState } from 'react'
import "./Report.css"
import ReactApexChart from 'react-apexcharts';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';

function Report() {

  const [usedRoom, setUsedRoom] = useState(0);
  const [totRoom, setTotRoom] = useState(0);
  const [reportData, setReportData] = useState([]);

  const fetchReport = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/Dashboard/reportAdmin.php", {});

    const usedR = response.data.usedRoom;
    const totR = response.data.totRoom;
    const resultReport = response.data.reportData;
    setReportData(resultReport)
    setUsedRoom(usedR)
    setTotRoom(totR)
  }

  useEffect(() => {
    fetchReport();
  }, []);

  const [series, setSeries] = useState([
    {
      name: 'Total Booking',
      data: [31, 40, 28, 51, 42, 99, 100, 65]
    },
    {
      name: 'Cancel Bookings',
      // data: [reportData.map((item, index) => (
      //   item.reportData
      // ))]
      data: [20, 30, 80, 5, 25, 43, 10, 0]
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
        "2024-06-01",
        "2024-07-01",
        "2024-08-01"
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

  const useRoomNow = (usedRoom / totRoom) * 100;
  const avlRoomNow = ((totRoom - usedRoom) / totRoom) * 100;

  return (
    <>
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
                <ProgressBar now={avlRoomNow} />
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
    </>
  )
}

export default Report
