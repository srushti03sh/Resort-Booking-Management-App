import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import re1 from "../../Images/re1.jpg"
import re2 from "../../Images/re2.jpg"
import re3 from "../../Images/re3.jpg"
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import { LuClock3 } from "react-icons/lu";
import "./Restaurant.css"

function Restaurant() {

  const options = {
    responsiveClass: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  const options1 = {
    responsiveClass: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 4,
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="video-fullscreen-wrap">
        <div className="video-fullscreen-video" >
          <OwlCarousel items={1} autoplay={true} loop={true} {...options} nav={true}>
            <div data-overlay-dark="3">
              <img src={re1} alt="" />
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Restaurant
                      </h4>
                      <h1>
                        A dining experience worth sharing.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-overlay-dark="3">
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Restaurant
                      </h4>
                      <h1>
                        A destination for food lovers
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={re2} alt="" />
            </div>
            <div data-overlay-dark="3">
              <div className="v-middle caption overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <h4>
                        Restaurant
                      </h4>
                      <h1>
                        Elegance on every plate
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={re3} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className='section-padding res'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-12 text-left">
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">An Experience for the Senses</div>
              <div className="section-title">The Restaurant</div>
            </div>
            <div className="col-md-12">
              <p className="mb-30">Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>
              <h6>Hours</h6>
              <ul className="list-unstyled page-list mb-30">
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Breakfast: 7.00 am - 11.00 am (daily)</p>
                  </div>
                </li>
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Lunch: 12.00 noon - 2.00 pm (daily)</p>
                  </div>
                </li>
                <li>
                  <div className="page-list-icon"> <span><LuClock3 /></span> </div>
                  <div className="page-list-text">
                    <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                  </div>
                </li>
              </ul>
              <h6>Dress Code</h6>
              <p>Smart casual (no shorts, hats, or sandals permitted)</p>
              <h6>Terrace</h6>
              <p>Open for drinks only</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-padding res-menu'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle"><span>Luxury Hotel</span></div>
              <div className="section-title"><span>Restaurant Menu</span></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1 text-center'>
              <OwlCarousel loop={true} {...options1} className='menu-title' nav={true}>
                <div className="menu-name" >
                  Starters
                </div>
                <div className="menu-name">
                  Mains
                </div>
                <div className="menu-name">
                  Salads
                </div>
                <div className="menu-name">
                  Wine
                </div>
                <div className="menu-name">
                  Breakfast
                </div>
                <div className="menu-name">
                  Dessert
                </div>
              </OwlCarousel>
            </div>
            <div className="restaurant-menu-content col-md-12">
              <div className="cont active">
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Mozzarella Dippers <span className="price">27$</span></h5>
                      <p>Fried mozzarella sticks, marinara sauce</p>
                    </div>
                    <div className="menu-info">
                      <h5>Onion Rings <span className="price">32$</span></h5>
                      <p>Fried onion rings, smoked aioli</p>
                    </div>
                    <div className="menu-info">
                      <h5>Fried Jalapeno <span className="price">52$</span></h5>
                      <p>Fried jalapeno pickles, cheddar sauce</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>Buffalo Wings <span className="price">37$</span></h5>
                      <p>Spicy chicken wings, blue cheese sauce, carrot, celery</p>
                    </div>
                    <div className="menu-info">
                      <h5>Chilli Con Carne <span className="price">32$</span></h5>
                      <p>Spicy ground beef, bacon, kidney beans</p>
                    </div>
                    <div className="menu-info">
                      <h5>Potato Skins <span className="price">42$</span></h5>
                      <p>Crispy potato skins; bacon &amp; cheddar or vegetables</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont" >
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Rusty's Burger <span className="price">27$</span></h5>
                      <p>Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion</p>
                    </div>
                    <div className="menu-info">
                      <h5>Cajun Fish Steak <span className="price">32$</span></h5>
                      <p>Cajun spicied seabass, deep fried baby potatoes, side salad</p>
                    </div>
                    <div className="menu-info">
                      <h5>Southern Fried Chicken <span className="price">52$</span></h5>
                      <p>Cajun coated chicken breast, fries and honey mustard</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>Crab Cake <span className="price">37$</span></h5>
                      <p>Breaded crab cakes, tartar sauce, apple and fennel salad</p>
                    </div>
                    <div className="menu-info">
                      <h5>Baby Back Ribs <span className="price">32$</span></h5>
                      <p>Bbq glazed baby pork ribs, coleslaw, fries</p>
                    </div>
                    <div className="menu-info">
                      <h5>Smokehouse Combo <span className="price">42$</span></h5>
                      <p>Smoked beef brisket, rib and sausage, coleslaw, cornbread</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont" >
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Ceaser Salad <span className="price">47$</span></h5>
                      <p>Romaine lettuce, croutons, parmigiano, Ceaser dressing.</p>
                    </div>
                    <div className="menu-info">
                      <h5>Waldorf Salad <span className="price">52$</span></h5>
                      <p>Lettuce, celery, apple, grape, walnut, waldorf sauce</p>
                    </div>
                    <div className="menu-info">
                      <h5>Quinoa &amp; Avocado Salad <span className="price">52$</span></h5>
                      <p>Quinoa, avocado, mixed greens. Nuts, dried and fresh fruits</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>Grilled Salmon Salad <span className="price">37$</span></h5>
                      <p>Grilled salmon, mixed greens, capers, orange slices</p>
                    </div>
                    <div className="menu-info">
                      <h5>Chicken Cobb Salad <span className="price">32$</span></h5>
                      <p>Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon</p>
                    </div>
                    <div className="menu-info">
                      <h5>Salad Chicken <span className="price">42$</span></h5>
                      <p> Ceaser dressing. Optional grilled chicken breast</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont" >
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Château d'Yquem 2011 <span className="price">400$</span></h5>
                      <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                    </div>
                    <div className="menu-info">
                      <h5>Alvear Cream NV <span className="price">30$</span></h5>
                      <p>Dessert, Fortified Wine, Andalucia</p>
                    </div>
                    <div className="menu-info">
                      <h5>Chateau D'yquem 1990 <span className="price">900$</span></h5>
                      <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>La Grande Année 2007 <span className="price">400$</span></h5>
                      <p>Rosé, Champagne</p>
                    </div>
                    <div className="menu-info">
                      <h5>Sine Qua Non 2012 <span className="price">520$</span></h5>
                      <p>Syrah, Shiraz &amp; Blends, California</p>
                    </div>
                    <div className="menu-info">
                      <h5>W.S. Keyes Winery 2006 <span className="price">240$</span></h5>
                      <p>Merlot, California, Napa, Howell Mountain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont" >
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Egg Benedict <span className="price">60$</span></h5>
                      <p>English muffin, beef, hollandaise sauce, poached egg.</p>
                    </div>
                    <div className="menu-info">
                      <h5>Texas Benedict <span className="price">30$</span></h5>
                      <p>English muffin, short ribs, bbq sauce, poached egg.</p>
                    </div>
                    <div className="menu-info">
                      <h5>Rusty's Omlette <span className="price">22$</span></h5>
                      <p>Mozzarella, cheddar, caramelized onion, black beans.</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>Salmon Bagel <span className="price">30$</span></h5>
                      <p>Smoked salmon, cream cheese, dill, rocket, red onion.</p>
                    </div>
                    <div className="menu-info">
                      <h5>Breakfast Bagel <span className="price">33$</span></h5>
                      <p>Chocolate, marshmallow, biscuit bar</p>
                    </div>
                    <div className="menu-info">
                      <h5>Rusty's Pancake <span className="price">40$</span></h5>
                      <p>Strawberry, white chocolate, dark chocolate, crispearls</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont" >
                <div className="row">
                  <div className="col-md-5">
                    <div className="menu-info">
                      <h5>Bourbon Pecan Pie <span className="price">67$</span></h5>
                      <p>Bourbon pecan stuffed pie, vanilla ice-cream</p>
                    </div>
                    <div className="menu-info">
                      <h5>New York Cheesecake <span className="price">50$</span></h5>
                      <p>Cheesecake, strawberry &amp; lime salad</p>
                    </div>
                    <div className="menu-info">
                      <h5>Rusty's ice-cream <span className="price">32$</span></h5>
                      <p>Vanilla, bourbon, cookie, chocolate ice-cream</p>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="menu-info">
                      <h5>S'mores <span className="price">40$</span></h5>
                      <p>Chocolate chip cookies, marshmallow, chocolate</p>
                    </div>
                    <div className="menu-info">
                      <h5>Rocky Road <span className="price">42$</span></h5>
                      <p>Chocolate, marshmallow, biscuit bar</p>
                    </div>
                    <div className="menu-info">
                      <h5>Apple &amp; Pear Crumble <span className="price">42$</span></h5>
                      <p>Caramelized pear and apple, oat crumble, vanilla ice-cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Restaurant
