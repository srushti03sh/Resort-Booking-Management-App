import React from 'react'
import { Modal } from 'react-bootstrap'

function FacilityModal({ fname, fdes, show, handleClose, handleSubmit, facilityId, setFdes, setFname }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>{facilityId ? "Edit Facility" : "Add Facility"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='add-form' >
            <input type='text' placeholder='Facility Name' value={fname} onChange={(e) => setFname(e.target.value)} />
            <textarea placeholder='Facility Description' rows={3} value={fdes} onChange={(e) => setFdes(e.target.value)} />
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
    </>
  )
}

export default FacilityModal
