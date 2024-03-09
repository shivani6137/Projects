import React from 'react'
import { Link, NavLink } from "react-router-dom";


function Anavbar() {
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
        <NavLink to="/dashboard" className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink to="/customer" className="nav-item nav-link">
          Customer
        </NavLink>
        
        <div className="nav-item dropdown">
          <NavLink
            to="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Employee
          </NavLink>
          <div className="dropdown-menu m-0">
            <Link to="/manageemployee" className="dropdown-item">
              Manage Employee
            </Link>
            <Link to="/AddEmployee" className="dropdown-item">
            Add Employee
            </Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <NavLink
            to="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Categories
          </NavLink>
          <div className="dropdown-menu m-0">
            <Link to="/ManageCategories" className="dropdown-item">
              Manage categories
            </Link>
            <Link to="/addcategories" className="dropdown-item">
            Add categories
            </Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <NavLink
            to="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Products
          </NavLink>
          <div className="dropdown-menu m-0">
            <Link to="/manageproducts" className="dropdown-item">
              Manage Products
            </Link>
            <Link to="/addproducts" className="dropdown-item">
            Add Products
            </Link>
          </div>
        </div>
        <NavLink to="/booking" className="nav-item nav-link">
          Booking
        </NavLink>
        <NavLink to="/feedback" className="nav-item nav-link">
          Feedback
        </NavLink>
        <NavLink to="/contacts" className="nav-item nav-link">
          Contact
        </NavLink>
      </div>
    </div>
  </nav>
  )
}

export default Anavbar
