import React from 'react'
import { Modal } from 'react-bootstrap'

function FacilityModal({ fname, fdes, show, handleClose, handleSubmit, facilityId, setFdes, setFname, images, handleImageChange }) {

  const imagesArray = Array.isArray(images) ? images : [];

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
            <input type='file' name="images[]" accept="image/*" onChange={handleImageChange} />
          </form>
          {facilityId ?
            (imagesArray?.length > 0 && (
              <div className="selected-images">
                <p>Inserted Images:</p>
                <ul>
                  {imagesArray.map((imageName, index) => (
                    <img
                      key={index}
                      src={`http://localhost/Resort-API/uploads/${imageName}`}
                      alt={`Image ${index + 1}`}
                      style={{ maxWidth: '100px', border: "2px solid #aa8453", height: "65px", marginRight: "10px" }}
                    />
                  ))}
                </ul>
              </div>
            ))
            : ""}
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
