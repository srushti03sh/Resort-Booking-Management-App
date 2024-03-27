import React from 'react'
import { Modal } from 'react-bootstrap'

function RoomModal({ roomId, handleClose, handleSubmit, setRno, rNo, setRcap, rCap, setRdes, rDes, setRtype, rType, setRprice, rPrice, show }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title>{roomId ? "Edit Room" : "Add Room"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='add-form' >
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
        <button onClick={handleSubmit} className='add-form-btn'>
          Save
        </button>
      </Modal.Footer>
    </Modal>

  )
}

export default RoomModal
