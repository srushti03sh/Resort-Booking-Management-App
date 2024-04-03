import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

function ThemeModal({ handleSubmit, handleClose, show, nename, themeShow, setTcap, setTname, setTprice, setTdes, tcap, tname, tdes, tprice, ename, setEname, tid, onSaveStatus, handleImageChange, images }) {

  const [eventData, setEventData] = useState([]);

  const fetchEvent = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/EventsPage/EventTheme.php", {});
    const events = response.data.event;
    setEventData(events);
  };

  useEffect(() => {
    fetchEvent();
  }, []);


  const handleSave = async () => {
    try {
      // Send success message
      onSaveStatus('success'); // Pass save status to parent component

    } catch (error) {
      console.error("Error:", error);
      onSaveStatus('failed'); // Pass save status to parent component
    }
  };

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
    <>
      <Modal
        show={themeShow ? themeShow : show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>{tid ? "Edit Themes" : "Add Themes"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='add-form' >
            <input type='text' placeholder='Theme Name' value={tname} onChange={(e) => setTname(e.target.value)} />
            <input type='text' placeholder='Theme Price' value={tprice} onChange={(e) => setTprice(e.target.value)} />
            <input type='text' placeholder='Theme Description' value={tdes} onChange={(e) => setTdes(e.target.value)} />
            {!themeShow ? <select value={ename} onChange={(e) => setEname(e.target.value)}>
              <option value="" disabled selected>Event Type</option>
              {eventData.map(option => (
                <option key={option.event_name} value={option.event_name}>
                  {option.event_name}
                </option>
              ))}
            </select> :
              <input type='text' placeholder='Event Name' value={nename} readOnly />
            }
            <input type='text' placeholder='Theme Capacity' value={tcap} onChange={(e) => setTcap(e.target.value)} />
            <input type='file' name="images[]" onChange={handleImageChangeRestricted} accept="image/*" multiple />
          </form>
          {
            tid ?
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
              : ""
          }
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='add-form-btn'>
            Close
          </button>
          <button onClick={themeShow ? handleSave : handleSubmit} className='add-form-btn'>
            Save
          </button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default ThemeModal
