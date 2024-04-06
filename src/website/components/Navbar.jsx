import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("uname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
      <a href="index.html" className="navbar-brand d-flex d-lg-none">
        <h1 className="m-0 display-4 text-secondary">
          <span className="text-white">Farm</span>Fresh
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Service
          </NavLink>
          <NavLink to="/product" className="nav-item nav-link">
            Product
          </NavLink>
          <div className="nav-item dropdown">
            <NavLink
              to="/pages"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </NavLink>
            <div className="dropdown-menu m-0">
              <Link to="/bloggrid" className="dropdown-item">
                Blog Grid
              </Link>
              <Link to="/blogdetail" className="dropdown-item">
                Blog Detail
              </Link>
              <Link to="/features" className="dropdown-item">
                Features
              </Link>
              <Link to="/team" className="dropdown-item">
                The Team
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
          <NavLink to="/websitefeedback" className="nav-item nav-link">
            Feedback
          </NavLink>
          {(() => {
            //  Use  session
            if (localStorage.getItem("userid")) {
              return (
                <NavLink to="/profile" className="nav-item nav-link">
                  Hi {localStorage.getItem("uname")}
                </NavLink>
              );
            }
          })()}
        </div>
        <div className="navbar-nav mx-0 py-0">
          {(() => {
            if (localStorage.getItem("userid")) {
              return (
                <>
                  <button onClick={logout} className="nav-item nav-link">
                    Logout
                  </button>
                </>
              );
            } else {
              return (
                <>
                  <Link to="/login" className="nav-item nav-link">
                    Login
                  </Link>
                </>
              );
            }
          })()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
