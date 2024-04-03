import slider1 from "../Images/slider1.jpg"
import slider2 from "../Images/g3.jpg"
import slider3 from "../Images/slider3.jpg"
import Pic1 from "../Images/1.jpg"
import Pic2 from "../Images/2.jpg"
import Pic3 from "../Images/3.jpg"
import Pic4 from "../Images/4.jpg"
import Pic7 from "../Images/7.jpg"
import Price1 from "../Images/price1.jpg"
import Price2 from "../Images/price2.jpg"
import Price3 from "../Images/price3.jpg"
import Price4 from "../Images/price4.jpg"
import test1 from "../Images/test1.jpg"
import test2 from "../Images/test2.jpg"
import test3 from "../Images/test3.jpg"
import c1 from "../Images/c1.png"
import c2 from "../Images/c2.png"
import c3 from "../Images/c3.png"
import c4 from "../Images/c4.png"
import c5 from "../Images/c5.png"
import c6 from "../Images/c6.png"
import re1 from "../Images/re1.jpg"
import re2 from "../Images/re2.jpg"
import re3 from "../Images/re3.jpg"
import spa from "../Images/spa.jpg"
import spa2 from "../Images/spa2.jpg"
import spa3 from "../Images/spa3.jpg"
import sc1 from "../Images/sc1.jpg"
import sc2 from "../Images/sc2.jpg"
import sc3 from "../Images/sc3.jpg"
import sc4 from "../Images/sc4.jpg"
import sc5 from "../Images/sc5.jpg"
import sc6 from "../Images/sc6.jpg"

export const Homeslider = [
    { id: 1, src: slider1, subTitle: "Luxury Hotel & Best Resort", title: "Enjoy a Luxury Experience" },
    { id: 2, src: slider2, subTitle: "Luxury Hotel & Best Resort", title: "The Perfect base for you" },
    { id: 3, src: slider3, subTitle: "Luxury Hotel & Best Resort", title: "Enjoy the best moments of life" }
];

export const HomeRooms = [
    { id: 1, size: "col-md-4", src: Pic1, price: "150$ / Night", title: "Junior Suite", path: "/JuniorSuite" },
    { id: 2, size: "col-md-4", src: Pic2, price: "150$ / Night", title: "Family Room", path: "/FamilyRoom" },
    { id: 3, size: "col-md-4", src: Pic3, price: "150$ / Night", title: "Double Room", path: "/DoubleRoom" },
    { id: 4, size: "col-md-6", src: Pic4, price: "150$ / Night", title: "Deluxe Room", path: "/DeluxeRoom" },
    { id: 5, size: "col-md-6", src: Pic7, price: "150$ / Night", title: "Superior Room", path: "/SuperiorRoom" }
];

export const ExtraServices = [
    {
        id: 1, src: Price1, title: "Room cleaning", price: "250", subTitle1: "Provide Access to Cleaning Staff",
        subTitle2: "Dispose of Trash Properly", subTitle3: "Don't Block Access to Amenities"
    },
    {
        id: 2, src: Price2, title: "Drinks included", price: "300", subTitle1: "Enjoy a Variety of Beverages",
        subTitle2: "Respect Service Hours", subTitle3: "Don't Abuse the Service"
    },
    {
        id: 3, src: Price3, title: "Room Breakfast", price: "400", subTitle1: "Place Your Order in Advance",
        subTitle2: "Indicate Dietary Preferences", subTitle3: "Don't Waste Food"
    },
    {
        id: 4, src: Price4, title: "Safe & Secure", price: "500", subTitle1: " Keep Your Valuables Secure",
        subTitle2: "Use Secure Access Points", subTitle3: "Don't Share Room Access Information"
    },
];

export const HomeTestimonials = [
    {
        id: 1, des: "From the moment we arrived at the hotel, we were greeted with warmth and professionalism. The staff went above and beyond to ensure that our stay was nothing short of exceptional.The room was immaculate, with stunning views and luxurious amenities that exceeded our expectations.The attention to detail in every aspect of our experience, from the personalized service to the exquisite dining options, was truly remarkable.We felt pampered and cared for throughout our stay,and we can't wait to return. Thank you to the entire team for making our getaway unforgettable.", name: "Emily Brown", src: test1
    },
    {
        id: 2, des: "Our stay at the hotel was fantastic! The room was stylish and comfortable, and the staff were incredibly friendly and accommodating.We enjoyed every moment of our time there and can't wait to come back!", name: "Nolan White", src: test2
    },
    {
        id: 3, des: "Our experience at the hotel was phenomenal! The room was luxurious, the amenities were top-notch, and the staff were encredibly attentive.From check-in to check - out, everything exceeded our expectations.We can't wait to return for another unforgettable stay!", name: "Olivia martin", src: test3
    },
];

export const HomeClients = [
    { id: 1, src: c1 },
    { id: 2, src: c2 },
    { id: 3, src: c3 },
    { id: 4, src: c4 },
    { id: 5, src: c5 },
    { id: 6, src: c6 },
];

export const faqs = [
    {
        id: 1,
        header: "How can I confirm that you have received my reservation?",
        text: `After completing your reservation, you should receive an immediate confirmation message on the booking platform. If you don't receive a confirmation, 
      please reach out to our reservations team for assistance.`
    },
    {
        id: 2,
        header: "Up to what age are they considered children?",
        text: `Children are considered to be between the ages of 0 and 12 years old.`
    },
    {
        id: 3,
        header: "Do you have any discount code?",
        text: `Our resort occasionally offers promotional discount codes through various channels. Please check our website or contact our reservations team directly
       to inquire about any available discount codes for your stay.`
    },
    {
        id: 4,
        header: "Can I cancel my reservation?",
        text: `Yes, you can cancel your reservation. Please refer to the cancellation policy outlined in your booking confirmation for details on any applicable fees or deadlines.`
    },
    {
        id: 5,
        header: "Do you have resort with a spa?",
        text: `Yes, we offer resort with spa facilities. You can explore our website or contact our reservations team for more information on resort with spa amenities.`
    }
];

export const resMenu = [
    {
        id: 1, eventKey: "Starters", title: "Starters",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    },
    {
        id: 2, eventKey: "Mains", title: "Mains",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    },
    {
        id: 3, eventKey: "Salads", title: "Salads",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    },
    {
        id: 4, eventKey: "Wine", title: "Wine",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    },
    {
        id: 5, eventKey: "Breakfast", title: "Breakfast",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    },
    {
        id: 6, eventKey: "Dessert", title: "Dessert",
        i1: "Mozzarella Dippers", ip1: "", ides1: "Fried mozzarella sticks, marinara sauce",
        i2: "Onion Rings", ip2: "", ides2: "Fried onion rings, smoked aioli",
        i3: "Fried Jalapeno", ip3: "", ides3: "Fried jalapeno pickles, cheddar sauce",
        i4: "Mozzarella Dippers", ip4: "", ides4: "Fried mozzarella sticks, marinara sauce",
        i5: "Onion Rings", ip5: "", ides5: "Fried onion rings, smoked aioli",
        i6: "Fried Jalapeno", ip6: "", ides6: "Fried jalapeno pickles, cheddar sauce"
    }
];

export const resSlider = [
    { id: 1, src: re1, subTitle: "Restaurant", title: "A dining experience worth sharing." },
    { id: 2, src: re2, subTitle: "Restaurant", title: "A destination for food lovers" },
    { id: 3, src: re3, subTitle: "Restaurant", title: "Elegance on every plate" }
];

export const spaSlider = [
    { id: 1, src: spa, subTitle: "Spa Center", title: "Your Oasis of Relaxation." },
    { id: 2, src: spa2, subTitle: "Spa Center", title: "Revitalize, Rejuvenate, Relax." },
    { id: 3, src: spa3, subTitle: "Spa Center", title: "Feel Good, Look Amazing." }
];

export const spaServiceSlider = [
    { id: 1, src: sc1, subTitle: "Steam Bath" },
    { id: 2, src: sc2, subTitle: "Face Masking" },
    { id: 3, src: sc3, subTitle: "Skin Care" },
    { id: 4, src: sc4, subTitle: "Body Massage" },
    { id: 5, src: sc5, subTitle: "Facial Therapy" },
    { id: 6, src: sc6, subTitle: "Cold Therapy" }
];

export const spaPriceSlider = [
    { id: 1, price: "", i1: "Full Body Massage", i2: "Deep Tissue Massage", i3: "Hot Stone Massage", i4: "Tissue Body Polish", i5: "Foot & Nail Care" },
    { id: 2, price: "", i1: "Full Body Massage", i2: "Deep Tissue Massage", i3: "Hot Stone Massage", i4: "Tissue Body Polish", i5: "Foot & Nail Care" },
    { id: 3, price: "", i1: "Full Body Massage", i2: "Deep Tissue Massage", i3: "Hot Stone Massage", i4: "Tissue Body Polish", i5: "Foot & Nail Care" },
    { id: 4, price: "", i1: "Full Body Massage", i2: "Deep Tissue Massage", i3: "Hot Stone Massage", i4: "Tissue Body Polish", i5: "Foot & Nail Care" }
];