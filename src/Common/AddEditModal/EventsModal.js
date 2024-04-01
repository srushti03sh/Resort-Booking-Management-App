import React from 'react'
import { Modal } from 'react-bootstrap'

function EventsModal({ show, handleClose, handleSubmit, eId, setEname, ename }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>{eId ? "Edit Events" : "Add Events"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='add-form' >
            <input type='text' placeholder='Event Name' value={ename} onChange={(e) => setEname(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => {
            handleClose()
            setEname('')
          }}
            className='add-form-btn'>
            Close
          </button>
          <button onClick={handleSubmit} className='add-form-btn'>
            Save
          </button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default EventsModal
