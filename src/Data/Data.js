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

export const indianMenu = [
    {
        id: 1, category: "Appetizers", title: "Appetizers",
        item1: "Samosa", price1: "₹50", description1: "Crispy pastry filled with spiced potatoes and peas",
        item2: "Pakora", price2: "₹60", description2: "Assorted vegetables dipped in chickpea batter and fried",
        item3: "Paneer Tikka", price3: "₹80", description3: "Marinated cottage cheese cubes grilled to perfection",
        item4: "Aloo Tikki", price4: "₹40", description4: "Spiced mashed potato patties served with chutney",
        item5: "Chicken Tikka", price5: "₹120", description5: "Tender chicken pieces marinated in yogurt and spices, grilled",
        item6: "Fish Fry", price6: "₹100", description6: "Marinated fish fillets coated in spices and fried"
    },
    {
        id: 2, category: "Main Course", title: "Main Course",
        item1: "Butter Chicken", price1: "₹200", description1: "Chicken cooked in a creamy tomato-based sauce",
        item2: "Paneer Butter Masala", price2: "₹180", description2: "Paneer cubes cooked in a rich buttery tomato gravy",
        item3: "Palak Paneer", price3: "₹160", description3: "Cottage cheese cubes cooked in spinach gravy",
        item4: "Chole Bhature", price4: "₹150", description4: "Spicy chickpea curry served with fried bread",
        item5: "Mutton Rogan Josh", price5: "₹250", description5: "Tender mutton pieces cooked in a flavorful gravy",
        item6: "Dal Tadka", price6: "₹120", description6: "Yellow lentils tempered with spices and ghee"
    },
    {
        id: 3, category: "Breads", title: "Breads",
        item1: "Naan", price1: "₹30", description1: "Soft and fluffy Indian bread baked in a tandoor",
        item2: "Roti", price2: "₹20", description2: "Whole wheat flatbread cooked on a griddle",
        item3: "Paratha", price3: "₹40", description3: "Layered whole wheat bread pan-fried with ghee",
        item4: "Kulcha", price4: "₹35", description4: "Leavened bread stuffed with potato or paneer filling",
        item5: "Bhatura", price5: "₹25", description5: "Deep-fried fluffy bread made from fermented dough",
        item6: "Tandoori Roti", price6: "₹25", description6: "Whole wheat bread cooked in a tandoor oven"
    },
    {
        id: 4, category: "Desserts", title: "Desserts",
        item1: "Gulab Jamun", price1: "₹60", description1: "Deep-fried milk dumplings soaked in sugar syrup",
        item2: "Rasgulla", price2: "₹50", description2: "Spongy cottage cheese balls soaked in sugar syrup",
        item3: "Kheer", price3: "₹70", description3: "Rice pudding flavored with cardamom and saffron",
        item4: "Jalebi", price4: "₹40", description4: "Crispy fried batter soaked in sugar syrup",
        item5: "Barfi", price5: "₹80", description5: "Sweet confection made from condensed milk and nuts",
        item6: "Rasmalai", price6: "₹90", description6: "Soft cottage cheese patties in creamy saffron-flavored milk"
    },
    {
        id: 5, category: "Beverages", title: "Beverages",
        item1: "Masala Chai", price1: "₹20", description1: "Traditional Indian spiced tea served with milk and sugar",
        item2: "Lassi", price2: "₹40", description2: "Refreshing yogurt-based drink, sweet or salty",
        item3: "Thandai", price3: "₹60", description3: "Cooling milk-based beverage flavored with nuts and spices",
        item4: "Aam Panna", price4: "₹30", description4: "Sweet and tangy raw mango drink, flavored with cumin and mint",
        item5: "Nimbu Pani", price5: "₹25", description5: "Refreshing lemonade with a hint of spices",
        item6: "Jaljeera", price6: "₹35", description6: "Sour and spicy cumin-flavored beverage, perfect for hot summers"
    },
    {
        id: 6, category: "Snacks", title: "Snacks",
        item1: "Pani Puri", price1: "₹30", description1: "Hollow crispy puris filled with spicy tangy water and chutneys",
        item2: "Bhel Puri", price2: "₹40", description2: "Mixed puffed rice with chopped vegetables and tangy tamarind chutney",
        item3: "Samosa Chaat", price3: "₹50", description3: "Crispy samosas topped with yogurt, chutneys, and spices",
        item4: "Vada Pav", price4: "₹35", description4: "Spicy potato fritter served in a bun with chutneys",
        item5: "Dahi Vada", price5: "₹45", description5: "Soft lentil dumplings soaked in yogurt and topped with chutneys",
        item6: "Chaat Papdi", price6: "₹55", description6: "Crisp papdis topped with potatoes, yogurt, and tangy chutneys"
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
    { id: 1, price: "₹10,000", i1: "Relaxation Retreat Package", i2: "Couples Escape Package", i3: "Detox and Renewal Package", i4: "Ultimate Pampering Package", i5: "Mother-to-Be Package" },
    { id: 2, price: "₹15,000", i1: "60-minute Swedish Massage", i2: "90-minute Couples Massage", i3: "60-minute Deep Tissue Massage", i4: "90-minute Hot Stone Massage", i5: "Prenatal Massage" },
    { id: 3, price: "₹20,000", i1: "30-minute Aromatherapy Session", i2: "Romantic Candlelit Jacuzzi Soak", i3: "Detoxifying Body Wrap", i4: "Luxury Anti-Aging Facial", i5: "Soothing Belly Wrap" },
    { id: 4, price: "₹25,000", i1: "Choice of Facial: Hydrating or Cleansing", i2: "Champagne and Chocolate-Covered Strawberries", i3: "Purifying Facial", i4: "Invigorating Body Scrub", i5: "Gentle Facial for Sensitive Skin" },
    { id: 5, price: "₹30,000", i1: "Access to Spa Facilities", i2: "Complimentary Spa Gift", i3: "Herbal Tea Infusion", i4: "Manicure and Pedicure", i5: "Pregnancy-Safe Skincare Products to Take Home" }
];