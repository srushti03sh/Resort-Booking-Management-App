import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Bookings from '../Bookings/Bookings'
import "./UserPanel.css"
import EditProfile from '../EditProfile/EditProfile'
import FAQ from '../FAQ/FAQ'
import CurrentBookings from '../CurrentBookings/CurrentBookings'
import Events from '../Events/Events'
import FeedbackPage from '../FeedbackPage/FeedbackPage'

function UserPanel() {

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
                        <Route path="/Bookings" element={<Bookings isChecked={isChecked} />} />
                        <Route path="/Events" element={<Events isChecked={isChecked} />} />
                        <Route path="/EditProfile" element={<EditProfile isChecked={isChecked} />} />
                        <Route path="/FAQ" element={<FAQ isChecked={isChecked} />} />
                        <Route path="/FeedbackPage" element={<FeedbackPage isChecked={isChecked} />} />
                        <Route path="/CurrentBookings" element={<CurrentBookings isChecked={isChecked} />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default UserPanel
