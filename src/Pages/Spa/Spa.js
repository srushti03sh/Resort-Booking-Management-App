import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import spa from "../../Images/spa.jpg"
import spa2 from "../../Images/spa2.jpg"
import spa3 from "../../Images/spa3.jpg"
import spa4 from "../../Images/spa4.jpg"
import sc1 from "../../Images/sc1.jpg"
import sc2 from "../../Images/sc2.jpg"
import sc3 from "../../Images/sc3.jpg"
import sc4 from "../../Images/sc4.jpg"
import sc5 from "../../Images/sc5.jpg"
import sc6 from "../../Images/sc6.jpg"
import spic1 from "../../Images/spic1.jpg"
import spic2 from "../../Images/spic2.jpg"
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import "./Spa.css"

function Spa() {

  const options = {
    responsiveClass: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  const options1 = {
    responsiveClass: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 4,
      }
    }
  };

  const options2 = {
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 2,

      }
    },
  };
  const [count, setCount] = useState(0);

  const counter = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount(i);
      }, 10);
    }
  };

  useEffect(() => {
    counter(0, 100);
  }, []);

  const [count1, setCount1] = useState(0);

  const counter1 = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount1(i);
      }, 10);
    }
  };

  useEffect(() => {
    counter1(0, 50);
  }, []);


  return (
    <>
      <Navbar />
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            <div data-overlay-dark="3">
              <img src={spa} alt="" />
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Spa Center
                      </h4>
                      <h1>
                        Revitalize, Rejuvenate, Relax
                      </h1>
                      <div className='butn-dark'>
                        <Link to="#" ><span>Make Appointment</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-overlay-dark="3">
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Spa Center
                      </h4>
                      <h1>
                        Revitalize, Rejuvenate, Relax
                      </h1>
                      <div className="butn-dark">
                        <Link to="#"><span>Make Appointment</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={spa2} alt="" />
            </div>
            <div data-overlay-dark="3">
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Spa Center
                      </h4>
                      <h1>
                        Revitalize, Rejuvenate, Relax
                      </h1>
                      <div className="butn-dark">
                        <Link to="#"><span>Make Appointment</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={spa3} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className='spa-about section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-6'>
              <img src={spa4} className='mb-30' alt=""></img>
            </div>
            <div className='col-md-6 mb-30 spaa'>
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">The Cappa Luxury Hotel</div>
              <div className="section-title">The Ultimate Retreat</div>
              <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan
                vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit.
                Donec id velit ac arcu posuere blane.
              </p>
              <div className="row pt-3">
                <div className="col-6">
                  <div className="text-center counter">
                    <h3 id="stats-number">{count1}</h3>
                    <h6 className="text-uppercase">Spa Specialist</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center counter">
                    <h3 id="stats-number">{count}</h3>
                    <h6 className="text-uppercase">Happy Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spa-services section-padding'>
        <div className='container'>
          <div className='section-title'>Spa Service</div>
          <div className='col-md-12'>
            <OwlCarousel items={3} margin={30} loop={true} {...options1} autoplay={true} className='service-service'>
              <div className="spas" data-overlay-dark="3">
                <img src={sc1} />
                <div className='spa-text'>
                  <h4>Steam Bath</h4>
                </div>
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={sc2} />
                <div className='spa-text'>
                  <h4>Face Masking</h4>
                </div>
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={sc3} />
                <div className='spa-text'>
                  <h4>skin Care</h4>
                </div>
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={sc4} />
                <div className='spa-text'>
                  <h4>Body Massage</h4>
                </div>
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={sc5} />
                <div className='spa-text'>
                  <h4>Facial Therapy</h4>
                </div>
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={sc6} />
                <div className='spa-text'>
                  <h4>Cold Therapy</h4>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="section-padding ohrs">
        <div className="container">
          <div className="ohrs-section row">
            <div className='col-md-6'>
              <img src={spic1} alt="" />
            </div>
            <div className="ohrs-text col-md-6">
              <h3>Open Hours</h3>
              <h4>
                Find Peace in Paradise
              </h4>
              <p>
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
              </p>
              <p>
                <i><MdKeyboardArrowRight /></i><b> Mon - Fri :</b> 9:00 AM - 7:00 PM<br />
                <i><MdKeyboardArrowRight /></i><b> Saturday :</b> 9:00 AM - 6:00 PM<br />
                <i><MdKeyboardArrowRight /></i><b> Sunday :</b> Closed
              </p>
            </div>
          </div>
          <div className='ohrs-section-2 row section-padding'>
            <figure>
              <img src={spic2} alt="" />
            </figure>
            <div className="ohrs-text-2 col-md-8">
              <OwlCarousel items={2} margin={30} autoplay={true} loop={true} {...options2}>
                <div className="ohrs-pricing-card">
                  <div className="desc">
                    <div className="amount">$50<span>/ month</span></div>
                    <ul className="list-unstyled list">
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Full Body Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Deep Tissue Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Hot Stone Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Tissue Body Polish
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Foot & Nail Care
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ohrs-pricing-card">
                  <div className="desc">
                    <div className="amount">$30<span>/ month</span></div>
                    <ul className="list-unstyled list">
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Full Body Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Deep Tissue Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Hot Stone Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Tissue Body Polish
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Foot & Nail Care
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ohrs-pricing-card">
                  <div className="desc">
                    <div className="amount">$30<span>/ month</span></div>
                    <ul className="list-unstyled list">
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Full Body Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Deep Tissue Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Hot Stone Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Tissue Body Polish
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Foot & Nail Care
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ohrs-pricing-card">
                  <div className="desc">
                    <div className="amount">$15<span>/ month</span></div>
                    <ul className="list-unstyled list">
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Full Body Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Deep Tissue Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Hot Stone Massage
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Tissue Body Polish
                      </li>
                      <li>
                        <i><IoCheckmarkOutline /></i>
                        Foot & Nail Care
                      </li>
                    </ul>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div >
      {/* <CommonServices
                image5={sc1}
                image6={sc2}
                image7={sc3}
                image8={sc4}
                image9={sc5}
                image10={sc6}
                image11={spic1}
                image12={spic2}
                serviceName2="Discover Your Inner Serenity"
                serviceName3="Embrace the Art of Wellness"
                timeTitle="Find Peace in Paradise"
            /> */}
      <Footer />
    </>
  )
}

export default Spa
