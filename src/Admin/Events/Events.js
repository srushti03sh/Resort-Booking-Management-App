import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Slide, toast } from 'react-toastify';
import Header from '../Header/Header';
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import CnfModal from '../../Common/Modal/Modal';
import EventsModal from '../../Common/AddEditModal/EventsModal';
import moment from 'moment';
import Toast from '../../Common/Toast/Toast';
import ThemeModal from '../../Common/AddEditModal/ThemeModal';

function Events({ isChecked }) {

  const [filter, setFilter] = useState('All');
  const [allEvents, setAllEvents] = useState([]);
  const [ename, setEname] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [eId, setEId] = useState('');
  const [show, setShow] = useState(false);
  const [eIdToDelete, seteIdToDelete] = useState('')
  const [edate, setEdate] = useState('');
  const [showThemeModal, setShowThemeModal] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null);
  const [tcap, setTcap] = useState('');
  const [tdes, setTdes] = useState('');
  const [tprice, setTprice] = useState('');
  const [tname, setTname] = useState('');
  const [tid, setTid] = useState('');
  const [images, setImages] = useState("");
  const maxImageCount = 3; // Set your desired maximum image count here

  const handleClose = () => {
    setShow(false)
    setEId(null)
    setShowThemeModal(false)
    // setEname('');
  };

  const handleShow = () => setShow(true);

  const handleEdit = async (eid) => {
    handleShow();
    setEId(eid)
  };

  const imagesArray = typeof images === 'string' ? images.split(',') : images;

  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > maxImageCount) {
      alert(`Please select no more than ${maxImageCount} images.`);
      e.target.value = null; // Clear the file input
      return;
    }
    setImages(selectedFiles);
  };

  const handleEventCancel = async (eid) => {
    seteIdToDelete(eid);
    setModalShow(true);
  };

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/ManageEvents/showEvents.php", {
    });

    const eventData = response.data.eventData;
    setAllEvents(eventData)
    // console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExtraServices = () => {
    setShowThemeModal(true);
  };

  const handleSaveStatus = (status) => {
    setSaveStatus(status);
  };
  const addEvent = async () => {
    // console.log(saveStatus);
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageEvents/addEvents.php", {
        ename: ename,
      });
      if (response.data.status === 'yes') {
        toast.success('Event Added Successfully!', {
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
        addTheme();
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
  }

  const addTheme = async () => {
    try {
      const formData = new FormData();
      formData.append('tname', tname);
      formData.append('tprice', tprice);
      formData.append('tdes', tdes);
      formData.append('tcap', tcap);
      formData.append('ename', ename);

      for (let i = 0; i < images.length; i++) {
        formData.append('images[]', images[i]);
      }

      const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/addThemes.php", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.status === 'yes') {
        toast.success('Theme Added Successfully!', {
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
        // Reset form fields and image state after successful upload
        handleClose();
        fetchData();
        setTname('');
        setTprice('');
        setTdes('');
        setTcap('');
        setEname('');
        setImages([]);
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
    } catch (error) {
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
      console.log("error", error);
    }
  }
  useEffect(() => {
    if (saveStatus === 'success') {
      addEvent();
    }
  }, [saveStatus]);



  const editExtraServices = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageEvents/editEvents.php", {
        ename: ename,
        eid: eId
      });
      if (response.data.status === 'yes') {
        toast.success('Event edited Successfully!', {
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
        setEname('');
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
        const response = await axios.post("http://localhost/Resort-API/Admin/ManageEvents/disableEvents.php", {
          eid: eIdToDelete
        });
        if (response.data.status === 'yes') {
          toast.success('Event disable Successfully!', {
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
          setEdate('');
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
        else if (response.data.status === 'equipped') {
          setModalShow(true);
          setEdate(moment(response.data.edate).format('DD-MM-YYYY'));
        }
        fetchData();
      } catch (error) {
        console.error("Error disabling room:", error);
      }
    } else {
      setModalShow(false);
      setEdate('');
    }
    seteIdToDelete(null);
  };

  const enableService = async (eid) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageEvents/enableEvents.php", {
        eid: eid
      });
      if (response.data.status === 'yes') {
        toast.success('Event enable Successfully!', {
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
      console.error("Error enabling Event:", error);
    }
  };

  const filterServices = allEvents?.length > 0 ? (
    filter === 'All' ?
      allEvents
      : allEvents.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  const handleSubmit = () => {
    if (eId) {
      editExtraServices()
    } else {
      addExtraServices()
    }
  }

  useEffect(() => {
    const selectedeId = allEvents.find((extra) => extra.event_id === eId)
    if (selectedeId) {
      setEname(selectedeId.event_name)
    } else {
      console.log("error");
    }
  }, [eId, allEvents])
  return (
    <>
      <Toast />
      <Header
        isChecked={isChecked} header="Events"
      />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={!edate ? "Are you sure you want to disable this event?" : ''}
        equipped={edate}
        description={edate ? `You can't disbale event till ${edate}` : ''}
      />
      <EventsModal
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        show={show}
        ename={ename}
        setEname={setEname}
      />
      <ThemeModal
        themeShow={showThemeModal}
        handleClose={() => setShowThemeModal(false)}
        nename={ename}
        onSaveStatus={handleSaveStatus}
        setTcap={setTcap}
        setTname={setTname}
        setTprice={setTprice}
        setTdes={setTdes}
        tcap={tcap}
        tid={tid}
        tname={tname}
        tdes={tdes}
        tprice={tprice}
        addEvent={addEvent}
        handleImageChange={handleImageChange}
        images={imagesArray}
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' onClick={handleShow}>
            <i ><IoMdAdd /></i>
            Add Event
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
          {filterServices.length > 0 ? (
            <Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Event Name</th>
                  <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterServices.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.event_id}</td>
                    <td>{data.event_name}</td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk' onClick={() => handleEdit(data.event_id)}>
                        <CiEdit />
                      </i>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.event_id)} >
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' onClick={() => enableService(data.event_id)}>
                          <FaRegEyeSlash />
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

export default Events
