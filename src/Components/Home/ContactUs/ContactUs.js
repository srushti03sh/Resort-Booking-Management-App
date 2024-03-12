import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./ContactUs.css"

function ContactUs() {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='section-padding bg-img bg-fixed pb-0 contactus' data-overlay-dark="2">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30 mt-30">
            <p>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </p>
            <h5>
              Each of our guest rooms feature a private bath,
              wi-fi, cable television and include full breakfast.
            </h5>
            <div className="reservations mb-30">
              <div className="icon color-1">
                <span className="flaticon-call"><FiPhoneCall /></span>
              </div>
              <div className="text">
                <p className="color-1">
                  Reservation
                </p>
                <a className="color-1" href="tel:855-100-4444">
                  855 100 4444
                </a>
              </div>
            </div>
            <p>
              <i className="ti-check"><IoCheckmarkOutline /></i>
              <small>Call us, it's toll-free.</small>
            </p>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="booking-box">
              <div className="head-box">
                <h6>Rooms & Suites</h6>
                <h4>Hotel Booking Form</h4>
              </div>
              <form>
                <div className="col-md-12">
                  <DatePicker
                    // onChange={(date) => setDate(date)}
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
                <div className="row">
                  <div className="col-md-12">
                    <select>
                      <option value="" disabled selected>Room Type</option>
                      <option>
                        Deluxe Room
                      </option>
                      <option>
                        Double Room
                      </option>
                      <option>
                        Family Room
                      </option>
                      <option>
                        Superior Room
                      </option>
                      <option>
                        Junior Room
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn-form1-submit mt-15">Check Availability</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
