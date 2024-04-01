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
import moment from 'moment';
import Toast from '../../Common/Toast/Toast';
import ThemeModal from '../../Common/AddEditModal/ThemeModal';

function Themes({ isChecked }) {

  const [filter, setFilter] = useState('All');
  const [allThemes, setAllThemes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [edate, setEdate] = useState('');
  const [tcap, setTcap] = useState('');
  const [tdes, setTdes] = useState('');
  const [tprice, setTprice] = useState('');
  const [tname, setTname] = useState('');
  const [tid, setTid] = useState('');
  const [ename, setEname] = useState('');
  const [TidToDelete, setTidToDelete] = useState('')

  const handleClose = () => {
    setShow(false)
    setTid(null)
    setTname('')
    setTdes('')
    setTcap('')
    setTprice('')
    setEname('')
  };

  const handleShow = () => setShow(true);

  const handleEdit = async (tid) => {
    handleShow();
    setTid(tid)
  };

  const handleEventCancel = async (tid) => {
    setTidToDelete(tid);
    setModalShow(true);
  };

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/showThemes.php", {
    });

    const themeData = response.data.themeData;
    setAllThemes(themeData)
    // console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExtraServices = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/addThemes.php", {
        tname: tname,
        tprice: tprice,
        tdes: tdes,
        tcap: tcap,
        ename: ename
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
        fetchData();
        handleClose();
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

  const editExtraServices = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/editThemes.php", {
        tid: tid, tname: tname,
        tprice: tprice,
        tdes: tdes,
        tcap: tcap,
        ename: ename
      });
      if (response.data.status === 'yes') {
        toast.success('Theme edited Successfully!', {
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
        setTname('')
        setTdes('')
        setTcap('')
        setTprice('')
        setEname('')
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
        const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/disableThemes.php", {
          tid: TidToDelete
        });
        if (response.data.status === 'yes') {
          toast.success('Theme disable Successfully!', {
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
    setTidToDelete(null);
  };

  const enableService = async (tid) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ManageThemes/enableThemes.php", {
        tid: tid
      });
      if (response.data.status === 'yes') {
        toast.success('Theme enable Successfully!', {
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
      console.error("Error enabling Theme:", error);
    }
  };

  const filterServices = allThemes?.length > 0 ? (
    filter === 'All' ?
      allThemes
      : allThemes.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  const handleSubmit = () => {
    if (tid) {
      editExtraServices()
    } else {
      addExtraServices()
    }
  }

  useEffect(() => {
    const selectedeId = allThemes.find((extra) => extra.theme_id === tid)
    if (selectedeId) {
      console.log(selectedeId.event_name);
      setTname(selectedeId.theme_name)
      setTdes(selectedeId.theme_des)
      setTcap(selectedeId.theme_capacity)
      setTprice(selectedeId.theme_price)
      setEname(selectedeId.event_name)
    } else {
      console.log("error");
    }
  }, [tid, allThemes])

  return (
    <>
      <Toast />
      <Header
        isChecked={isChecked} header="Extra Services"
      />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={!edate ? "Are you sure you want to disable this theme?" : ''}
        equipped={edate}
        description={edate ? `You can't disbale theme till ${edate}` : ''}
      />
      <ThemeModal
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        show={show}
        setTcap={setTcap}
        setTname={setTname}
        setTprice={setTprice}
        setTdes={setTdes}
        setEname={setEname}
        ename={ename}
        tcap={tcap}
        tid={tid}
        tname={tname}
        tdes={tdes}
        tprice={tprice}
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' onClick={handleShow}>
            <i ><IoMdAdd /></i>
            Add Theme
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
                  <th>Theme ID</th>
                  <th>Theme Name</th>
                  <th>Theme Price</th>
                  <th>Theme Description</th>
                  <th>Event Name</th>
                  <th>Theme Capacity</th>
                  <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterServices.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.theme_id}</td>
                    <td>{data.theme_name}</td>
                    <td>{data.theme_price}</td>
                    <td className="room-description">{data.theme_des}</td>
                    <td>{data.event_name}</td>
                    <td>{data.theme_capacity}</td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk' onClick={() => handleEdit(data.theme_id)}>
                        <CiEdit />
                      </i>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.theme_id)} >
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' onClick={() => enableService(data.theme_id)} >
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

export default Themes
