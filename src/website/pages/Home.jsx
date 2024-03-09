import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="website/img/carousel-1.jpg"
                alt="Pic"
              />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: 900 }}>
                  <h3 className="text-white">Organic Vegetables</h3>
                  <h1 className="display-1 text-white mb-md-4">
                    Organic Vegetables For Healthy Life
                  </h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3">
                    Explore
                  </a>
                  <a href className="btn btn-secondary py-md-3 px-md-5">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="website/img/carousel-2.jpg"
                alt="Pic"
              />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: 900 }}>
                  <h3 className="text-white">Organic Fruits</h3>
                  <h1 className="display-1 text-white mb-md-4">
                    Organic Fruits For Better Health
                  </h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3">
                    Explore
                  </a>
                  <a href className="btn btn-secondary py-md-3 px-md-5">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
      {/* Banner Start */}
      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div
                className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
                style={{ height: 300 }}
              >
                <h3 className="text-white mb-3">Organic Vegetables</h3>
                <p className="text-white">
                  Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
                  dolor, amet lorem diam no duo sed dolore amet diam
                </p>
                <a className="text-white fw-bold" href>
                  Read More
                  <i className="bi bi-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
                style={{ height: 300 }}
              >
                <h3 className="text-white mb-3">Organic Fruits</h3>
                <p className="text-white">
                  Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
                  dolor, amet lorem diam no duo sed dolore amet diam
                </p>
                <a className="text-white fw-bold" href>
                  Read More
                  <i className="bi bi-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Start */}
      {/* About Start */}
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                <img
                  className="img-fluid mt-auto mx-auto"
                  src="website/img/about.png"
                  alt="Pic"
                />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <div className="mb-3 pb-2">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5">
                  We Produce Organic Food For Your Family
                </h1>
              </div>
              <p className="mb-4">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                erat amet magna
              </p>
              <div className="row gx-5 gy-4">
                <div className="col-sm-6">
                  <i className="fa fa-seedling display-1 text-secondary" />
                  <h4>100% Organic</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-award display-1 text-secondary" />
                  <h4>Award Winning</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Facts Start */}
      <div className="container-fluid bg-primary facts py-5 mb-5">
        <div className="container py-5">
          <div className="row gx-5 gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-star fs-4 text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Our Experience</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-users fs-4 text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Farm Specialist</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-check fs-4 text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Complete Project</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-mug-hot fs-4 text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Happy Clients</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <h6 className="text-primary text-uppercase">Services</h6>
                <h1 className="display-5">Organic Farm Services</h1>
              </div>
              <p className="mb-4">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit sed stet labore
              </p>
              <a href className="btn btn-primary py-md-3 px-md-5">
                Contact Us
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-carrot display-1 text-primary mb-3" />
                <h4>Fresh Vegetables</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-apple-alt display-1 text-primary mb-3" />
                <h4>Fresh Fruits</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-dog display-1 text-primary mb-3" />
                <h4>Healty Cattle</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-tractor display-1 text-primary mb-3" />
                <h4>Modern Truck</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-seedling display-1 text-primary mb-3" />
                <h4>Farming Plans</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Features Start */}
      <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
        <div className="container py-5 pb-lg-0">
          <div
            className="mx-auto text-center mb-3 pb-2"
            style={{ maxWidth: 500 }}
          >
            <h6 className="text-uppercase text-secondary">Features</h6>
            <h1 className="display-5 text-white">Why Choose Us!!!</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-seedling fs-4 text-white" />
                </div>
                <h4 className="text-white">100% Organic</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-award fs-4 text-white" />
                </div>
                <h4 className="text-white">Award Winning</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                <p>
                  At et justo elitr amet sea at. Magna et sit vero at ipsum sit
                  et dolores rebum. Magna sea eos sit dolor, ipsum amet no
                  tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et
                  et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet
                  dolor duo clita, vero dolor ipsum amet dolore magna lorem erat
                  stet sed vero dolor
                </p>
                <img
                  className="img-fluid"
                  src="website/img/feature.png"
                  alt="Pic"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-tractor fs-4 text-white" />
                </div>
                <h4 className="text-white">Modern Farming</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt fs-4 text-white" />
                </div>
                <h4 className="text-white">24/7 Support</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Start */}
      {/* Products Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
          </div>
          <div className="owl-carousel product-carousel px-5">
            <div className="pb-5">
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="website/img/product-1.png" alt='pic' />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href>
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href>
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="website/img/product-2.png" alt='pic' />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href>
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href>
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="website/img/product-1.png" alt='pic' />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href>
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href>
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="website/img/product-2.png" alt='pic' />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href>
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href>
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="website/img/product-1.png" alt='pic' />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href>
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href>
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products End */}
      {/* Testimonial Start */}
      <div className="container-fluid bg-testimonial py-5 my-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel p-5">
                <div className="testimonial-item text-center text-white">
                  <img
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src="website/img/testimonial-2.jpg"
                    alt="Pic"
                  />
                  <p className="fs-5">
                    Dolores sed duo clita justo dolor et stet lorem kasd dolore
                    lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                    erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
                <div className="testimonial-item text-center text-white">
                  <img
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src="website/img/testimonial-2.jpg"
                    alt="Pic"
                  />
                  <p className="fs-5">
                    Dolores sed duo clita justo dolor et stet lorem kasd dolore
                    lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                    erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">The Team</h6>
            <h1 className="display-5">We Are Professional Organic Farmers</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="website/img/team-1.jpg"
                      alt="Pic"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-twitter text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-facebook-f text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-instagram text-secondary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="website/img/team-2.jpg"
                      alt="Pic"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-twitter text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-facebook-f text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-instagram text-secondary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="website/img/team-3.jpg"
                      alt="Pic"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-twitter text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-facebook-f text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in text-secondary" />
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="/"
                    >
                      <i className="fab fa-instagram text-secondary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Blog Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">Our Blog</h6>
            <h1 className="display-5">Latest Articles From Our Blog Post</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="website/img/blog-1.jpg"
                  alt="Pic"
                />
                <a className="blog-overlay" href>
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="website/img/blog-2.jpg"
                  alt="Pic"
                />
                <a className="blog-overlay" href>
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="website/img/blog-3.jpg"
                  alt="Pic"
                />
                <a className="blog-overlay" href="/">
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      <Footer />
    </div>
  );
}

export default Home;
