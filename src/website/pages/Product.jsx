import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Product() {
  const redirect = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };
  return (
    <div>
      <Header />
      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 bg-hero">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Our Products</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </a>
              <a href className="btn btn-secondary py-md-3 px-md-5">
                Products
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Products Start */}

      <div className="container-xxl py-5 bg-light">
        <div className="container py-5 px-lg-5">
          <div className="text-center mb-5">
            {/* <h2 className="section-title text-secondary">Products</h2> */}
            <h1 className="display-4">Our Fresh & Organic Products</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {data.map((value, index) => (
              <div key={index} className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={value.cate_img}
                    className="card-img-top rounded"
                    alt={value.cate_name}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{value.cate_name}</h5>
                    <p className="card-text">{value.id}</p>
                    <button
                      onClick={() => redirect("/viewproducts/" + value.id)}
                      className="btn btn-primary btn-sm mt-auto"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products End */}
      {/* Features Start */}
      <div
        className="container-fluid bg-primary feature py-5 pb-lg-0 mt-5"
        style={{ marginBottom: 135 }}
      >
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
                  alt="pic"
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
      {/* Features End */}
      <Footer />
    </div>
  );
}

export default Product;
