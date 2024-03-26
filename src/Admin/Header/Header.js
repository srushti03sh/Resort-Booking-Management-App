import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import Male from "../../Images/man.png"
import Female from "../../Images/human.png"
import Other from "../../Images/user.png"
import { Link } from 'react-router-dom';
import "./Header.css"

function Header({ isChecked, header }) {

    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', stickHeader);
        return () => window.removeEventListener('scroll', stickHeader);
    }, []);

    const stickHeader = () => {
        let windowHeight = window.scrollY;
        windowHeight > 180 ? setStickyClass('sticky-header') : setStickyClass('');
    };

    return (
        <>
            <div className={`${isChecked ? 'width' : 'half-width'} header-wrapper ${stickyClass}`}>
                <div className='header-inner'>
                    <div className='header'>
                        <label htmlFor="menu-toggle">
                            <span className="las la-bars"><RiMenu3Fill /></span>
                        </label>
                        <div className="header-title">
                            <h4>{header}</h4>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
