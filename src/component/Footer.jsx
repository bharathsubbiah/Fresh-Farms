import React from 'react'
import './footer.css'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row gy-4 text-center text-sm-start">

                    <div className="col-12 col-sm-6 col-lg-3">
                        <Link className="navbar-brand" to="/">

                            <img src={logo} width={100} height={100} />
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-decoration-none text-dark">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-decoration-none text-dark">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/shop" className="text-decoration-none text-dark">Shop</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-decoration-none text-dark">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                        <h5 className="mb-3">Customer Service</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/login" className="text-decoration-none text-dark" target='blank'>My Account</Link></li>
                            <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Order Tracking</Link></li>
                            <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Wishlist</Link></li>
                            <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Returns</Link></li>
                            <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <h5 className="mb-3">Newsletter</h5>
                        <p className="text-dark">
                            Subscribe to get updates on new arrivals and offers.
                        </p>
                        <form className="row g-2">
                            <div className="col-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-danger w-100">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <hr className="border-secondary my-4" />

                <div className="text-center text-secondary">
                    <p className="mb-0">&copy; 2026 Fresh Farm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
