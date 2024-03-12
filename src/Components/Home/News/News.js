import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import n4 from "../../../Images/n4.jpg"
import n5 from "../../../Images/n5.jpg"
import n6 from "../../../Images/n6.jpg"
import n1 from "../../../Images/n1.jpg"
import n2 from "../../../Images/n2.jpg"
import n3 from "../../../Images/n3.jpg"
import "./News.css"

function News() {

  const options = {
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,

      }
    },
  };

  return (
    <div className="news section-padding bg-darkblack">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle"><span>Hotel Blog</span></div>
            <div className="section-title">Our News</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel items={3} margin={30} loop={true} autoplay={true} {...options}>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n1} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Restaurant</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Historic restaurant renovated in resort
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n2} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Spa</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Benefits of Spa Treatment for Health
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n3} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Bathrooms</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Hotel Bathrooms Collection
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n4} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Health</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Weight Loss with Fitness Health Club
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n5} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Design</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Retro Lighting Design in the Hotels
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={n6} alt="" />
                  <div className="date">
                    <Link to="#">
                      <span>Dec</span>
                      <i>08</i>
                    </Link>
                  </div>
                </div>
                <div className="con">
                  <span className="category">
                    <Link to="#">Health</Link>
                  </span>
                  <h5>
                    <Link to="#">
                      Benefits of Swimming for Health
                    </Link>
                  </h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
