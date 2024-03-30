import React from 'react'
import MainSlider from './MainSlider/MainSlider'
import Clients from './Clients/Clients'
import ContactUs from './ContactUs/ContactUs'
import Attraction from './Attraction/Attraction'
import Testimonial from './Testimonials/Testimonial'
import Facilities from './Facilities/Facilities'
import PVideo from './Promotional Video/PVideo'
import Pricing from './Pricing Section/Pricing'

const Index = () => {
    window.scrollTo(0, 0)
    return (
        <>
            <MainSlider />
            <Pricing />
            <PVideo />
            <Facilities />
            <Testimonial />
            <Attraction />
            <ContactUs />
            <Clients />
        </>
    )
}

export default Index
