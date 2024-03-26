import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./BookingPage.css"
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../Components/Home/Navbar/Navbar';

function BookingPage() {

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const [show, setShow] = useState(false);
  const [dateRange, setDateRange] = useState([,]);
  const [startDate, endDate] = dateRange;
  const [roomData, setRoomData] = useState([]);
  const [mno, setMno] = useState('');
  const [email, setEmail] = useState(loginData.email);
  const [guest, setGuest] = useState('');
  const [rno, setRno] = useState('');
  const [rType, setRtype] = useState('');
  const [bookingData, setBookingData] = useState('');

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/User/showBookingForm.php", {
      id: loginData.id
    });
    const result = response.data.roomData;
    setRoomData(result)
    const lmno = response.data.mno;
    setMno(lmno)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (date) => {
    return date ? date.toLocaleDateString('en-CA') : '';
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/Resort-API/User/bookingForm.php", {
        email: email,
        mno: mno,
        chkin: formatDate(startDate),
        chkout: formatDate(endDate),
        rType: rType,
        rno: rno,
        guest: guest
      });
      setBookingData(response.data);
      if (response.data.status === "no") {
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
      } else if (response.data.status === "More") {
        toast.error('No capacity!', {
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
      } else if (response.data.status === "avlbl_msg") {
        setShow(true);
      } else if (response.data.status === "yes") {
        toast.success('Booking Successfull!', {
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
        setDateRange('');
        setGuest('');
        setRno('');
        setRtype('');
      }
    }
    catch {
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
      <Navbar />
      <div className='booking'>
        <div className='container'>
          <span className='scircle'></span>
          <span className='bcircle'></span>
          <div className='booking-form col-md-10'>
            <div className='col-md-12 text-center form-head'>
              <div className='section-title'>
                Book Rooms
              </div>
              <div className='line'></div>
            </div>
            <form>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
                  </div>
                  <div className='col-md-6'>
                    <input type='text' placeholder='Mobile No.' value={mno} onChange={(e) => setMno(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    <DatePicker
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(update) => {
                        setDateRange(update);
                      }}
                      showIcon={true}
                      toggleCalendarOnIconClick={true}
                      icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                      placeholderText="Checkin - Checkout Date"
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      calendarClassName="datepic" />
                  </div>
                  <div className='col-md-6'>
                    <input type='number' placeholder='No. of Guest' value={guest} onChange={(e) => setGuest(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    <select value={rType} onChange={(e) => setRtype(e.target.value)}>
                      <option value="" disabled selected>Room Type</option>
                      {roomData.map(option => (
                        <option key={option.roomType} value={option.roomType}>
                          {option.roomType} - ( Rs. {option.price} / day ) - ( Capacity : {option.room_capacity} Person )
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-md-6'>
                    <input type='number' placeholder='No. of Room' value={rno} onChange={(e) => setRno(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className='btn-outer col-md-12'>
                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                  <button className='book-btn' onClick={handleBooking}>
                    confirm booking
                  </button>
                </div>
              </div>
              <div className='events-link-outer'>
                <Link className='events-link' to="/EventBookingPage">Want to manage any events?</Link>
              </div>
            </form>
          </div>
        </div>
      </div >
      {
        bookingData.status === "avlbl_msg" && (
          <>
            <Modal show={show} onHide={() => setShow(false)} size="md"
              centered>
              <Modal.Header>
                <Modal.Title>Available Rooms</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {bookingData.avlbl_msg.map((data, index) => (
                  <div key={index}>
                    {Array.isArray(data) ? (
                      data.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))
                    ) : (
                      <div>{data}</div>
                    )}
                  </div>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button className='close-btn' onClick={() => setShow(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
      }
    </>
  )
}

export default BookingPage
