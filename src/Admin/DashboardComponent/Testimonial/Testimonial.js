import React from 'react'
import test1 from "../../../Images/test1.jpg"
import test2 from "../../../Images/test2.jpg"
import "./Testimonial.css"

function Testimonial() {
  return (
    <>
      <div className='col-md-6'>
        <div className='rev'>
          <div className='rev-text'>
            <p>
              From the moment we arrived at the hotel, we were greeted with warmth and professionalism. The staff went above and beyond
              to ensure that our stay was nothing short of exceptional. The room was immaculate, with stunning views and luxurious
              amenities.
            </p>
          </div>
          <div className='rev-data'>
            <div className='rev-name'>
              <h6>Nolan White</h6>
            </div>
          </div>
        </div>
        <div className='rev'>
          <div className='rev-text'>
            <p>
              Our experience at the hotel was phenomenal! The room was luxurious, the amenities were top-notch, and the staff were
              incredibly attentive. From check-in to check-out, everything exceeded our expectations. We can't wait to return for
              another unforgettable stay!
            </p>
          </div>
          <div className='rev-data'>
            <div className='rev-name'>
              <h6>Emily Brown</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
