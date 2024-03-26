import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'
import "./AllRooms.css"
import axios from 'axios';
import { FaRegEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Slide, ToastContainer, toast } from 'react-toastify';
import CnfModal from '../../Common/Modal/Modal';
import moment from 'moment';

function AllRooms({ isChecked }) {

  const [allRoomData, setAllRoomData] = useState([]);
  const [show, setShow] = useState(false);
  const [rType, setRtype] = useState('');
  const [rDes, setRdes] = useState('');
  const [rCap, setRcap] = useState('');
  const [rNo, setRno] = useState('');
  const [rPrice, setRprice] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [roomIdToDelete, setRoomIdToDelete] = useState(null);
  const [edate, setEdate] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/showRooms.php", {
    });

    const roomData = response.data.roomData;
    setAllRoomData(roomData)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addRooms = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/addRoom.php", {
        rType: rType,
        rDes: rDes,
        rCap: rCap,
        tRoom: rNo,
        rPrice: rPrice
      });
      if (response.data.status === 'yes') {
        toast.success('Room Added Successfully!', {
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
        setRtype('');
        setRdes('');
        setRcap('');
        setRno('');
        setRprice('');
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

  const handleEventCancel = async (roomId) => {
    setRoomIdToDelete(roomId);
    setModalShow(true);
  };

  const handleCancelConfirmation = async (confirmed) => {
    if (confirmed) {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/disableRoom.php", {
          room_id: roomIdToDelete
        });
        if (response.data.status === 'yes') {
          toast.success('Room disable Successfully!', {
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

    setRoomIdToDelete(null);
  };

  const enableRoom = async (roomId) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/enableRoom.php", {
        room_id: roomId
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
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header
        isChecked={isChecked}
        header="Rooms"
      />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={!edate ? "Are you sure you want to disable this room?" : ''}
        equipped={edate}
        description={edate ? `You can't disbale room till ${edate}` : ''}
      />

      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>Add Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='add-form'>
            <input type='text' placeholder='Room Type' value={rType} onChange={(e) => setRtype(e.target.value)} />
            <textarea placeholder='Room Description' rows={3} value={rDes} onChange={(e) => setRdes(e.target.value)} />
            <input type='number' placeholder='Room Capacity' value={rCap} onChange={(e) => setRcap(e.target.value)} />
            <input type='number' placeholder='Total Room' value={rNo} onChange={(e) => setRno(e.target.value)} />
            <input type='text' placeholder='Price' value={rPrice} onChange={(e) => setRprice(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='add-form-btn'>
            Close
          </button>
          <button onClick={addRooms} className='add-form-btn'>
            Save
          </button>
        </Modal.Footer>
      </Modal>

      <div className='rooms-body'>
        <button className='add-room' onClick={handleShow}>
          <i ><IoMdAdd /></i>
          Add Room
        </button>
        <div className='booking-table'>
          {allRoomData.length > 0 ? (
            <Table striped bordered variant="dark" responsive>
              <thead>
                <tr>
                  <th>Room ID</th>
                  <th>Room Type</th>
                  <th>Room Description</th>
                  <th>Room Capacity</th>
                  <th>Total Room</th>
                  <th>Price</th>
                  <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {allRoomData.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.room_id}</td>
                    <td>{data.roomType}</td>
                    <td className="room-description">{data.room_des}</td>
                    <td>{data.room_capacity}</td>
                    <td>{data.total_room}</td>
                    <td>{data.price}</td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk'>
                        <CiEdit />
                      </i>
                    </td>
                    <td>
                      {(data.Status === 'enable') ?
                        <i className='cancel-bk' onClick={() => handleEventCancel(data.room_id)}>
                          <FaRegEye />
                        </i> :
                        <i className='cancel-bk' >
                          <FaRegEyeSlash onClick={() => enableRoom(data.room_id)} />
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

export default AllRooms
