import React, { useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowDown } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { GiClockwork } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiTowel } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import "./CommonRoomDetails.css"

function CommonRoomDetails(props) {

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

  return (
    <>
      <div className='outer'>
        <div className='slider'>
          <OwlCarousel items={3} autoplay={true} loop={true} {...options} >
            <div data-overlay-dark="2">
              <img src={props.image1} alt="" />
            </div>
            <div data-overlay-dark="2">
              <img src={props.image2} alt="" />
            </div>
            <div data-overlay-dark="2">
              <img src={props.image3} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="arrow bounce text-center">
        <Link to="#" onClick={handleClick}>
          <i><FaArrowDown /></i>
        </Link>
      </div>
      <div ref={DetailRef} className='rooms-page section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">Luxury Hotel</div>
              <div className="section-title">{props.title}</div>
            </div>
            <div className="col-md-8">
              <p className="mb-30">
                Hotel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc
                volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion
                vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis
                lacus gravida eros ut turpis interdum ornare.
              </p>
              <p className="mb-30">
                Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur
                arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem
                acer suscipit bibendum vulla facilisi nedeuter nunc volutpa mollis sapien velet
                conseyer turpeutionyer masin libero sempe mollis.
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
                <div className="col-md-12">
                  <div className="butn-dark mt-15 mb-30">
                    <Link to="#">
                      <span>Check Now</span>
                    </Link>
                  </div>
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
                    <p>1-2 Persons</p>
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
                    <span className="flaticon-clock-1"><GiClockwork /></span>
                  </div>
                  <div className="page-list-text">
                    <p>200 sqft room</p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonRoomDetails
