import React from 'react'
import './About.css'
import Navbar from '../component/Navbar';
import Shippingbar from '../component/Shippingbar';
import Footer from '../component/Footer';
import Aboutheaderimage from "../images/About header banner.jpg"

const About = () => {
    return (
        <>
        <Navbar/>
        <Shippingbar/>
            {/* banner */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Aboutheaderimage} className='herobanner' height={400} alt='bannerimage 1' />
                    </div>
                </div>
            </div>

            {/* Why choose us */}

            <div className='why-choose'>
                <h3>Why Choose Us</h3>
                <h2>At Fresh Farms, we believe that food should be as pure as nature intended.
                </h2>
                <p>Fresh fruits and vegetables are naturally rich in essential nutrients, vitamins, and minerals that support a healthy lifestyle.
                </p>

                <div className="stats-section container-fluid py-5">
                    <div className="row text-center justify-content-center">

                        <div className="col-12 col-md-4 mb-4">
                            <div className="stat-box">
                                <h2 className="stat-number">6000+</h2>
                                <p className="stat-text">Happy customers</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className="stat-box">
                                <h2 className="stat-number">28,00,000+</h2>
                                <p className="stat-text">Litres of milk delivered</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className="stat-box">
                                <h2 className="stat-number">68,000+</h2>
                                <p className="stat-text">Plastic Saved</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* we belive section */}

            <div className='our-belive'>
                <h3>We Porudly Say !</h3>
                <h2>Freshness you can trust, straight from the farm
                </h2>
                <p>We bring you handpicked fruits and vegetables grown with care. Pure, natural, and full of flavor just the way nature intended.</p>
                <div className="features-section py-5">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-tree"></i>
                                    </div>
                                    <p className="feature-text">
                                        Open farms for free-grazing cows
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-clipboard-check"></i>
                                    </div>
                                    <p className="feature-text">
                                        Nutritionist-recommended diet
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-leaf"></i>
                                    </div>
                                    <p className="feature-text">
                                        Unlimited feed of fresh organic green grass
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <p className="feature-text">
                                        Raised by a family of generational cowherds
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-infinity"></i>
                                    </div>
                                    <p className="feature-text">
                                        Cow, bull, and calves live together unchained
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center mb-5">
                                <div className="feature-item">
                                    <div className="icon-wrapper mb-3">
                                        <i className="bi bi-heart-fill"></i>
                                    </div>
                                    <p className="feature-text">
                                        Milking is done only after feeding the calves
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* joy Container */}

            <div className="container py-5">
                <h2 className="section-title">The Journey From Farm To Table</h2>

                <div className="row align-items-center g-4">

                    <div className="col-lg-6">
                        <div className>
                            <iframe width="100%" height="345" src="https://www.youtube.com/embed/Qt8SqUB386k?si=GprHKJT9sWWqJPMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="content-box">
                            <p>
                                In recent times, a word called ‘Anemoia’ was coined a longing for a time we’ve never lived, yet somehow deeply miss.
                            </p>
                            <p>
                                Today, many of us crave that simple, honest way of life when food was grown naturally, harvested with care, and shared fresh from the land. A time when trust came from tradition, and quality wasn’t questioned.
                            </p>
                            <p>
                                At Fresh Farms, we bring back that essence of the good old days. By working closely with farmers and following time-tested practices, we ensure that every fruit and vegetable carries the purity, freshness, and authenticity that earlier generations enjoyed.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <Footer/>










        </>
    );
}

export default About;




