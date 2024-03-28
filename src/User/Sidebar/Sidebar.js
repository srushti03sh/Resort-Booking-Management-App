import React, { useState } from 'react'
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
import { VscFeedback } from "react-icons/vsc";
import { Modal } from 'react-bootstrap';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { GrClose } from "react-icons/gr";
import CnfModal from '../../Common/Modal/Modal';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [cnfModal, setCnfModal] = useState(false);

  const handleLogout = () => {
    setCnfModal(true)
    setModalShow(false)
  }

  const isActive = (path) => {
    return location.pathname === path;
  }

  const handleCancelConfirmation = (confirmed) => {
    if (confirmed) {
      localStorage.removeItem('loginData');
      navigate("/");
    } else {
      setCnfModal(false)
    }
  }

  return (
    <div className="sidebar-container">
      <CnfModal
        onShow={cnfModal}
        onConfirmation={handleCancelConfirmation}
        title={"Are you sure you want to logout?"}
      />
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
            <li className={isActive("/UserPanel/FeedbackPage") ? "active" : ""}>
              <Link to="/UserPanel/FeedbackPage">
                <span>
                  <VscFeedback />
                </span>
                <span>Feedback</span>
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
        <button className="btn-sidebar btn-block" onClick={() => setModalShow(true)}>Logout</button>
      </div>
      <Modal
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header>
          <Modal.Title>
            Feedback
          </Modal.Title>
          <div>
            <button onClick={handleLogout}><GrClose /></button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <FeedbackCard
            modalShow={modalShow}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Sidebar
