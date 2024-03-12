import React from 'react'
import bt11 from "../../../Images/bt11.jpg"
import bt12 from "../../../Images/bt12.jpg"
import bt13 from "../../../Images/bt13.jpg"
import bt21 from "../../../Images/bt21.jpg"
import bt22 from "../../../Images/bt22.jpg"
import bt23 from "../../../Images/bt23.jpg"
import bt31 from "../../../Images/bt31.jpg"
import bt32 from "../../../Images/bt32.jpg"
import bt33 from "../../../Images/bt33.jpg"
import bt1 from "../../../Images/bt1.jpg"
import bt2 from "../../../Images/bt2.jpg"
import bt3 from "../../../Images/bt3.jpg"
import bt4 from "../../../Images/bt4.jpg"
import bt5 from "../../../Images/bt5.jpg"
import bt6 from "../../../Images/bt6.jpg"
import bt7 from "../../../Images/bt7.jpg"
import bt8 from "../../../Images/bt8.jpg"
import quot from "../../../Images/quot.png"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import CommonEvents from '../../../Common/CommonEvents/CommonEvents'

function Birthday() {
    return (
        <>
            <Navbar />
            <CommonEvents
                img1={bt11}
                img2={bt12}
                img3={bt13}
                img4={bt21}
                img5={bt22}
                img6={bt23}
                img7={bt31}
                img8={bt32}
                img9={bt33}
                img10={bt1}
                img11={bt2}
                img12={bt3}
                img13={bt7}
                img14={bt5}
                img15={bt6}
                img16={bt4}
                img17={bt8}
                img18={quot}
                img19={bt11}
                img20={bt21}
                img21={bt31}
                title1="Enjoy a Luxury Experience"
                title2="The Perfect base for you"
                title3="Enjoy the best moments of life"
                sectionTitle1="Celebrate to the fullest!"
                sectionTitle2="Where Creativity Meets Celebration!"
                testimonial="Birthday Stories"
                themeTitle="Turning Spaces into Adorable Hideaways."
                theme1="Mesmerizing Blue Birhday"
                price1="40,000"
                guest1="50 to 200 guests"
                theme2="Elegant Gilt Birthday"
                price2="50,000"
                guest2="50 to 300 guests"
                theme3="Pastel theme"
                price3="75,000"
                guest3="50 to 400 guests"
            />
            <Footer />
        </>
    )
}

export default Birthday
