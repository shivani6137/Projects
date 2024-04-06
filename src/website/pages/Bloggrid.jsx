import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Bloggrid() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/blogs`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <Header />
      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Blog Grid</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </a>
              <a href className="btn btn-secondary py-md-3 px-md-5">
                Blog Grid
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Blog Start */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {/* Blog list Start */}
          {data.map((value, index) => (
            <div key={index} className="col">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src={value.image} alt="pic" />
                <a className="blog-overlay" href>
                  <h4 className="text-white">{value.title}</h4>
                  <span className="text-white fw-bold">{value.date}</span>
                </a>
              </div>
            </div>
          ))}
          {/* Blog list End */}
        </div>
      </div>
      {/* Blog End */}
      <Footer />
    </div>
  );
}

export default Bloggrid;
