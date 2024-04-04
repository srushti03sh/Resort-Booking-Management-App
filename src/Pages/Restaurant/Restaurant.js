import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import { LuClock3 } from "react-icons/lu";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./Restaurant.css"
import { indianMenu } from '../../Data/Data';
import { resSlider } from '../../Data/Data';

function Restaurant() {
  window.scrollTo(0, 0)
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

  return (
    <>
      <Navbar />
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            {
              resSlider.map((data, index) => (
                <div data-overlay-dark="3" key={index}>
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
      <div className='section-padding res'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-12 text-left">
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">An Experience for the Senses</div>
              <div className="section-title">The Restaurant</div>
            </div>
            <div className="col-md-12">
              <p className="mb-30">Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of India's greatest culinary treasures.</p>
              <h6>Hours</h6>
              <ul className="list-unstyled page-list mb-30">
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Breakfast: 7.00 am - 11.00 am (daily)</p>
                  </div>
                </li>
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Lunch: 12.00 noon - 2.00 pm (daily)</p>
                  </div>
                </li>
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                  </div>
                </li>
              </ul>
              <h6>Dress Code</h6>
              <p>Smart casual (no shorts, hats, or sandals permitted)</p>
              <h6>Terrace</h6>
              <p>Open for drinks only</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-padding res-menu'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle"><span>Luxury Hotel</span></div>
              <div className="section-title"><span>Restaurant Menu</span></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <Tabs
                defaultActiveKey="Appetizers"
                className="mb-3"
                justify
              >
                {
                  indianMenu.map((data, index) => (
                    <Tab eventKey={data.category} title={data.category} key={index}>
                      <div className="cont">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="menu-info">
                              <h5>{data.item1}<span className="price">{data.price1}</span></h5>
                              <p>{data.description1}</p>
                            </div>
                            <div className="menu-info">
                              <h5>{data.item2}<span className="price">{data.price2}</span></h5>
                              <p>{data.description2}</p>
                            </div>
                            <div className="menu-info">
                              <h5>{data.item3}<span className="price">{data.price3}</span></h5>
                              <p>{data.description3}</p>
                            </div>
                          </div>
                          <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                              <h5>{data.item4}<span className="price">{data.price4}</span></h5>
                              <p>{data.description4}</p>
                            </div>
                            <div className="menu-info">
                              <h5>{data.item5}<span className="price">{data.price5}</span></h5>
                              <p>{data.description5}</p>
                            </div>
                            <div className="menu-info">
                              <h5>{data.item6}<span className="price">{data.price6}</span></h5>
                              <p>{data.description6}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  ))
                }
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Restaurant
