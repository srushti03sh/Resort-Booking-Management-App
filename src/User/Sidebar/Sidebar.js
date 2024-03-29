import React from 'react'
import "./Sidebar.css"
import slogo from "../../Images/logo.png"
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    navigate("/");
  }

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <div className="sidebar-container">
      <div className="brand">
        <Link to="/">
          <img src={slogo} alt="logo" />
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
            <li className={isActive("/UserPanel/Dashboard") ? "active" : ""}>
              <Link to="/UserPanel/Dashboard">
                <span>
                  <MdDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={isActive("/UserPanel/Bookings") ? "active" : ""}>
              <Link to="/UserPanel/Bookings">
                <span>
                  <FaListCheck />
                </span>
                <span>Bookings</span>
              </Link>
            </li>
            <li className={isActive("/UserPanel/Events") ? "active" : ""}>
              <Link to="/UserPanel/Events">
                <span>
                  <FaListCheck />
                </span>
                <span>Events</span>
              </Link>
            </li>
            <li className={isActive("/UserPanel/CurrentBookings") ? "active" : ""}>
              <Link to="/UserPanel/CurrentBookings">
                <span>
                  <FaList />
                </span>
                <span>Upcoming Events / Bookings</span>
              </Link>
            </li>
            <li className={isActive("/UserPanel/FAQ") ? "active" : ""}>
              <Link to="/UserPanel/FAQ">
                <span>
                  <FaFileCircleQuestion />
                </span>
                <span>F.A.Q</span>
              </Link>
            </li>
            <li className={isActive("/UserPanel/ContactUs") ? "active" : ""}>
              <Link to="/UserPanel/ContactUs">
                <span>
                  <FaPhoneAlt />
                </span>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn-sidebar btn-block" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar
