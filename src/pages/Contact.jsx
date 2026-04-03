import React from 'react'
import './Contact.css'
import Navbar from '../component/Navbar';
import Shippingbar from '../component/Shippingbar';
import Footer from '../component/Footer';
const Contact = () => {
    return (
        <>
            <Navbar />
            <Shippingbar />

            <div className="map-section">
                
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.853221056549!2d80.23876157792374!3d12.852755255097005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ba8cda8b231%3A0x781f3b23ed31a3bc!2se-commerce!5e0!3m2!1sen!2sin!4v1775195604103!5m2!1sen!2sin"
                     allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>




            <div className="contact-page container-fluid py-5">



                <div className="container">
                    <div className="row">

                        {/* Left Section */}
                        <div className="col-lg-5 mb-4">
                            <div className="contact-info p-4 shadow-sm">
                                <h3 className="mb-3">Get in Touch</h3>
                                <p className="text-muted mb-4">
                                    Have questions about your order or our products?
                                </p>

                                <div className="info-item d-flex align-items-start mb-3">
                                    <i className="bi bi-geo-alt-fill me-3 icon"></i>
                                    <div>
                                        <h6>Address</h6>
                                        <p>123 E-Commerce Street, Chennai, India</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex align-items-start mb-3">
                                    <i className="bi bi-telephone-fill me-3 icon"></i>
                                    <div>
                                        <h6>Phone</h6>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex align-items-start mb-3">
                                    <i className="bi bi-envelope-fill me-3 icon"></i>
                                    <div>
                                        <h6>Email</h6>
                                        <p>support@shop.com</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex align-items-start">
                                    <i className="bi bi-clock-fill me-3 icon"></i>
                                    <div>
                                        <h6>Working Hours</h6>
                                        <p>Mon - Sat: 9AM - 7PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Form */}
                        <div className="col-lg-7">
                            <div className="contact-form p-4 shadow-sm">
                                <h3 className="mb-4">Send Message</h3>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-dark w-100">
                                        <i className="bi bi-send-fill me-2"></i>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <Footer />
        </>
    );
}

export default Contact;



