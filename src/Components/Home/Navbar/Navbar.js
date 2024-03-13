import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../Images/logo.png"
import Male from "../../../Images/man.png"
import Female from "../../../Images/human.png"
import Other from "../../../Images/user.png"
import { RiMenu4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import "./Navbar.css"

function Navbar() {
  const [stickyClass, setStickyClass] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShowDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${stickyClass}`}>
        <div className='container-fluid'>
          <div className='logo-wrapper'>
            <Link className='logo' to="#">
              <img src={Logo} className='logo-img' alt=""></img>
            </Link>
          </div>
          <div>
            <button className="navbar-toggler" type="button" onClick={handleShowNavbar}>
              <span className="navbar-toggler-icon">
                <i><RiMenu4Fill /></i>
              </span>
            </button>
            <Link to="/Login">
              <button className="navbar-toggler " type="button">
                <span className="navbar-toggler-icon">
                  <i><AiOutlineLogin /></i>
                </span>
              </button>
            </Link>
          </div>

          <div className={`navbar-collapse collapse ${showNavbar ? 'show' : ''}`}>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' to="/" role='button'>Home</Link>
              </li>
              <li className='nav-item' onClick={handleShowDropdown}>
                <Link className='nav-link'>
                  amenities
                  <i>
                    <IoIosArrowDown />
                  </i>
                </Link>
                <ul className={`dropdown ${showDropdown ? 'show' : ''}`}>
                  <li className="dropdown-link">
                    <Link to="/FitnessCenter">Fitness center</Link>
                  </li>
                  <li className="dropdown-link">
                    <Link to="/HealthClub">Health club & Pool</Link>
                  </li>
                  <li className="dropdown-link">
                    <Link to="/Games">Game Zone</Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/Restaurant">Restaurant</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/Spa">Spa</Link>
              </li>
              <li className='nav-item' onClick={handleShowDropdown1}>
                <Link className='nav-link'>
                  Events
                  <i>
                    <IoIosArrowDown />
                  </i>
                </Link>
                <ul className={`dropdown ${showDropdown1 ? 'show' : ''}`}>
                  <li className="dropdown-link">
                    <Link to="/Wedding">Wedding Vows</Link>
                  </li>
                  <li className="dropdown-link">
                    <Link to="/Birthday">Birthday Party</Link>
                  </li>
                  <li className="dropdown-link">
                    <Link to="/CorporateMeetings">Corporate Meetings</Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/Gallery">Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/FAQ">F.A.Q.</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/Contact">Contact</Link>
              </li>
            </ul>
            {!loginData ? <Link to="/Login">
              <button className='logbtn' >
                Login
              </button>
            </Link>
              : <>
                <Link to="/BookingPage">
                  <button className='logbtn' >
                    Book Now
                  </button>
                </Link>
                <Link to={loginData.roleLogin === "user" ? "/UserPanel/Dashboard" : "/AdminPanel/Dashboard"}>
                  {loginData.genderLogin === "Male" &&
                    <img src={Male} className='user' />
                  }
                  {loginData.genderLogin === "Female" &&
                    <img src={Female} className='user' />
                  }
                  {loginData.genderLogin === "Other" &&
                    <img src={Other} className='user' />
                  }
                </Link>
              </>
            }
          </div>
        </div >
      </nav >
    </>
  )
}

export default Navbar
