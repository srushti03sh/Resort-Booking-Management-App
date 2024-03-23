import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoPeopleSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./CommonEvents.css"

function CommonEvents(props) {

  const images1 = [
    {
      thumbUrl: props.img1,
      largeUrl: props.img1,
    },
    {
      thumbUrl: props.img2,
      largeUrl: props.img2,
    },
    {
      thumbUrl: props.img3,
      largeUrl: props.img3,
    }
  ];

  const images2 = [
    {
      thumbUrl: props.img4,
      largeUrl: props.img4,
    },
    {
      thumbUrl: props.img5,
      largeUrl: props.img5,
    },
    {
      thumbUrl: props.img6,
      largeUrl: props.img6,
    }
  ];

  const images3 = [
    {
      thumbUrl: props.img7,
      largeUrl: props.img7,
    },
    {
      thumbUrl: props.img8,
      largeUrl: props.img8,
    },
    {
      thumbUrl: props.img9,
      largeUrl: props.img9,
    }
  ];

  const handleImageClick = (event) => {
    const largeImageUrl = event.target.src.replace('thumb', 'large');
    document.getElementById('largeImage').src = largeImageUrl;
  };
  const handleImageClick1 = (event) => {
    const largeImageUrl = event.target.src.replace('thumb', 'large');
    document.getElementById('largeImage1').src = largeImageUrl;
  };
  const handleImageClick2 = (event) => {
    const largeImageUrl = event.target.src.replace('thumb', 'large');
    document.getElementById('largeImage2').src = largeImageUrl;
  };

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
    center: true,
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
          <OwlCarousel items={1} autoplay={false} loop={true} {...options} nav={true}>
            <div data-overlay-dark="3">
              <img src={props.img10} alt="" />
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
                      <h4>
                        Luxury Hotel & Best Resort
                      </h4>
                      <h1>
                        {props.title1}
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
                      <span>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                      </span>
                      <h4>
                        Luxury Hotel & Best Resort
                      </h4>
                      <h1>
                        {props.title2}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={props.img11} alt="" />
            </div>
            <div data-overlay-dark="3">
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
                      <h4>
                        Luxury Hotel & Best Resort
                      </h4>
                      <h1>
                        {props.title3}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={props.img12} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className='event-about section-padding'>
        <div className='container'>
          <div className='col-md-12 text-center'>
            <div className='section-title'>
              {props.sectionTitle1}
            </div>
            <p>
              When it comes to planning that special day, a lot rides on the destination.
              Search through our premier portfolio of venues to find your perfect fit; whether
              you are looking for an all inclusive property or a snug & cosy nook, we'll help make
              your dreams of the perfect destination wedding a reality.
            </p>
            <p>
              Be it traditional family friendly gem or a chic modern themed oasis, we offer you a world of choice.
            </p>
          </div>
        </div>
      </div>
      <div className='event-gallery text-center section-padding'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='section-subtitle'>
              Turning Moments into Memories
            </div>
            <div className='section-title'>
              {props.sectionTitle2}
            </div>
            <OwlCarousel items={3} margin={30} loop={true} {...options1} autoplay={true}>
              <div className="events-img" >
                <img src={props.img13} alt="" />
              </div>
              <div className="events-img">
                <img src={props.img14} alt="" />
              </div>
              <div className="events-img" >
                <img src={props.img15} alt="" />
              </div>
              <div className="events-img" >
                <img src={props.img16} alt="" />
              </div>
              <div className="events-img" >
                <img src={props.img17} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className='event-testimonial section-padding'>
        <div className='container'>
          <div className='col-md-12'>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="testimonials-box">
                    <div className="head-box text-center">
                      <div className='section-subtitle'>Testimonials</div>
                      <div className='section-title'>{props.testimonial}</div>
                      <div className="line"></div>
                    </div>
                    <OwlCarousel items={2} margin={30} autoplay={false} loop={true} {...options}>
                      <div className="item text-center">
                        <span className="quote">
                          <img src={props.img18} alt="" />
                        </span>
                        <p>
                          <b>Perfect wedding destination</b>
                        </p>
                        <p>
                          We stayed here for two nights for a friend's wedding. We really enjoyed our stay here
                          and we have been to many places but this is a unique destination, everything was just
                          perfect. Food was marvelous, we had a different menu every time. Service by the resort
                          staff was superb. We are planning big events here. So guys see you soon and keep up
                          the charm.
                        </p>
                        <div className="info">
                          <div className="cont text-center">
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
                      <div className="item text-center">
                        <span className="quote">
                          <img src={props.img18} alt="" />
                        </span>
                        <p>
                          <b>It Was A Great Wedding Experience</b>
                        </p>
                        <p>
                          Was here for two nights for my cousin's wedding. It was one of the best wedding
                          experience I have had. Staff were courteous and service was quick . Rooms were clean
                          and beautiful. Overall a great experience.
                        </p>
                        <div className="info">
                          <div className="cont text-center">
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
                      <div className="item text-center">
                        <span className="quote">
                          <img src={props.img18} alt="" />
                        </span>
                        <p>
                          <b>Perfect wedding ❤️ enjoyed a lot</b>
                        </p>
                        <p>
                          Attended one of my family member's wedding. It is a perfect destination for
                          family events. Cool atmosphere and elegant ambience. Well maintained lobbies
                          and lawns. Plus they have availability of amazing Jain food which was our requirement.
                          The courteous staff made our complete experience pleasant. Felt like home away from home.
                        </p>
                        <div className="info">
                          <div className="cont text-center">
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
      </div>
      <div className='event-pricing section-padding'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='event-price-head mb-5'>
              <div className='section-title'>{props.themeTitle}</div>
              <div className="line"></div>
            </div>
          </div>
          <div className='col-md-12 theme'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='event-image-gallery'>
                  <div className='max1'>
                    <img src={props.img19} alt="" id="largeImage" />
                  </div>
                  <div className='min1' id="thumbs">
                    {images1.map((image, index) => (
                      <img
                        key={index}
                        src={image.thumbUrl}
                        onClick={handleImageClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-6 theme-outer'>
                <div className='event-price-head1 mb-5 mt-5'>
                  <div className='section-title'>{props.theme1}</div>
                  <div className="line"></div>
                  <div className='event-theme-info'>
                    <p>
                      <b>
                        Theme Overview:
                      </b>
                    </p>
                    <p><IoPeopleSharp /> {props.guest1}</p>
                    <p>
                      If you envision a more intimate, alfresco ceremony, opt for an outdoor garden-party wedding.
                      Ideal for the warmer months, this style is all about fresh florals, lush greenery, and
                      elegant tablescapes—preferably overlooking ornate and fragrant flower beds.
                    </p>
                    <br />
                    <div className='d-flex'>
                      <div className='section-subtitle'>
                        Price:
                      </div>
                      <div className="event-amount">
                        <LiaRupeeSignSolid />
                        {props.price2}
                        <span> Onwards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 theme'>
            <div className='row'>
              <div className='col-md-6 theme-outer order2'>
                <div className='event-price-head1 mb-5 mt-5'>
                  <div className='section-title'>{props.theme2}</div>
                  <div className="line"></div>
                  <div className='event-theme-info'>
                    <p>
                      <b>
                        Theme Overview:
                      </b>
                    </p>
                    <p><IoPeopleSharp /> {props.guest2}</p>
                    <p>
                      A bohemian wedding remains cool and carefree, but still beautiful. Keep the venue
                      decorations simplistically elegant, with oriental rugs lining the aisle and altar,
                      and decorative pillows or hanging macramé decorations.
                    </p>
                    <br />
                    <div className='d-flex'>
                      <div className='section-subtitle'>
                        Price:
                      </div>
                      <div className="event-amount">
                        <LiaRupeeSignSolid />
                        {props.price2}
                        <span> Onwards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='event-image-gallery'>
                  <div className='max1'>
                    <img src={props.img20} alt="" id="largeImage1" />
                  </div>
                  <div className='min1' id="thumbs">
                    {images2.map((image, index) => (
                      <img
                        key={index}
                        src={image.thumbUrl}
                        onClick={handleImageClick1}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 theme'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='event-image-gallery'>
                  <div className='max1'>
                    <img src={props.img21} alt="" id="largeImage2" />
                  </div>
                  <div className='min1' id="thumbs">
                    {images3.map((image, index) => (
                      <img
                        key={index}
                        src={image.thumbUrl}
                        onClick={handleImageClick2}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-6 theme-outer'>
                <div className='event-price-head1 mb-5 mt-5'>
                  <div className='section-title'>{props.theme3}</div>
                  <div className="line"></div>
                  <div className='event-theme-info'>
                    <p>
                      <b>
                        Theme Overview:
                      </b>
                    </p>
                    <p><IoPeopleSharp /> {props.guest3}</p>
                    <p>
                      This laid-back style is perfect if you have a backyard wedding on the brain and a spring
                      or summer date. From delectable barbecues and clambakes to Americana picnic picks, casual
                      nuptials are all about the friendly atmosphere and communal connection.
                    </p>
                    <br />
                    <div className='d-flex'>
                      <div className='section-subtitle'>
                        Price:
                      </div>
                      <div className="event-amount">
                        <LiaRupeeSignSolid />
                        {props.price2}
                        <span> Onwards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonEvents
