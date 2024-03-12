import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import "./CommonAmenities.css"

function CommonAmenities(props) {

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
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            <div data-overlay-dark="3">
              <img src={props.image1} alt="" />
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        {props.service}
                      </h4>
                      <h1>
                      {props.serviceName1}
                      </h1>
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
                        {props.service}
                      </h4>
                      <h1>
                      {props.serviceName2}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={props.image2} alt="" />
            </div>
            <div data-overlay-dark="3">
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        {props.service}
                      </h4>
                      <h1>
                      {props.serviceName3}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={props.image3} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className='spa-about section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-6'>
              <img src={props.image4} className='mb-30' alt=""></img>
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
              <div className="section-title">{props.aboutTitle}</div>
              <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan
                vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit.
                Donec id velit ac arcu posuere blane.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='spa-services section-padding'>
        <div className='container'>
          <div className='section-title'>{props.serviceTitle}</div>
          <div className='col-md-12'>
            <OwlCarousel items={3} margin={30} loop={true} {...options1} autoplay={true} className='service-service'>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image5} />
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image6} />
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image7} />
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image8} />
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image9} />
              </div>
              <div className="spas" data-overlay-dark="3">
                <img src={props.image10} />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="section-padding ohrs">
        <div className="container">
          <div className="ohrs-section row">
            <div className='col-md-6'>
              <img src={props.image11} alt="" />
            </div>
            <div className="ohrs-text col-md-6">
              <h3>Open Hours</h3>
              <h4>
              {props.timeTitle}
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
        </div>
      </div >
    </>
  )
}

export default CommonAmenities
