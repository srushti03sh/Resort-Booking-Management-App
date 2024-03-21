import React from 'react'
import "./AdminPanel.css"
import Dashboard from '../Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AllEvents from '../AllEvents/AllEvents'
import AllBookings from '../AllBookings/AllBookings'
import AllUsers from '../AllUsers/AllUsers'
import Header from '../Header/Header'

function AdminPanel() {
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
                <Header/>
                <div className='main-content'>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/AllEvents" element={<AllEvents />} />
                        <Route path="/AllBookings" element={<AllBookings />} />
                        <Route path="/AllUsers" element={<AllUsers />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
