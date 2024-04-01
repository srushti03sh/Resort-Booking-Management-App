import React, { useState } from 'react'
import "./AdminPanel.css"
import Dashboard from '../Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AllEvents from '../AllEvents/AllEvents'
import AllBookings from '../AllBookings/AllBookings'
import AllUsers from '../AllUsers/AllUsers'
import AllRooms from '../AllRooms/AllRooms'
import AllFacilities from '../AllFacilities/AllFacilities'
import ExtraServices from '../ExtraServices/ExtraServices'
import Testimonial from '../Testimonial/Testimonial'
import SusUsers from '../SusUsers/SusUsers'
import Events from '../Events/Events'
import Themes from '../Themes/Themes'

function AdminPanel() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div>
        <input type="checkbox" name="" id="menu-toggle" checked={isChecked}
          onChange={handleCheckboxChange} />
        <div className="soverlay">
          <label htmlFor="menu-toggle"></label>
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard isChecked={isChecked} />} />
            <Route path="/AllEvents" element={<AllEvents isChecked={isChecked} />} />
            <Route path="/AllBookings" element={<AllBookings isChecked={isChecked} />} />
            <Route path="/AllUsers" element={<AllUsers isChecked={isChecked} />} />
            <Route path="/SusUsers" element={<SusUsers isChecked={isChecked} />} />
            <Route path="/AllRooms" element={<AllRooms isChecked={isChecked} />} />
            <Route path="/AllFacilities" element={<AllFacilities isChecked={isChecked} />} />
            <Route path="/ExtraServices" element={<ExtraServices isChecked={isChecked} />} />
            <Route path="/Testimonial" element={<Testimonial isChecked={isChecked} />} />
            <Route path="/Events" element={<Events isChecked={isChecked} />} />
            <Route path="/Themes" element={<Themes isChecked={isChecked} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminPanel
