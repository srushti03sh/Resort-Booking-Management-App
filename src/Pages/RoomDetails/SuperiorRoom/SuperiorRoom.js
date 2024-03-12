import React from 'react'
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import slider2 from "../../../Images/slider2.jpg"
import slider3 from "../../../Images/slider3.jpg"
import junior1 from "../../../Images/Junior1.jpg"
import CommonRoomDetails from '../../../Common/CommonRoomDetails/CommonRoomDetails'

function SuperiorRoom() {
  return (
    <>
      <Navbar />
      <CommonRoomDetails
        image1={slider2}
        image2={slider3}
        image3={junior1}
        title="Superior Room"
      />
      <Footer />
    </>
  )
}

export default SuperiorRoom
