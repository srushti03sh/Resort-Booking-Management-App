import React from 'react'
import cm1 from "../../../Images/cm1.jpg"
import cm12 from "../../../Images/cm12.jpg"
import cm13 from "../../../Images/cm13.jpg"
import cm2 from "../../../Images/cm2.jpg"
import cm22 from "../../../Images/cm22.jpg"
import cm23 from "../../../Images/cm23.jpg"
import cm3 from "../../../Images/cm3.jpg"
import cm32 from "../../../Images/cm32.jpg"
import cm33 from "../../../Images/cm33.jpg"
import quot from "../../../Images/quot.png"
import cmm1 from "../../../Images/cmm1.jpg"
import cmm2 from "../../../Images/cmm2.jpg"
import cmm3 from "../../../Images/cmm3.jpg"
import cms1 from "../../../Images/cms1.jpg"
import cms2 from "../../../Images/cms2.jpg"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import CommonEvents from '../../../Common/CommonEvents/CommonEvents'

function CorporateMeetings() {
  return (
    <>
      <Navbar />
      <CommonEvents
        img1={cm12}
        img2={cm13}
        img3={cm1}
        img4={cm22}
        img5={cm23}
        img6={cm2}
        img7={cm3}
        img8={cm32}
        img9={cm33}
        img10={cmm1}
        img11={cmm2}
        img12={cms2}
        img13={cms1}
        img14={cm12}
        img15={cm23}
        img16={cm3}
        img17={cmm3}
        img18={quot}
        img19={cm1}
        img20={cm2}
        img21={cm3}
        title1="A World of Opportunities."
        title2="Navigating the Future"
        title3="Precision and Performance."
        sectionTitle1="Discover The Luxury Within Reach"
        sectionTitle2="Limitless Luxury, Exclusively Yours."
        testimonial="Corporate Getaway Stories"
        themeTitle="A World of Grandeur Awaits."
        theme1="Sabha Room"
        price1="40,000"
        guest1="10 to 50 guests"
        theme2="Sammelan Room"
        price2="55,000"
        guest2="50 to 100 guests"
        theme3="Projector Room"
        price3="85,000"
        guest3="50 to 200 guests"

      />
      <Footer />
    </>
  )
}

export default CorporateMeetings
