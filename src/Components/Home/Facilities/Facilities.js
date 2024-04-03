import React, { useEffect, useState } from 'react'
import "./Facilities.css"
import axios from 'axios';

function Facilities() {

  const [facilities, setFacilities] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/showFacility.php", {});
    const facilityDatas = response.data.facilityData;
    const enabledFacilities = facilityDatas.filter(facility => facility.Status === 'enable');
    setFacilities(enabledFacilities.slice(0, 6));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    facilities?.length > 0 ?
      (<div className='facilties section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">
                Our Services
              </div>
              <div className="section-title">
                Hotel Facilities
              </div>
            </div>
          </div>
          <div className="row">
            {
              facilities?.map((data, index) => (
                <div className="col-md-4" key={index}>
                  <div className="single-facility">
                    <h5>{data.facility_name}</h5>
                    <p>{data.facility_des}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>) : ""
  )
}

export default Facilities
