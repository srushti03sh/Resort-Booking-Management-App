import React, { useEffect, useState } from 'react'
import "./AllFacilities.css"
import Header from '../Header/Header'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { FaRegEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Slide, toast } from 'react-toastify';
import FacilityModal from '../../Common/AddEditModal/FacilityModal';
import Toast from '../../Common/Toast/Toast';
import CnfModal from '../../Common/Modal/Modal';

function AllFacilities({ isChecked }) {

  const [facilityData, setFacilityData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [fname, setFname] = useState('');
  const [fdes, setFdes] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [facilityId, setFacilityId] = useState('');
  const [show, setShow] = useState(false);
  const [facilityIdToDisable, setFacilityIdToDisable] = useState(null);

  const handleClose = () => {
    setShow(false)
    setFacilityId(null)
  };

  const handleShow = () => setShow(true);

  const handleEdit = async (facilityId) => {
    handleShow();
    setFacilityId(facilityId)
  };

  const handleEventCancel = async (facilityId) => {
    setModalShow(true);
    setFacilityIdToDisable(facilityId)
  };

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/showFacility.php", {
    });
    const facilityDatas = response.data.facilityData;
    setFacilityData(facilityDatas)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addFaciltity = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/addFacility.php", {
        fname: fname,
        fDes: fdes
      });
      if (response.data.status === 'yes') {
        toast.success('Facility Added Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        fetchData();
        handleClose();
        setFname('');
        setFdes('');
      } else if (response.data.status === 'no') {
        toast.error('Something Went Wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    } catch {
      toast.error('Something Went Wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      console.log("error");
    }
  };

  const editRoom = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/editFacility.php", {
        fname: fname,
        fDes: fdes,
        fid: facilityId
      });
      if (response.data.status === 'yes') {
        toast.success('Room edited Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        handleClose();
        fetchData();
        setFname('');
        setFdes('');
      } else if (response.data.status === 'no') {
        toast.error('Something Went Wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    } catch {
      toast.error('Something Went Wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      console.log("error");
    }
  };

  const handleCancelConfirmation = async (confirmed) => {
    if (confirmed) {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/disableFacility.php", {
          fid: facilityIdToDisable
        });
        if (response.data.status === 'yes') {
          toast.success('Facility disable Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          setModalShow(false);
        } else if (response.data.status === 'no') {
          toast.error('Something Went Wrong!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
        }
        fetchData();
      } catch (error) {
        console.error("Error disabling room:", error);
      }
    } else {
      setModalShow(false);
    }
  };

  const enableRoom = async (facilityId) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/FacilityPage/enableFacility.php", {
        fid: facilityId
      });
      if (response.data.status === 'yes') {
        toast.success('Room enable Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else if (response.data.status === 'no') {
        toast.error('Something Went Wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
      fetchData();
    } catch (error) {
      console.error("Error disabling room:", error);
    }
  };

  const filterFacility = facilityData?.length > 0 ? (
    filter === 'All' ?
      facilityData
      : facilityData.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  const handleSubmit = () => {
    if (facilityId) {
      editRoom()
    } else {
      addFaciltity()
    }
  }

  useEffect(() => {
    const selectedFacilityId = facilityData.find((room) => room.facility_id === facilityId)
    if (selectedFacilityId) {
      setFname(selectedFacilityId.facility_name)
      setFdes(selectedFacilityId.facility_des)
    } else {
      console.log("error");
    }
  }, [facilityId, facilityData])

  return (
    <>
      <Header
        isChecked={isChecked} header="Facilities"
      />
      <Toast />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={"Are you sure you want to disable this facility?"}
      />
      <FacilityModal
        fname={fname}
        fdes={fdes}
        setFname={setFname}
        setFdes={setFdes}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        show={show}
        facilityId={facilityId}
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' onClick={handleShow}>
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
                  <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterFacility.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.facility_id}</td>
                    <td>{data.facility_name}</td>
                    <td className="room-description">{data.facility_des}</td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk'>
                        <CiEdit onClick={() => handleEdit(data.facility_id)} />
                      </i>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.facility_id)}>
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' >
                          <FaRegEyeSlash onClick={() => enableRoom(data.facility_id)} />
                        </i>
                      }
                    </td>
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
