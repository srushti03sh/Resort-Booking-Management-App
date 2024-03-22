import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import Navbar from "../../Components/Home/Navbar/Navbar"
function EventBookingPage() {

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [startDate, setStartDate] = useState(null);
  const [mno, setMno] = useState('');
  const [email, setEmail] = useState(loginData.email);
  const [guest, setGuest] = useState('');
  const [eType, setEtype] = useState('');
  const [tType, setTtype] = useState('');
  const [eventData, setEventData] = useState([]);
  const [themeData, setThemeData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/showEventForm.php", {
      id: loginData.id
    });
    // console.log(response);
    const result = response.data.eventData;
    setEventData(result)
    const lmno = response.data.mno;
    setMno(lmno)
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleEventChange = async (e) => {

    try {
      const selectedEtype = e.target.value;
      console.log(selectedEtype);
      const response = await axios.post("http://localhost/Resort-API/showTheme.php", {
        eType: selectedEtype,
      });
      console.log(response);
      const events = response.data.themeData;
      setThemeData(events);
      console.log(themeData);
      setEtype(selectedEtype);
    } catch {
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

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const selectedEtype = e.target.value;
      console.log(selectedEtype);
      const response = await axios.post("http://localhost/Resort-API/eventForm.php", {
        email: email,
        mno: mno,
        event_date: moment(startDate).format('YYYY-MM-DD'),
        guest: guest,
        eType: eType,
        tType: tType
      });
      // console.log(response);
      if (response.data.status === "yes") {
        toast.success('Booking successful!', {
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
      } else if (response.data.status === "Not_avlbl") {
        toast.error('Not available!', {
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
        toast.error('Insufficient space!', {
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
      } else {
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
      }

    } catch {
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
                Book Events
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
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                      }}
                      showIcon={true}
                      toggleCalendarOnIconClick={true}
                      icon={<FaRegCalendarAlt fill="#aa8453" fontSize="17px" />}
                      placeholderText="Event Date"
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
                    <select value={eType} onChange={handleEventChange}>
                      <option value="" disabled selected>Event Type</option>
                      {eventData.map(option => (
                        <option key={option.event_name} value={option.event_name}>
                          {option.event_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-md-6'>
                    <select value={tType} onChange={(e) => setTtype(e.target.value)}>
                      <option value="" disabled selected>First choose Event Type</option>
                      {themeData.map(theme => (
                        <option key={theme.theme_name} value={theme.theme_name}>
                          {theme.theme_name}
                        </option>
                      ))}
                    </select>
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
                <Link className='events-link' to="/BookingPage">Want to book rooms?</Link>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default EventBookingPage
