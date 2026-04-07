import React from 'react'
import './Shop.css'
import Navbar from '../component/Navbar';
import Shippingbar from '../component/Shippingbar';
import Footer from '../component/Footer';
import { ShopPageProduct } from '../constant/data';

const Shop = () => {
    return (
        <>
            <Navbar />
            <Shippingbar />
            {/* <Navbar/> */}
            <div>

                <div className="container-fluid shop-header py-4">
                    <div className="row align-items-center">

                        {/* Left Section */}
                        <div className="col-12 col-md-4 d-flex flex-wrap align-items-center gap-2 mb-2 mb-md-0">
                            <span className="fw-semibold">Filter:</span>

                            {/* Availability Dropdown */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-dark btn-sm dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Availability
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">In Stock</a></li>
                                    <li><a className="dropdown-item" href="#">Out of Stock</a></li>
                                </ul>
                            </div>

                            {/* Price Dropdown */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-dark btn-sm dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Price
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Low to High</a></li>
                                    <li><a className="dropdown-item" href="#">High to Low</a></li>
                                    <li><a className="dropdown-item" href="#">Under ₹100</a></li>
                                    <li><a className="dropdown-item" href="#">Above ₹500</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Center Section */}
                        <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
                            <h5 className="m-0">SHOP ALL</h5>
                        </div>

                        {/* Right Section */}
                        <div className="col-12 col-md-4 d-flex justify-content-md-end align-items-center gap-2">
                            <span className="fw-semibold">Sort by:</span>

                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-dark btn-sm dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Featured
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Featured</a></li>
                                    <li><a className="dropdown-item" href="#">Best Selling</a></li>
                                    <li><a className="dropdown-item" href="#">Newest</a></li>
                                    <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                                    <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Grid */}

                <div className="section">
                    <div className="products">
                        {ShopPageProduct.map((product) => (
                            <div className="card" key={product.id}>
                                <div className="image-box">
                                    <img src={product.image} alt={product.name} />
                                </div>

                                <h3>{product.name}</h3>

                                <div className="price">
                                    ₹ {product.price}.00 <del>₹ {product.oldPrice}.00</del>
                                </div>

                                <select>
                                    {product.options.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>

                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />

        </>
    );
}

export default Shop;
