import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import quot from "../../../Images/quot.png"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonials.css"
import { HomeTestimonials } from '../../../Data/Data';

function Testimonial() {

  const options = {
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,

      }
    },
  };

  return (
    <div className='testimonials' data-overlay-dark="3">
      <div className='section-padding bg-img bg-fixed pb-0 test-back'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="testimonials-box">
                <div className="head-box">
                  <h6>Testimonials</h6>
                  <h4>What Client's Say?</h4>
                  <div className="line"></div>
                </div>
                <OwlCarousel items={2} margin={30} autoplay={true} loop={true} {...options}>
                  {
                    HomeTestimonials.map((data, index) => (
                      <div className="item" key={index}>
                        <span className="quote">
                          <img src={quot} alt="" />
                        </span>
                        <p>
                          {data.des}
                        </p>
                        <div className="info">
                          <div className="author-img">
                            <img src={data.src} alt="" />
                          </div>
                          <div className="cont">
                            <span>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                            </span>
                            <h6>{data.name}</h6>
                            <span>Guest review</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
