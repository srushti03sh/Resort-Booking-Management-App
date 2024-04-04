import React from 'react'
import MainSlider from './MainSlider/MainSlider'
import Clients from './Clients/Clients'
import ContactUs from './ContactUs/ContactUs'
import Testimonial from './Testimonials/Testimonial'
import Facilities from './Facilities/Facilities'
import PVideo from './Promotional Video/PVideo'
import Pricing from './Pricing Section/Pricing'
import Rooms from './Rooms/Rooms'

const Index = () => {
    window.scrollTo(0, 0)
    return (
        <>
            <MainSlider />
            <Rooms />
            <PVideo />
            <Pricing />
            <Testimonial />
            <Facilities />
            <ContactUs />
            <Clients />
        </>
    )
}

export default Index
