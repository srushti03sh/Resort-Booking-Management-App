import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from 'axios';
import Navbar from "../../Components/Home/Navbar/Navbar"
import Footer from "../../Components/Home/Footer/Footer"

function AllRooms() {

  const [allRoomData, setAllRoomData] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/showRooms.php", {});
    const allRoom = response.data.roomData;
    const enabledRoom = allRoom.filter(room => room.Status === 'enable');
    setAllRoomData(enabledRoom);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='rooms1 section-padding'>
        <div className='container'>
          <div className="row">
            {allRoomData.map((data, index) => (
              <div className="col-md-4" key={index}>
                <Link to={`/CommonRoomDetails/${data.room_id}`}>
                  <div className="item">
                    <div className="position-re o-hidden">
                      {data.images.split(',')[0] && (
                        <img
                          src={`http://localhost/Resort-API/uploads/${data.images.split(',')[0]}`}
                          alt={`Image`}
                        />
                      )}
                    </div>
                    <span className="category">
                      <Link to={`/CommonRoomDetails/${data.room_id}`}>Book</Link>
                    </span>
                    <div className="con">
                      <h6>
                        <Link to={`/CommonRoomDetails/${data.room_id}`}><i><LiaRupeeSignSolid /></i>{data.price} / Night</Link>
                      </h6>
                      <h5>
                        <Link to={`/CommonRoomDetails/${data.room_id}`}>{data.roomType}</Link>
                      </h5>
                      <div className="line"></div>
                      <div className="row facilities">
                        <div className="col col-md-7 flex item-center">
                          <ul>
                            <li><i><MdOutlineBed /></i></li>
                            <li><i><PiBathtub /></i></li>
                            <li><i><MdOutlineFreeBreakfast /></i></li>
                            <li><i><GiTowel /></i></li>
                          </ul>
                        </div>
                        <div className="col col-md-5 text-end flex item-center">
                          <div className="permalink">
                            <Link to={`/CommonRoomDetails/${data.room_id}`}>Details <i><FaArrowRight /></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllRooms
