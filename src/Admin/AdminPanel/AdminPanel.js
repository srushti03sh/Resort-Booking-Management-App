import React from 'react'
import "./AdminPanel.css"
import Dashboard from '../Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'

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
                <div className='main-content'>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
