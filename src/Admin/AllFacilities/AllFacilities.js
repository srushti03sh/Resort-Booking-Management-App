import React, { useEffect, useState } from 'react'
import "./AllFacilities.css"
import Header from '../Header/Header'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { FaRegEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

function AllFacilities({ isChecked }) {

  const [facilityData, setFacilityData] = useState([]);
  const [filter, setFilter] = useState('All');

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/showFacility.php", {
    });
    const facilityDatas = response.data.facilityData;
    setFacilityData(facilityDatas)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filterFacility = facilityData?.length > 0 ? (
    filter === 'All' ?
      facilityData
      : facilityData.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  return (
    <>
      <Header
        isChecked={isChecked} header="Facilities"
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' >
            <i ><IoMdAdd /></i>
            Add Facility
          </button>
          <div className='selection'>
            <div> Filter : </div>
            <div>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
        </div>
        <div className='booking-table'>
          {filterFacility.length > 0 ? (
            <Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Facility ID</th>
                  <th>Facility Name</th>
                  <th>Facility Description</th>
                  {/* <th style={{ textAlign: "center" }} colSpan={2}>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {filterFacility.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.facility_id}</td>
                    <td>{data.facility_name}</td>
                    <td className="room-description">{data.facility_des}</td>
                    {/* <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk'>
                        <CiEdit onClick={() => handleEdit(data.facility_id)} />
                      </i>
                    </td>
                    <td>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.facility_id)}>
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' >
                          <FaRegEyeSlash onClick={() => enableRoom(data.facility_id)} />
                        </i>
                      }
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className='no-data'>No data available to display!</div>
          )}
        </div>
      </div>
    </>
  )
}

export default AllFacilities
