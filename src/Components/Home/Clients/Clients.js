import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import c1 from "../../../Images/c1.png"
import c2 from "../../../Images/c2.png"
import c3 from "../../../Images/c3.png"
import c4 from "../../../Images/c4.png"
import c5 from "../../../Images/c5.png"
import c6 from "../../../Images/c6.png"
import "./Clients.css"

function Clients() {

    const options = {
        dots: false,
        responsiveClass: true,
        smartSpeed: 400,
        responsive: {
            0: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,

            }
        },
    };

    return (
        <div className='container-fluid clients'>
            <div className='row'>
                <div className='col-md-7 '>
                    <OwlCarousel items={4} margin={30} autoplay={true} loop={true} {...options}>
                        <div className='cpic'>
                            <img src={c1} alt="" />
                        </div>
                        <div className='cpic'>
                            <img src={c2} alt="" />
                        </div>
                        <div className='cpic'>
                            <img src={c3} alt="" />
                        </div>
                        <div className='cpic'>
                            <img src={c4} alt="" />
                        </div>
                        <div className='cpic'>
                            <img src={c5} alt="" />
                        </div>
                        <div className='cpic'>
                            <img src={c6} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Clients
