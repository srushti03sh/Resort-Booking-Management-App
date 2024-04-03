import React from 'react'
import { Modal } from 'react-bootstrap'

function ExtraServicesModal({ show, handleClose, handleSubmit, eId, setEdonts, setEdos, setEprice, setEname, ename, eprice, edos, edonts, images, handleImageChange }) {

  const imagesArray = Array.isArray(images) ? images : [];
  // console.log(imagesArray);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Modal.Title>{eId ? "Edit Extra Services" : "Add Extra Services"}</Modal.Title>
          <div style={{
            color: "#aa8453",
            fontSize: "14px"
          }}>Enter Do's & Don'ts separated by comma ( , ) </div>
        </Modal.Header>
        <Modal.Body>
          <form className='add-form' >
            <input type='text' placeholder='Extra Services Name' value={ename} onChange={(e) => setEname(e.target.value)} />
            <input type='text' placeholder='Extra Services Price' value={eprice} onChange={(e) => setEprice(e.target.value)} />
            <textarea placeholder="Facility Do's" Do rows={3} value={edos} onChange={(e) => setEdos(e.target.value)} />
            <textarea placeholder="Facility Don'ts" Do rows={3} value={edonts} onChange={(e) => setEdonts(e.target.value)} />
            <input type='file' name="images[]" accept="image/*" onChange={handleImageChange} />
          </form>
          {eId ?
            (imagesArray?.length > 0 && (
              <div className="selected-images">
                <p>Inserted Image:</p>
                <img
                  src={`http://localhost/Resort-API/uploads/${imagesArray[0]}`}
                  alt="Inserted Image"
                  style={{ maxWidth: '100px', border: "2px solid #aa8453", height: "65px" }}
                />
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
      </Modal >
    </>
  )
}

export default ExtraServicesModal
