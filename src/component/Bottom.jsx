import React from 'react'
import './Bottom.css';

const Bottom = () => {
  return (
    // <div className="top-menu">

    //   <div className="menu-item">
    //     <i className="fas fa-rotate-left icon"></i>
    //     <p>RETURN POLICY</p>
    //   </div>

    //   <div className="menu-item">
    //     <i className="fas fa-blog icon"></i>
    //     <p>BLOG</p>
    //   </div>

    //   <div className="menu-item">
    //     <i className="fas fa-truck icon"></i>
    //     <p>TRACK YOUR ORDER</p>
    //   </div>

    //   <div className="menu-item">
    //     <i className="fas fa-envelope icon"></i>
    //     <p>CONTACT US</p>
    //   </div>

    //   <div className="menu-item">
    //     <i className="fas fa-handshake icon"></i>
    //     <p>ASSOCIATE WITH US</p>
    //   </div>

    //   <div className="menu-item">
    //     <i className="fas fa-newspaper icon"></i>
    //     <p>MEDIA COVERAGE</p>
    //   </div>

    // </div>

    <div className="container-fluid top-menu py-3">
  <div className="container">
    <div className="row text-center g-3">

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-rotate-left icon"></i>
          <p>RETURN POLICY</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-blog icon"></i>
          <p>BLOG</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-truck icon"></i>
          <p>TRACK YOUR ORDER</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-envelope icon"></i>
          <p>CONTACT US</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-handshake icon"></i>
          <p>ASSOCIATE WITH US</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <div className="menu-box">
          <i className="fas fa-newspaper icon"></i>
          <p>MEDIA COVERAGE</p>
        </div>
      </div>

    </div>
  </div>
</div>
  );
}

export default Bottom;
