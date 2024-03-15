import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import Male from "../../Images/man.png"
import Female from "../../Images/human.png"
import Other from "../../Images/user.png"
import { IoIosSettings } from "react-icons/io";
import "./Header.css"
import { Link } from 'react-router-dom';

function Header(props) {

    const loginData = JSON.parse(localStorage.getItem("loginData"));

    return (
        <>
            <div className="header-wrapper">
                <div className='header'>
                    <label htmlFor="menu-toggle">
                        <span className="las la-bars"><RiMenu3Fill /></span>
                    </label>
                    <div className="header-title">
                        <h4>{props.header}</h4>
                    </div>
                </div>
                <div className='pdata'>
                    <div className='userName'>
                        <h6>{loginData.fnameLogin} {loginData.lnameLogin}</h6>
                    </div>
                    <div>
                        {loginData.genderLogin === "Male" && <Link to="/UserPanel/EditProfile"><img src={Male} className='user-icon' /></Link>}
                        {loginData.genderLogin === "Female" && <Link to="/UserPanel/EditProfile"><img src={Female} className='user-icon' /></Link>}
                        {loginData.genderLogin === "Other" && <Link to="/UserPanel/EditProfile"> <img src={Other} className='user-icon' /></Link>}
                        <Link to="/UserPanel/EditProfile"><i><IoIosSettings /></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
