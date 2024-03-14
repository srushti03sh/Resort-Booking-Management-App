import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Bookings from '../Bookings/Bookings'
import "./UserPanel.css"
import EditProfile from '../EditProfile/EditProfile'
import ContactUs from '../ContactUs/ContactUs'
import FAQ from '../FAQ/FAQ'

function UserPanel() {
    return (
        <>
            <div>
                <input type="checkbox" name="" id="menu-toggle" />
                <div className="soverlay">
                    <label htmlFor="menu-toggle"></label>
                </div>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='main-content'>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/Bookings" element={<Bookings />} />
                        <Route path="/EditProfile" element={<EditProfile />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/FAQ" element={<FAQ />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default UserPanel
