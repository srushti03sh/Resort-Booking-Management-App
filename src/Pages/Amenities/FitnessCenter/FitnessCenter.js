import React from 'react'
import gym from "../../../Images/gym1.jpg"
import gym1 from "../../../Images/gym.jpg"
import gym2 from "../../../Images/gym2.jpg"
import gym3 from "../../../Images/gym3.jpg"
import gym4 from "../../../Images/gym4.jpg"
import gym5 from "../../../Images/gym5.jpg"
import gym6 from "../../../Images/gym6.jpg"
import gym7 from "../../../Images/gym7.jpg"
import gym8 from "../../../Images/gym8.jpg"
import gym9 from "../../../Images/gym9.jpg"
import gym10 from "../../../Images/gym10.jpg"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import CommonAmenities from '../../../Common/CommonAmenities/CommonAmenities'

function FitnessCenter() {
  return (
    <>
      <Navbar />
      <CommonAmenities
        image1={gym}
        image2={gym2}
        image3={gym3}
        image4={gym5}
        image5={gym5}
        image6={gym6}
        image7={gym7}
        image8={gym8}
        image9={gym9}
        image10={gym10}
        image11={gym4}
        image12={gym1}
        service="Fitness Center"
        serviceName1="Improve your Fitness Today"
        serviceName2="Shape Your Body Now"
        serviceName3="Exercise your mind and body"
        aboutTitle="Your Best Fitness Center"
        serviceTitle="About Our Fitness"
        timeTitle="Best Fitness Zone"
      />
      <Footer />
    </>
  )
}

export default FitnessCenter
