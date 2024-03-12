import React, { useState } from 'react'
import Header from '../Header/Header'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { states } from "../../Data/StateCity/StateCity";
import { HiMiniMapPin } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./EditProfile.css"

function EditProfile() {

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Handle state change
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Clear selected city when state changes
  };

  // Handle city change
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <Header
        header="Manage profile"
      />
      <div className='edit-profile'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='edit-form'>
                <form>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><MdEmail /></i>
                          <input type='text' placeholder='Email' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaUser /></i>
                          <input type='text' placeholder='First Name' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaUser /></i>
                          <input type='text' placeholder='Last Name' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='text' placeholder='Current Password' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='text' placeholder='New Password' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='text' placeholder='Confirm New Password' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className="edit-field">
                          <i><BiSolidPhoneCall /></i>
                          <input type="text" placeholder="Mobile Number" />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className="edit-select">
                          <i><HiMiniMapPin /></i>
                          <select value={selectedState} onChange={handleStateChange}>
                            <option value="" disabled>Select State</option>
                            {states.map((state, index) => (
                              <option key={index} value={state.name}>{state.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className="edit-select">
                          <i><HiMiniMapPin /></i>
                          <select value={selectedCity} onChange={handleCityChange}>
                            <option value="" disabled>Select a state first</option>
                            {selectedState &&
                              states.find(state => state.name === selectedState).cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='edit-btn-div'>
                    <button className='edit-btn'>
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
