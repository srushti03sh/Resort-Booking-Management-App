import React from 'react'
import "./Gallery.css"
import { Link } from 'react-router-dom'
import g1 from "../../Images/g1.jpg"
import g2 from "../../Images/g2.jpg"
import g3 from "../../Images/g3.jpg"
import g4 from "../../Images/g4.jpg"
import g5 from "../../Images/g5.jpg"
import g6 from "../../Images/g6.jpg"
import g7 from "../../Images/g7.jpg"
import g8 from "../../Images/g8.jpg"
import gv1 from "../../Images/gv1.jpg"
import gv2 from "../../Images/gv2.jpg"
import gv3 from "../../Images/gv3.jpg"
import gv4 from "../../Images/gv4.jpg"
import gv5 from "../../Images/gv5.jpg"
import { CiPlay1 } from "react-icons/ci";
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="banner-header valign bg-img bg-fixed" data-overlay-dark="3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left cap mt-90">
              <h5>Images & Videos</h5>
              <h1>Our Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding imgg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Images</div>
              <div className="section-title">Image Gallery</div>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g1} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g2} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g3} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g4} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g5} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g6} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g7} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-item">
              <Link className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={g8} className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-darkblack">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Videos</div>
              <div className="section-title">Video Gallery</div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={gv1} alt="YouTube" />
                  <Link className="video-gallery-button vid" to="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"><CiPlay1 /></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={gv2} alt="Vimeo" />
                  <Link className="video-gallery-button vid" to="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"><CiPlay1 /></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={gv3} alt="YouTube" />
                  <Link className="video-gallery-button vid" to="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"><CiPlay1 /></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={gv4} alt="YouTube" />
                  <Link className="video-gallery-button vid" to="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"><CiPlay1 /></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={gv5} alt="YouTube" />
                  <Link className="video-gallery-button vid" to="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"><CiPlay1 /></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gallery
