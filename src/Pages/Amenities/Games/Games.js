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
        service="Game Zone"
        serviceName1="Level Up Your Stay"
        serviceName2="Playful Paradise"
        serviceName3="Fun Knows No Bounds"
        aboutTitle="Joy Junction"
        aboutdes="Step into a world of excitement and adventure at our resort's game zone. Located at the heart of our property, our game zone
         offers a vibrant and dynamic space where guests of all ages can immerse themselves in a variety of thrilling games and activities. 
         From classic arcade games and interactive experiences to virtual reality adventures and family-friendly competitions, there's 
         something for everyone to enjoy. Whether you're seeking a fun-filled afternoon with friends or a lively evening with family, our 
         game zone provides the perfect setting for unforgettable moments and endless entertainment. Join us and let the games begin!"
        serviceTitle="Unleash Your Inner Adventurer"
        timedes="Embark on an adventure of endless fun at our Game Zone, where every moment is a journey into excitement and joy. Our doors are 
        open from dawn till dusk, inviting you to explore a world of immersive entertainment and thrilling challenges. Whether you're a seasoned 
        gamer or just looking for a good time, our Game Zone offers something for everyone. From classic arcade games to cutting-edge virtual 
        reality experiences, there's no shortage of excitement here. So gather your friends and family, and let the games begin!"
        timeTitle=" Discovering Hours of Fun"
      />
      <Footer />
    </>
  )
}

export default Games
