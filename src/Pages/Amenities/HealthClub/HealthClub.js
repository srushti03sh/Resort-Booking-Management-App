import React from 'react'
import pool from "../../../Images/pool.jpg"
import pool2 from "../../../Images/pool2.jpg"
import pool3 from "../../../Images/pool3.jpg"
import pool4 from "../../../Images/pool4.jpg"
import pool5 from "../../../Images/pool5.jpg"
import n6 from "../../../Images/n6.jpg"
import pool6 from "../../../Images/pool6.jpg"
import pool7 from "../../../Images/pool7.jpg"
import pool8 from "../../../Images/pool8.jfif"
import pool9 from "../../../Images/pool9.jpg"
import pool10 from "../../../Images/pool10.jpg"
import Navbar from '../../../Components/Home/Navbar/Navbar'
import Footer from '../../../Components/Home/Footer/Footer'
import CommonAmenities from '../../../Common/CommonAmenities/CommonAmenities'

function HealthClub() {
    return (
        <>
            <Navbar />
            <CommonAmenities
                image1={pool}
                image2={pool2}
                image3={pool5}
                image4={pool4}
                image5={n6}
                image6={pool6}
                image7={pool7}
                image8={pool8}
                image9={pool9}
                image10={pool10}
                image11={pool}
                image12={pool3}
                service="Health Club & Pool"
                serviceName1="Dive into Wellness"
                serviceName2="Make a Splash for Wellness"
                serviceName3="Escape the Ordinary, Embrace Wellness"
                aboutTitle="Where Every Stroke Counts"
                aboutdes="Experience ultimate relaxation and fitness at our resort's health club & pool. Our serene facilities offer a tranquil 
                escape for guests to rejuvenate mind, body, and soul. Dive into our sparkling pool for a refreshing swim or enjoy a revitalizing 
                workout at our state-of-the-art health club. Whether you seek tranquility or invigoration, our resort provides the perfect 
                sanctuary for your well-being."
                serviceTitle="Feel the Power of Wellness"
                timedes="From sunrise to sunset, our health club & pool await your wellness journey.Dive into 
                tranquility or energize your body with a workout session. Whatever your schedule, our facilities are here to accommodate your
                 needs. Discover relaxation and fitness, available at your convenience."
                timeTitle="Time to Thrive"
            />
            <Footer />
        </>
    )
}

export default HealthClub
