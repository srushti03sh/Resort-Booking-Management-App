import React, { useEffect, useState } from 'react'
import "./Facilities.css"
import axios from 'axios';
import Navbar from "../../Components/Home/Navbar/Navbar"
import Footer from "../../Components/Home/Footer/Footer"

function Facilities() {

  const [facilities, setFacilities] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/showFacility.php", {});
    const facilityDatas = response.data.facilityData;
    const enabledFacilities = facilityDatas.filter(facility => facility.Status === 'enable');
    setFacilities(enabledFacilities);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="services section-padding">
        <div className="container">
          {facilities.map((facility, index) => (
            <div className={`row ${index % 2 === 0 ? '' : 'reverse'}`} key={index}>
              <div className={`col-md-6 p-0 ${index % 2 === 0 ? '' : 'order-2'}`}>
                <div className="img">
                  {facility.images.split(',')[0] && (
                    <img
                      src={`http://localhost/Resort-API/uploads/${facility.images.split(',')[0]}`}
                      alt={`Image`}
                    />
                  )}
                </div>
              </div>
              <div className={`col-md-6 p-0 bg-darkblack valign ${index % 2 === 0 ? '' : 'order-1'}`}>
                <div className="content">
                  <div className="cont text-left">
                    <h4>{facility.facility_name}</h4>
                    <p>{facility.facility_des}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Facilities
