import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import spa4 from "../../Images/spa4.jpg"
import spic1 from "../../Images/spic1.jpg"
import spic2 from "../../Images/spic2.jpg"
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./Spa.css"
import { spaSlider } from '../../Data/Data';
import { spaServiceSlider } from '../../Data/Data';
import { spaPriceSlider } from '../../Data/Data';

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
    counter(0, 987);
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
    counter1(0, 85);
  }, []);


  return (
    <>
      <Navbar />
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            {
              spaSlider.map((data, index) => (
                <div data-overlay-dark="3">
                  <img src={data.src} alt="" />
                  <div className="v-middle caption overlay">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <h4>
                            {data.subTitle}
                          </h4>
                          <h1>
                            {data.title}
                          </h1>
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
              {
                spaServiceSlider.map((data, index) => (
                  <div className="spas" data-overlay-dark="3" key={index}>
                    <img src={data.src} />
                    <div className='spa-text'>
                      <h4>{data.subTitle}</h4>
                    </div>
                  </div>
                ))
              }
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
                {
                  spaPriceSlider.map((data, index) => (
                    <div className="ohrs-pricing-card" key={index}>
                      <div className="desc">
                        <div className="amount"><LiaRupeeSignSolid />{data.price}<span>/ everytime</span></div>
                        <ul className="list-unstyled list">
                          <li>
                            <i><IoCheckmarkOutline /></i>
                            {data.i1}
                          </li>
                          <li>
                            <i><IoCheckmarkOutline /></i>
                            {data.i2}
                          </li>
                          <li>
                            <i><IoCheckmarkOutline /></i>
                            {data.i3}
                          </li>
                          <li>
                            <i><IoCheckmarkOutline /></i>
                            {data.i4}
                          </li>
                          <li>
                            <i><IoCheckmarkOutline /></i>
                            {data.i5}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Spa
