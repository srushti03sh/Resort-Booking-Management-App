import React from 'react'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'
import "./AllRooms.css"
import { FaRegEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import CnfModal from '../../Common/Modal/Modal';
import AllRoomsLogic from '../../Hooks/AllRoomsLogic';
import Toast from '../../Common/Toast/Toast';
import RoomModal from '../../Common/AddEditModal/RoomModal';

function AllRooms({ isChecked }) {
  const { setRno, rNo, setRcap, rCap, setRdes, rDes, setRtype, rType, roomId, show, edate, modalShow, handleCancelConfirmation, handleClose, setRprice, rPrice, handleSubmit, handleShow, filter, setFilter, filterRooms, handleEdit, handleEventCancel, enableRoom } = AllRoomsLogic();

  return (
    <>
      <Toast />
      <Header isChecked={isChecked} header="Rooms" />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={!edate ? "Are you sure you want to disable this room?" : ''}
        equipped={edate}
        description={edate ? `You can't disbale room till ${edate}` : ''}
      />
      <RoomModal
        roomId={roomId}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        show={show}
        setRno={setRno}
        rNo={rNo}
        setRcap={setRcap}
        rCap={rCap}
        setRdes={setRdes}
        rDes={rDes}
        setRtype={setRtype}
        rType={rType}
        setRprice={setRprice}
        rPrice={rPrice}
      />
      <div className='rooms-body'>
        <div className='rooms-top'>
          <button className='add-room' onClick={handleShow}>
            <i ><IoMdAdd /></i>
            Add Room
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
          {filterRooms.length > 0 ? (
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
                {filterRooms.map((data, index) => (
                  <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                    <td>{data.room_id}</td>
                    <td>{data.roomType}</td>
                    <td className="room-description">{data.room_des}</td>
                    <td>{data.room_capacity}</td>
                    <td>{data.total_room}</td>
                    <td>{data.price}</td>
                    <td style={{ textAlign: "center" }}>
                      <i className='cancel-bk'>
                        <CiEdit onClick={() => handleEdit(data.room_id)} />
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
export default AllRooms;