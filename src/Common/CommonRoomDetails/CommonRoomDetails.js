import React, { useEffect, useRef, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link, useParams } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowDown } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiTowel } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import "./CommonRoomDetails.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from 'axios';
import Navbar from "../../Components/Home/Navbar/Navbar"
import Footer from "../../Components/Home/Footer/Footer"

function CommonRoomDetails() {
  window.scrollTo(0, 0)
  const [rooms, setRooms] = useState([]);
  const [roomImages, setRoomImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    responsiveClass: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,

      }
    }
  };

  const DetailRef = useRef(null);
  const handleClick = () => {
    if (DetailRef.current) {
      DetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  let { id } = useParams();

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Common/roomDetails.php", {
      rid: id
    });

    const roomDatas = response.data.roomData;
    setRooms(roomDatas);
    console.log(roomDatas.roomType);
    const allImages = response.data.roomData.flatMap(room => room.images.split(','));
    setRoomImages(allImages);
    setLoading(false);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(rooms);

  return (
    <>
      <Navbar />
      <div className='outer'>
        <div className='slider'>
          <OwlCarousel items={3} autoplay={true} loop={true} {...options} >
            {roomImages.map((imageName, imgIndex) => (
              <div key={imgIndex} data-overlay-dark="3">
                <img
                  src={`http://localhost/Resort-API/uploads/${imageName}`}
                  alt={`Image ${imgIndex + 1}`}
                  loading='lazy'
                />
              </div>
            ))}
          </OwlCarousel>
        </div >
      </div >
      <div className="arrow bounce text-center">
        <Link to="#" onClick={handleClick}>
          <i><FaArrowDown /></i>
        </Link>
      </div>
      <div ref={DetailRef} className='rooms-page section-padding'>
        <div className="container">
          <div className="row">
            {rooms.map((data, index) => (
              <>
                <div className="col-md-12">
                  <span>
                    <i className="star-rating"></i>
                    <i className="star-rating"></i>
                    <i className="star-rating"></i>
                    <i className="star-rating"></i>
                    <i className="star-rating"></i>
                  </span>
                  <div className="section-subtitle">Luxury Hotel</div>
                  <div className="section-title">{data.roomType}</div>
                  <div className='room-price'>
                    <i><LiaRupeeSignSolid /></i>
                    {data.price} <span> / Night</span>
                  </div>
                </div>
                <div className="col-md-8">
                  <p className="mb-30">
                    {data.room_des}
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Check-in</h6>
                      <ul className="list-unstyled page-list mb-30">
                        <li>
                          <div className="page-list-icon">
                            <span className="ti-check"><FaCheck /></span>
                          </div>
                          <div className="page-list-text">
                            <p> Check-in from 9:00 AM - anytime</p>
                          </div>
                        </li>
                        <li>
                          <div className="page-list-icon">
                            <span className="ti-check"><FaCheck /></span>
                          </div>
                          <div className="page-list-text">
                            <p>Early check-in subject to availability</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6>Check-out</h6>
                      <ul className="list-unstyled page-list mb-30">
                        <li>
                          <div className="page-list-icon">
                            <span className="ti-check"><FaCheck /></span>
                          </div>
                          <div className="page-list-text">
                            <p>Check-out before noon</p>
                          </div>
                        </li>
                        <li>
                          <div className="page-list-icon">
                            <span className="ti-check"><FaCheck /></span>
                          </div>
                          <div className="page-list-text">
                            <p>Express check-out</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <h6>Special check-in instructions</h6>
                      <p>
                        Guests will receive an email 5 days before arrival with check-in
                        instructions; front desk staff will greet guests on arrival For
                        more details, please contact the property using the information on
                        the booking confirmation.
                      </p>
                    </div>
                    <div className="col-md-12">
                      <h6>Pets</h6>
                      <p>Pets not allowed</p>
                    </div>
                    <div className="col-md-12">
                      <h6>Children and extra beds</h6>
                      <p>
                        Children are welcome Kids stay free! Children stay free when using
                        existing bedding; children may not be eligible for complimentary breakfast
                        Rollaway/extra beds are available for $ 10 per day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 offset-md-1">
                  <h6>Amenities</h6>
                  <ul className="list-unstyled page-list mb-30">
                    <li>
                      <div className="page-list-icon">
                        <span className="flaticon-group"><IoPeopleSharp /></span>
                      </div>
                      <div className="page-list-text">
                        <p>1-{data.room_capacity} Persons</p>
                      </div>
                    </li>
                    <li>
                      <div className="page-list-icon">
                        <span className="flaticon-wifi"><IoWifi /></span>
                      </div>
                      <div className="page-list-text">
                        <p>Free Wifi</p>
                      </div>
                    </li>
                    <li>
                      <div className="page-list-icon">
                        <span className="flaticon-breakfast"><IoFastFoodOutline /></span>
                      </div>
                      <div className="page-list-text">
                        <p>Breakfast</p>
                      </div>
                    </li>
                    <li>
                      <div className="page-list-icon">
                        <span className="flaticon-towel"><GiTowel /></span>
                      </div>
                      <div className="page-list-text">
                        <p>Towels</p>
                      </div>
                    </li>
                    <li>
                      <div className="page-list-icon">
                        <span className="flaticon-swimming"><FaSwimmingPool /></span>
                      </div>
                      <div className="page-list-text">
                        <p>Swimming Pool</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CommonRoomDetails
