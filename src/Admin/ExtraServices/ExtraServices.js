import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';
import ExtraServicesModal from '../../Common/AddEditModal/ExtraServicesModal';
import CnfModal from '../../Common/Modal/Modal';
import Toast from '../../Common/Toast/Toast';

function ExtraServices({ isChecked }) {

  const [filter, setFilter] = useState('All');
  const [allServices, setAllServices] = useState([]);
  const [ename, setEname] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [eprice, setEprice] = useState('');
  const [edos, setEdos] = useState('');
  const [edonts, setEdonts] = useState('');
  const [show, setShow] = useState(false);
  const [eId, setEId] = useState('');
  const [eIdToDelete, seteIdToDelete] = useState('')
  const [images, setImages] = useState("");
  const maxImageCount = 3;

  const handleClose = () => {
    setShow(false)
    setEId(null)
    setEname('');
    setEprice('');
    setEdos('');
    setEdonts('');
  };

  const imagesArray = typeof images === 'string' ? images.split(',') : images;

  const handleShow = () => setShow(true);

  const handleEdit = async (eid) => {
    handleShow();
    setEId(eid)
  };

  const handleEventCancel = async (eid) => {
    seteIdToDelete(eid);
    setModalShow(true);
  };

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/ExtraServices/showExtraServices.php", {
    });

    const servicesDatas = response.data.servicesData;
    setAllServices(servicesDatas)
    // console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > maxImageCount) {
      alert(`Please select no more than ${maxImageCount} images.`);
      e.target.value = null; // Clear the file input
      return;
    }
    setImages(selectedFiles);
  };

  const addExtraServices = async () => {

    try {
      const formData = new FormData();
      formData.append('ename', ename);
      formData.append('eprice', eprice);
      formData.append('edos', edos);
      formData.append('edonts', edonts);

      for (let i = 0; i < images.length; i++) {
        formData.append('images[]', images[i]);
      }

      const response = await axios.post("http://localhost/Resort-API/Admin/ExtraServices/addExtraServices.php", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.status === 'yes') {
        toast.success('Extra Service Added Successfully!', {
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
        setEdonts('');
        setEdos('');
        setEname('');
        setEprice('');
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
  };

  const editExtraServices = async () => {
    try {
      const formData = new FormData();
      formData.append('ename', ename);
      formData.append('eprice', eprice);
      formData.append('edos', edos);
      formData.append('edonts', edonts);
      formData.append('eid', eId);

      for (let i = 0; i < images.length; i++) {
        formData.append('images[]', images[i]);
      }
      const response = await axios.post("http://localhost/Resort-API/Admin/ExtraServices/editExtraServices.php", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.status === 'yes') {
        toast.success('Extra Service edited Successfully!', {
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
        setEdonts('');
        setEdos('');
        setEname('');
        setEprice('');
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
        const response = await axios.post("http://localhost/Resort-API/Admin/ExtraServices/disableExtraServices.php", {
          eid: eIdToDelete
        });
        if (response.data.status === 'yes') {
          toast.success('Extra service disable Successfully!', {
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
        console.error("Error disabling extra service:", error);
      }
    } else {
      setModalShow(false);
    }
    seteIdToDelete(null);
  };

  const enableService = async (eid) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/ExtraServices/enableExtraServices.php", {
        eid: eid
      });
      if (response.data.status === 'yes') {
        toast.success('Extra service enable Successfully!', {
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
      console.error("Error enabling Extra service:", error);
    }
  };

  const filterServices = allServices?.length > 0 ? (
    filter === 'All' ?
      allServices
      : allServices.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  const handleSubmit = () => {
    if (eId) {
      editExtraServices()
    } else {
      addExtraServices()
    }
  }

  useEffect(() => {
    const selectedeId = allServices.find((extra) => extra.extraServices_id === eId)
    if (selectedeId) {
      setEname(selectedeId.extraServices_name)
      setEprice(selectedeId.extraServices_price)
      setEdos(selectedeId.extraServices_dos)
      setEdonts(selectedeId.extraServices_donts)
      const eImages = selectedeId.images
      setImages(eImages);
    } else {
      console.log("error");
    }
  }, [eId, allServices])

  return (
    <>
      <Toast />
      <Header
        isChecked={isChecked} header="Extra Services"
      />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={"Are you sure you want to disable this extra services?"}
      />
      <ExtraServicesModal
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        show={show}
        ename={ename}
        eprice={eprice}
        edos={edos}
        edonts={edonts}
        setEname={setEname}
        setEprice={setEprice}
        setEdos={setEdos}
        setEdonts={setEdonts}
        eId={eId}
        handleImageChange={handleImageChange}
        images={imagesArray}
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' onClick={handleShow}>
            <i ><IoMdAdd /></i>
            Add Extra Services
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
                  <th>Extra Services ID</th>
                  <th>Extra Services Name</th>
                  <th>Extra Services Price </th>
                  <th>Extra Services Do's</th>
                  <th>Extra Services Don'ts</th>
                  <th style={{ textAlign: "center" }}>Images</th>
                  <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterServices.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.extraServices_id}</td>
                    <td>{data.extraServices_name}</td>
                    <td>{data.extraServices_price} / day</td>
                    <td className="room-description">{data.extraServices_dos}</td>
                    <td className="room-description">{data.extraServices_donts}</td>
                    <td style={{ textAlign: "center" }}>
                      {data.images.split(',')[0] && (
                        <img
                          src={`http://localhost/Resort-API/uploads/${data.images.split(',')[0]}`}
                          alt={`Image`}
                          style={{ maxWidth: '100px', border: "2px solid #aa8453", height: "65px" }}
                        />
                      )}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk' onClick={() => handleEdit(data.extraServices_id)}>
                        <CiEdit />
                      </i>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.extraServices_id)} >
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' onClick={() => enableService(data.extraServices_id)}>
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

export default ExtraServices
