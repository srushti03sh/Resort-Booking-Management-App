import React from 'react'
import game1 from "../../../Images/game1.jfif"
import game2 from "../../../Images/game2.jpg"
import game3 from "../../../Images/game3.jpg"
import game4 from "../../../Images/game4.jpg"
import game5 from "../../../Images/game5.jpg"
import game6 from "../../../Images/game6.jpg"
import game7 from "../../../Images/game7.jpg"
import game8 from "../../../Images/game8.jpg"
import game9 from "../../../Images/game9.jpg"
import game10 from "../../../Images/game10.jpg"
import game11 from "../../../Images/game11.jpg"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import CommonAmenities from '../../../Common/CommonAmenities/CommonAmenities'

function Games() {
  return (
    <>
      <Navbar />
      <CommonAmenities
        image1={game2}
        image2={game3}
        image3={game4}
        image4={game5}
        image5={game1}
        image6={game6}
        image7={game7}
        image8={game8}
        image9={game9}
        image10={game10}
        image11={game7}
        image12={game11}
      />
      <Footer />
    </>
  )
}

export default Games
