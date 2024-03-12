import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./BookingPage.css"

function BookingPage() {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div className='booking'>
        <div className='container'>
          <span className='scircle'></span>
          <span className='bcircle'></span>
          <div className='booking-form col-md-10'>
            <div className='col-md-12 text-center form-head'>
              <div className='section-title'>
                Book Now
              </div>
              <div className='line'></div>
            </div>
            <form>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    <input type='text' placeholder='Email' />
                  </div>
                  <div className='col-md-6'>
                    <input type='text' placeholder='Mobile No.' />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
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
                  <div className='col-md-6'>
                    <input type='number' placeholder='No. of Guest' />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
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
                  <div className='col-md-6'>
                    <input type='number' placeholder='No. of Room' />
                  </div>
                </div>
              </div>
              <div className='btn-outer'>
                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                  <button className='book-btn'>
                    confirm booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default BookingPage
