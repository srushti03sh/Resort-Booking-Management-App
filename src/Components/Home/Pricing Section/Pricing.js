import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FiPhoneCall } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./Pricing.css"
import { ExtraServices } from '../../../Data/Data';

function Pricing() {
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
        items: 1,
      },
      1000: {
        items: 2,

      }
    },
  };

  return (
    <div className='pricing section-padding'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-4">
            <div className="section-subtitle"><span>Best Prices</span></div>
            <div className="section-title">Extra Services</div>
            <p className="color-2">The best prices for your relaxing vacation.</p>
            <p className="color-2">These services often go beyond the basic accommodations and can include a wide range of offerings tailored
              to meet guests' diverse needs and preferences.</p>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-call"><FiPhoneCall /></span>
              </div>
              <div className="text">
                <p className="color-2">For information</p>
                <Link href="tel:855-100-4444">855 100 4444</Link>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <OwlCarousel items={2} margin={30} autoplay={false} loop={true} {...options}>
              {
                ExtraServices.map((data, index) => (
                  <div className="pricing-card" key={index}>
                    <img src={data.src} alt="" />
                    <div className="desc">
                      <div className="name">{data.title}</div>
                      <div className="amount"><LiaRupeeSignSolid />{data.price}<span>/ day</span></div>
                      <ul className="list-unstyled list">
                        <li>
                          <i className="ti-check"><IoCheckmarkOutline /></i>
                          {data.subTitle1}
                        </li>
                        <li>
                          <i className="ti-check"><IoCheckmarkOutline /></i>
                          {data.subTitle2}
                        </li>
                        <li>
                          <i className="ti-close unavailable"><RxCross1 /></i>
                          {data.subTitle3}
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
    </div>
  )
}

export default Pricing
