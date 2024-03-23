import React from 'react'
import slogo from "../../Images/logo.png"
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    navigate("/");
  }

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <>
      <div className="sidebar-container">
        <div className="brand">
          <Link to="/">
            <img src={slogo} />
          </Link>
        </div>
        <div className='sidebar-content'>
          <div className="sidebar-menu">
            <ul>
              <li className={isActive("/") ? "active" : ""}>
                <Link to="/">
                  <span>
                    <FaHome />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li className={isActive("/AdminPanel/Dashboard") ? "active" : ""}>
                <Link to="/AdminPanel/Dashboard">
                  <span>
                    <MdDashboard />
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={isActive("/AdminPanel/AllEvents") ? "active" : ""}>
                <Link to="/AdminPanel/AllEvents">
                  <span>
                    <GiGlassCelebration />
                  </span>
                  <span>Events</span>
                </Link>
              </li>
              <li className={isActive("/AdminPanel/AllBookings") ? "active" : ""}>
                <Link to="/AdminPanel/AllBookings">
                  <span>
                    <FaListCheck />
                  </span>
                  <span>Bookings</span>
                </Link>
              </li>
              <li className={isActive("/AdminPanel/AllUsers") ? "active" : ""}>
                <Link to="/AdminPanel/AllUsers">
                  <span>
                    <HiUsers />
                  </span>
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn-sidebar btn-block" onClick={handleLogout}>Logout</button>
        </div>
      </div >
    </>
  )
}

export default Sidebar
