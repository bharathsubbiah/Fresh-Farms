import React from 'react'
import { Link } from "react-router-dom";
import './Login.css'
import Loginimage from "../images/login image.png";

const Login = () => {
  return (
 <>   
<div className="container-fluid vh-100 px-0">
      <div className="row h-100 g-0">

        {/* LEFT SIDE */}
        <div className="col-lg-5 d-flex align-items-center left-panel">
          <div className="form-container w-100 px-4 px-md-5">

            <h5 className="logo mb-4">Fresh Farm</h5>

            <h1 className="title">
              Start Your <br /> Day Fresh
            </h1>

            <p className="subtitle">
              Manage your deliveries and explore fresh dairy products.
              Customize orders, update preferences. Enjoy farm-to-door freshness.
            </p>

            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Enter E-mail"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="Enter Password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="#" className="forgot">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-signin w-100">
                Login
              </button>
            </form>

            <p className="signup mt-4">
              Don't have an account? <Link to="/register">Register</Link>
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-7 d-none d-lg-block right-panel">
          <img
            src={Loginimage}  
            alt="farm"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

      </div>
    </div>
 </>   
  );
}

export default Login;
