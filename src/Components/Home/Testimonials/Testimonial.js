import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import quot from "../../../Images/quot.png";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonials.css";
import axios from 'axios';

function Testimonial() {
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/TestimonialsPage/TestimonialsPage.php", {});
        setAllTestimonials(response.data.allTestimonials.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

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
                    allTestimonials.map((data, index) => (
                      <div className="item" key={index}>
                        <span className="quote">
                          <img src={quot} alt="" />
                        </span>
                        <p>
                          {data.msg}
                        </p>
                        <div className="info">
                          <div className="cont">
                            <span>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                              <i className="star-rating"></i>
                            </span>
                            <h6>{data.fname} {data.lname}</h6>
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
  );
}

export default Testimonial;
