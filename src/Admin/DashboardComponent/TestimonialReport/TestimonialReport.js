import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import "./TestimonialReport.css"
import { FaStar } from "react-icons/fa";
import axios from 'axios';
<FaStar />

function TestimonialReport() {

  const [tReportData, setTReportData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/Dashboard/TestimonialReport.php", {});
    // console.log(response);
    const tReportDatas = response.data.tReportData;

    setTReportData(tReportDatas)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='tReport col-md-6'>
        <div className='tReport-card'>
          <div className='tReport-top'>
            Review Report
          </div>
          {tReportData.map((count, index) => (
            <div key={index} className='tReport-bar'>
              <div className='tReport-count'>
                <span>{index + 1}</span> {/* Rating index starts from 1 */}
                <i><FaStar /></i>
              </div>
              <ProgressBar now={(parseInt(count) * 100 / tReportData.reduce((acc, val) => acc + parseInt(val), 0)).toFixed(1)} />
              <div className='tReport-count'>
                <span>{(parseInt(count) * 100 / tReportData.reduce((acc, val) => acc + parseInt(val), 0)).toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TestimonialReport
