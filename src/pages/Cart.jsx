import React from 'react'
import './Cart.css'
import Navbar from '../component/Navbar'
import Shippingbar from '../component/Shippingbar'
import Footer from '../component/Footer'
import productghee from "../images/product images/Ghees.jpg"
import productcheese from "../images/product images/Cheese.jpg"

const Cart = () => {
    return (
        <>
            <Navbar />
            <Shippingbar />
            <div className="container my-5">
                <div className="row g-4">

                    {/* LEFT SIDE - CART ITEMS */}
                    <div className="col-lg-8">
                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th>PRODUCT</th>
                                        <th className="text-center">QUANTITY</th>
                                        <th className="text-end">SUBTOTAL</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src={productghee}
                                                    alt="Ghee"
                                                    className="product-img"
                                                />
                                                <div>
                                                    <h6 className="mb-1">Ghee</h6>
                                                    <small className="text-muted">250 ml</small>
                                                    <div className="text-muted">₹ 650.00 <del>₹ 700.00</del></div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-center">
                                            <div className="qty-box">
                                                <button>-</button>
                                                <span>1</span>
                                                <button>+</button>
                                            </div>
                                        </td>

                                        <td className="text-end">₹ 650.00</td>

                                        <td className="text-end">
                                            <i className="bi bi-trash"></i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src={productcheese}
                                                    alt="Cheese"
                                                    className="product-img"
                                                />
                                                <div>
                                                    <h6 className="mb-1">Cheese</h6>
                                                    <small className="text-muted">250 gm</small>
                                                    <div className="text-muted">₹ 200.00 <del>₹ 250.00</del></div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-center">
                                            <div className="qty-box">
                                                <button>-</button>
                                                <span>1</span>
                                                <button>+</button>
                                            </div>
                                        </td>

                                        <td className="text-end">₹ 200.00</td>

                                        <td className="text-end">
                                            <i className="bi bi-trash"></i>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* RIGHT SIDE - CART TOTAL */}
                    <div className="col-lg-4">
                        <div className="cart-box p-4">
                            <h4 className="mb-4">Cart Total</h4>

                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>₹ 850.00</span>
                            </div>

                             <div className="d-flex justify-content-between mb-3">
                                <span>Shipping Charge</span>
                                <span>₹ 50.00</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between fw-bold mb-4">
                                <span>Total</span>
                                <span>₹ 900.00</span>
                            </div>

                            <button className="btn btn-dark w-100 mb-2">
                                UPDATE CART
                            </button>

                            <button className="btn btn-dark w-100 mb-2">
                                CONTINUE SHOPPING
                            </button>

                            <button className="btn btn-warning w-100 fw-bold">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
}

export default Cart;
