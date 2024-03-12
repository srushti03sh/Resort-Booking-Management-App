import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'
import logo from "../../Images/logo.png"
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import "./Sidebar.css"

function Sidebar1() {

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <Sidebar collapsed={menuCollapse} collapsedWidth="70px">
                <div onClick={menuIconClick}>
                    {!menuCollapse ? (
                        <>
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                            <div className='closemenu'>
                                <IoIosArrowDropleftCircle />
                            </div>
                        </>
                    ) : (
                        <div className='menu-logo'>
                            <CgMenuGridO />
                        </div>
                    )}
                </div>
                <Menu>
                    <MenuItem component={<Link to="/Dashboard" />}>
                        <i className='list-icon'><MdDashboard /></i>
                        Dashboard
                    </MenuItem>
                    <MenuItem component={<Link to="/Bookings" />}>
                        <i className='list-icon'><FaListCheck /></i>
                        Bookings
                    </MenuItem>
                    <MenuItem component={<Link to="/Settings" />}>
                        <i className='list-icon'><IoMdSettings /></i>
                        Settings
                    </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}

export default Sidebar1
