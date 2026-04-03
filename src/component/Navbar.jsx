import React from 'react'
import './Navbar.css';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
                <div className="container">

                    {/* LOGO */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" width="90" />
                    </Link>

                    {/* TOGGLE BUTTON */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NAV CONTENT */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* MENU */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        {/* RIGHT SIDE */}
                        <div className="d-lg-flex align-items-center gap-3">

                            {/* SEARCH */}
                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-2 search-input"
                                    type="search"
                                    placeholder="Search products..."
                                />
                                <button className="btn btn-dark">Search</button>
                            </form>

                            {/* ICONS */}
                            <div className="nav-icons d-flex justify-content-center mt-3 mt-lg-0">
                                <Link to="/login" className="icon-link" target='blank'>
                                    <i className="fa-solid fa-circle-user"></i>
                                </Link>
                                <Link to="/cart" className="icon-link">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}


export default Navbar;
