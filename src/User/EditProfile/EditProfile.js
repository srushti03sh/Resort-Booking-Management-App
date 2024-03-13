import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { states } from "../../Data/StateCity/StateCity";
import { HiMiniMapPin } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./EditProfile.css"
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';

function EditProfile() {

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [npassword, setNpassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [mno, setMno] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const [profileData, setProfileData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/showProfile.php", {
      id: loginData.id
    });
    // console.log(response);
    const result = response.data.profileData;
    setProfileData(result)
    setEmail(result.email_id)
    setFname(result.fname)
    setLname(result.lname)
    setPassword(result.password)
    setMno(result.mno)
    setSelectedCity(result.city)
    setSelectedState(result.state)
  }

  useEffect(() => {
    fetchData();
  }, [loginData.id]);

  // Handle state change
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Clear selected city when state changes
  };

  // Handle city change
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleUpdate = async (e) => {
    // e.preventDefault();

    try {
      const response = await axios.post("http://localhost/Resort-API/manageProfile.php", {
        email: email,
        fname: fname,
        lname: lname,
        mno: mno,
        city: selectedCity,
        state: selectedState,
        password: password,
        newPassword: npassword
      });
      if (response.data.status === "yes") {
        toast.success('Data Updated successfully', {
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
        window.location.reload();
      } else if (response.data.status === "no") {
        toast.error('Something Went Wrong!!', {
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
      toast.error('Error Occured during update', {
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
                          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaUser /></i>
                          <input type='text' placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaUser /></i>
                          <input type='text' placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='text' placeholder='Current Password' value={password} onChange={(e) => setPassword(e.target.value)} readOnly />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='password' placeholder='New Password' value={npassword} onChange={(e) => setNpassword(e.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='edit-field'>
                          <i><FaLock /></i>
                          <input type='password' placeholder='Confirm New Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className="edit-field">
                          <i><BiSolidPhoneCall /></i>
                          <input type="text" placeholder="Mobile Number" value={mno} onChange={(e) => setMno(e.target.value)} />
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
                    <button className='edit-btn' onClick={handleUpdate}>
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
