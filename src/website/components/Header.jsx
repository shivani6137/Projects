import React from "react";
import Navbar from "./Navbar";

function Header() {
  
  return (
    
    <>
       
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 py-3 align-items-center">
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-start">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
              <h2 className="mb-0">+012 345 6789</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center">
              <a href="index.html" className="navbar-brand ms-lg-5">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">Farm</span>Fresh
                </h1>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-end">
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="/"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="/"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-square rounded-circle" href="/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar/>


    </>
  );
}

export default Header;
