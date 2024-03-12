import React from 'react'
import "./Sidebar.css"
import slogo from "../../Images/logo.png"
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    navigate("/");
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
              <li><Link to="/UserPanel/Dashboard" className="active">
                <span>
                  <MdDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
              </li>
              <li><Link to="/UserPanel/Bookings">
                <span>
                  <FaListCheck />
                </span>
                <span>Bookings</span>
              </Link>
              </li>
            </ul>
          </div>
          <button className="btn-sidebar btn-block" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
