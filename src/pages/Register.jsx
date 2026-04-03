import React from 'react'
import { Link } from "react-router-dom";
import Loginimage from "../images/login image.png";
import './Login.css'

const Register = () => {
  return (
   <>
    <div className="container-fluid vh-100 px-0">
      <div className="row h-100 g-0">

        {/* LEFT SIDE */}
        <div className="col-lg-5 d-flex align-items-center left-panel">
          <div className="form-container w-100 px-4 px-md-5">

            <h5 className="logo mb-4">Fresh Farm</h5>

            <h1 className="title">
              Create Account
            </h1>

            <br></br>

            <form>

                <div className="mb-3">
                <input
                  type="name"
                  className="form-control custom-input"
                  placeholder="Enter Your Name"
                />
              </div>


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

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="Confirm Password"
                />
              </div>

             <button type="submit" className="btn btn-signin w-100">
                Register
              </button> 

            </form>

            <p className="signup mt-4">
              Already have an account? <Link to="/login">Login</Link>
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
  )
}

export default Register
