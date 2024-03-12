import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import quot from "../../../Images/quot.png"
import test1 from "../../../Images/test1.jpg"
import test2 from "../../../Images/test2.jpg"
import test3 from "../../../Images/test3.jpg"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonials.css"

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
                    <div className="item">
                      <span className="quote">
                        <img src={quot} alt="" />
                      </span>
                      <p>
                        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon
                        sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca
                        the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src={test1} alt="" />
                        </div>
                        <div className="cont">
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Emily Brown</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <span className="quote">
                        <img src={quot} alt="" />
                      </span>
                      <p>
                        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon
                        sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca
                        the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src={test2} alt="" />
                        </div>
                        <div className="cont">
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Nolan White</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <span className="quote">
                        <img src={quot} alt="" />
                      </span>
                      <p>
                        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon
                        sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca
                        the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src={test3} alt="" />
                        </div>
                        <div className="cont">
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Olivia martin</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>

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
