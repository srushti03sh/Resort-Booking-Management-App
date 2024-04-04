import React from 'react'
import { Modal } from 'react-bootstrap'

function RoomModal({ roomId, handleClose, images, handleSubmit, setRno, rNo, setRcap, rCap, handleImageChange, setRdes, rDes, setRtype, rType, setRprice, rPrice, show }) {

  const imagesArray = Array.isArray(images) ? images : [];

  const handleImageChangeRestricted = (e) => {
    const selectedImages = Array.from(e.target.files);

    // Check if number of selected images is exactly 3
    if (selectedImages.length === 3) {
      handleImageChange(e);
    } else {
      // Reset the input field if number of images is not 3
      e.target.value = null;
      alert("Please select exactly 3 images.");
    }
  };
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
        <form className='add-form' encType="multipart/form-data" >
          <input type='text' placeholder='Room Type' value={rType} onChange={(e) => setRtype(e.target.value)} />
          <textarea placeholder='Room Description' rows={3} value={rDes} onChange={(e) => setRdes(e.target.value)} />
          <input type='number' placeholder='Room Capacity' value={rCap} onChange={(e) => setRcap(e.target.value)} />
          <input type='number' placeholder='Total Room' value={rNo} onChange={(e) => setRno(e.target.value)} />
          <input type='text' placeholder='Price' value={rPrice} onChange={(e) => setRprice(e.target.value)} />
          <input type='file' name="images[]" onChange={handleImageChangeRestricted} accept="image/*" multiple />
        </form>
        {roomId ? (
          imagesArray?.length > 0 && (
            <div className="selected-images">
              <p>Inserted Images:</p>
              {imagesArray.map((imageName, index) => (
                <img
                  key={index}
                  src={`http://localhost/Resort-API/uploads/${imageName}`}
                  alt={`Image ${index + 1}`}
                  style={{ maxWidth: '100px', border: "2px solid #aa8453", height: "65px", marginRight: "10px" }}
                />
              ))}
            </div>
          )
        ) : ""}

      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleClose} className='add-form-btn'>
          Close
        </button>
        <button className='add-form-btn' onClick={handleSubmit}>
          Save
        </button>
      </Modal.Footer>
    </Modal>

  )
}

export default RoomModal
