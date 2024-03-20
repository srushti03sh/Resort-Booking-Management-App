import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./News.css"
import { HomeNews } from '../../../Data/Data';

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
              {
                HomeNews.map((data, index) => (
                  <div className="item" key={index}>
                    <div className="position-re o-hidden">
                      <img src={data.src} alt="" />
                      <div className="date">
                        <Link to="#">
                          <span>{data.month}</span>
                          <i>{data.date}</i>
                        </Link>
                      </div>
                    </div>
                    <div className="con">
                      <span className="category">
                        <Link to="#">{data.title}</Link>
                      </span>
                      <h5>
                        <Link to="#">
                          {data.des}
                        </Link>
                      </h5>
                    </div>
                  </div>
                ))
              }
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
