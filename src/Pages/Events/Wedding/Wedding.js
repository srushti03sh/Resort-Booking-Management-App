import React from 'react'
import w1 from "../../../Images/w1.jpg"
import w2 from "../../../Images/w2.jpg"
import w3 from "../../../Images/w3.jpg"
import w4 from "../../../Images/w4.jpg"
import w5 from "../../../Images/w5.jpg"
import w6 from "../../../Images/w6.jpg"
import w7 from "../../../Images/w7.jpg"
import w8 from "../../../Images/w8.jpg"
import wt21 from "../../../Images/wt21.jpg"
import wt22 from "../../../Images/wt22.jpg"
import wt23 from "../../../Images/wt23.jpg"
import wt24 from "../../../Images/wt24.jpg"
import wt11 from "../../../Images/wt11.jpg"
import wt12 from "../../../Images/wt12.jpg"
import wt13 from "../../../Images/wt13.jpg"
import wt14 from "../../../Images/wt14.jpg"
import wt31 from "../../../Images/wt31.jpg"
import wt32 from "../../../Images/wt32.jpg"
import wt33 from "../../../Images/wt33.jpg"
import quot from "../../../Images/quot.png"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import CommonEvents from '../../../Common/CommonEvents/CommonEvents'
import Footer from '../../../Components/Home/Footer/Footer'

function Wedding() {
  return (
    <>
      <Navbar />
      <CommonEvents
        img1={wt32}
        img2={wt33}
        img3={w2}
        img4={wt22}
        img5={wt23}
        img6={wt24}
        img7={wt12}
        img8={wt11}
        img9={wt14}
        img10={w1}
        img11={w2}
        img12={w3}
        img13={w5}
        img14={w4}
        img15={w6}
        img16={w7}
        img17={w8}
        img18={quot}
        img19={wt31}
        img20={wt21}
        img21={wt13}
        title1="Enjoy a Luxury Experience"
        title2="The Perfect base for you"
        title3="Enjoy the best moments of life"
        sectionTitle1="A Symphony of Class and Romance"
        sectionTitle2="Your Dream Wedding Starts Here"
        testimonial="Wedding Stories"
        themeTitle="Our Weddings"
        theme1="Garden Wedding"
        price1="1,00,000"
        guest1="50 to 300 guests"
        theme2="Bohemian Wedding"
        price2="1,50,000"
        guest2="50 to 500 guests"
        theme3="Casual Wedding"
        price3="1,90,000"
        guest3="50 to 750 guests"
      />
      <Footer />
    </>
  )
}

export default Wedding
