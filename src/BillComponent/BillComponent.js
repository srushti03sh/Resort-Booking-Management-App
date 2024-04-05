import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { IoMdClose } from "react-icons/io";
import Logo1 from '../newImages/logo.png'
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import "./BillComponent.css"

function BillComponent({ billShow, setBillShow, rno, rType }) {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [fullscreen, setFullscreen] = useState(true);
  const componentRef = useRef();
  const [printing, setPrinting] = useState(false);
  // Get today's date
  const today = moment();

  // Format the date
  const formattedDate = today.format("Do MMM YYYY");

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setPrinting(true);
    },
    onAfterPrint: () => {
      setPrinting(false);
    },
  });

  return (
    <>
      <Modal show={billShow} fullscreen={fullscreen} >
        <div className='bill-component' ref={componentRef}>
          <Modal.Header>
            <div className='bill-head'>
              <div>
                <img src={Logo1} className='logo-img' alt=""></img>
              </div>
              <div>
                {!printing && (
                  <i onClick={(e) => setBillShow(false)}>
                    <IoMdClose />
                  </i>
                )}
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className='bill-body'>
              <div className='body-head'>
                <div className='body-name'>
                  <div>{loginData.fnameLogin}  {loginData.lnameLogin}</div>
                  <div>Thank You For Booking</div>
                </div>
                <div className='bill-head-title'>
                  <div>INVOICE</div>
                  <div className='bill-date'>Date: {formattedDate}</div>
                </div>
              </div>
              <div className='des-title'>
                <div>
                  Description
                </div>
                <div>
                  Quantity
                </div>
                <div>
                  Price
                </div>
              </div>
              <div className='des-body'>
                <div>
                  {rType}
                </div>
                <div>
                  {rno}
                </div>
                <div>
                  Price
                </div>
              </div>
            </div>
          </Modal.Body>
          <div className='bill-footer'>
            <div>Have A Nice Day</div>
            <div>
              {!printing && (
                <button onClick={handlePrint}>Print</button>
              )}
            </div>
          </div>
        </div >
      </Modal>
    </>
  )
}

export default BillComponent
