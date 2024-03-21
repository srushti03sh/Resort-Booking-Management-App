import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Clients.css"
import { HomeClients } from '../../../Data/Data';

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
                        {
                            HomeClients.map((data, index) => (
                                <div>
                                    <img src={data.src} alt="" />
                                </div>
                            ))
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Clients
