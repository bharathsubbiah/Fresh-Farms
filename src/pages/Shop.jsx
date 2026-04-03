import React from 'react'
import './Shop.css'
import Navbar from '../component/Navbar';
import Shippingbar from '../component/Shippingbar';
import Footer from '../component/Footer';
import productghee from "../images/product images/Ghees.jpg"
import productcheese from "../images/product images/Cheese.jpg"
import productdals from "../images/product images/Dals.jpg"
import productmilkpouch from "../images/product images/Milk pouch.jpg"
import productmilk from "../images/product images/Milk.jpg"
import productoil from "../images/product images/Oil.jpg"
import productbuffalomilk from "../images/product images/buffalo milk.jpg"
import productjaggery from "../images/product images/jaggery.jpg"
import productpanner from "../images/product images/paneer.jpg"
import productpoha from "../images/product images/poha.jpg"
import productsalt from "../images/product images/salt.jpg"

const Shop = () => {
    return (
        <>
        <Navbar/>
        <Shippingbar/>
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
                <div className='section'>

                    <div className="products">

                        <div className="card">
                            <div className="image-box">
                                <img src={productghee} alt="ghee" />
                            </div>
                            <h3>Desi Cow's Ghee</h3>
                            <div className="price">₹ 650.00 <del>₹ 700.00</del></div>
                            <select>
                                <option>250 ML</option>
                                <option>500 ML</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productbuffalomilk} alt="bufallo milk" />
                            </div>
                            <h3>Buffalo Milk</h3>
                            <div className="price">₹ 40.00 <del>₹ 50.00</del></div>
                            <select>
                                <option>250 ML</option>
                                <option>500 ML</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productdals} alt="dals" />
                            </div>
                            <h3>Dals</h3>
                            <div className="price">₹ 199.00 <del>₹ 299.00</del></div>
                            <select>
                                <option>250 g</option>
                                <option>500 g</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productmilk} alt="milk" />
                            </div>
                            <h3>Cow's Milk</h3>
                            <div className="price">₹ 25.00 <del>₹ 30.00</del></div>
                            <select>
                                <option>250 ML</option>
                                <option>500 ML</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productmilkpouch} alt="milkpouch" />
                            </div>
                            <h3>Cow Milk Pouch</h3>
                            <div className="price">₹ 25.00 <del>₹ 30.00</del></div>
                            <select>
                                <option>250 ML</option>
                                <option>500 ML</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productoil} alt="ghee" />
                            </div>
                            <h3>Oil Glass Bottle</h3>
                            <div className="price">₹ 650.00 <del>₹ 799.00</del></div>
                            <select>
                                <option>250 ML</option>
                                <option>500 ML</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productjaggery} alt="jaggery" />
                            </div>
                            <h3>Jaggery Powder</h3>
                            <div className="price">₹ 199.00 <del>₹ 299.00</del></div>
                            <select>
                                <option>250 gm</option>
                                <option>500 gm</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productpoha} alt="poha" />
                            </div>
                            <h3>Poha Breakfast</h3>
                            <div className="price">₹ 150.00 <del>₹ 250.00</del></div>
                            <select>
                                <option>250 gm</option>
                                <option>500 gm</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <div className="image-box">
                                <img src={productpanner} alt="paneer" />
                            </div>
                            <h3>Paneer</h3>
                            <div className="price">₹ 200.00 <del>₹ 250.00</del></div>
                            <select>
                                <option>250 gm</option>
                                <option>500 gm</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>


                        <div className="card">
                            <div className="image-box">
                                <img src={productcheese} alt="cheese" />
                            </div>
                            <h3>Cheese</h3>
                            <div className="price">₹ 200.00<del>₹ 250.00</del> </div>
                            <select>
                                <option>250 gm</option>
                                <option>500 gm</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                    </div>
                </div>

            </div>

            <Footer/>

        </>
    );
}

export default Shop;
