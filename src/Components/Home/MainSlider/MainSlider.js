import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import "./MainSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowDown } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import WOW from "wowjs";
import { Homeslider } from "../../../Data/Data"

const MainSlider = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []
  );

  const options = {
    responsiveClass: true,
    smartSpeed: 600,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,

      }
    }
  };

  const Aboutref = useRef(null);
  const handleClick = () => {
    if (Aboutref.current) {
      Aboutref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            {
              Homeslider.map((data, index) => (
                <div data-overlay-dark="3" key={index}>
                  <img src={data.src} alt="" />
                  <div className="v-middle caption overlay">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h4 className="wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            {data.subTitle}
                          </h4>
                          <h1 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                            {data.title}
                          </h1>
                          <div className="butn-dark wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".9s">
                            <Link to="/AllRooms"><span>Rooms & Suites</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </OwlCarousel>
        </div>
      </div>
      <div className="reservation">
        <Link to="tel:8551004444">
          <div className="icon d-flex justify-content-center align-items-center">
            <i><FiPhoneCall /></i>
          </div>
          <div className="call"><span>855 100 4444</span> <br />Reservation</div>
        </Link>
      </div>
      <div className="arrow bounce text-center">
        <Link to="#" onClick={handleClick}>
          <i><FaArrowDown /></i>
        </Link>
      </div>
      <About Aboutref={Aboutref} />
    </>
  )
}

export default MainSlider
