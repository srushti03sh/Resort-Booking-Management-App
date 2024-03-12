import React from 'react'
import MainSlider from './MainSlider/MainSlider'
import Rooms from './Rooms & Suits/Rooms'
import Clients from './Clients/Clients'
import ContactUs from './ContactUs/ContactUs'
import News from './News/News'
import Attraction from './Attraction/Attraction'
import Testimonial from './Testimonials/Testimonial'
import Facilities from './Facilities/Facilities'
import PVideo from './Promotional Video/PVideo'
import Pricing from './Pricing Section/Pricing'

const Index = () => {
    return (
        <>
            <MainSlider />
            <Rooms />
            <Pricing />
            <PVideo />
            <Facilities />
            <Testimonial />
            <Attraction />
            <News />
            <ContactUs />
            <Clients />
        </>
    )
}

export default Index
