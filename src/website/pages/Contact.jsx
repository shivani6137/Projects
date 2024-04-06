import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddContact = () => {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandle = async (e) => {
    e.preventDefault(); //stop page relaod
    const res = await axios.post("http://localhost:3000/contacts", formvalue);
    console.log(res);
    if (res.status === 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        name: "",
        email: "",
        mobile: "",
        comment: "",
      });
      alert("Details submitted success");
      return false;
    }
  };

  return (
    <div>
      <Header />
      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </a>
              <a href className="btn btn-secondary py-md-3 px-md-5">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="display-5">Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="bg-primary h-100 p-5">
                <form action="" method="post" onSubmit={submithandle}>
                  <div className="row g-3">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Name"
                        name="name"
                        required
                        value={formvalue.name}
                        onChange={getform}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Email"
                        name="email"
                        required
                        value={formvalue.email}
                        onChange={getform}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="number"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Mobile No."
                        name="mobile"
                        required
                        value={formvalue.mobile}
                        onChange={getform}
                        style={{ height: 55 }}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0 px-4 py-3"
                        rows={4}
                        placeholder="Message"
                        name="comment"
                        required
                        value={formvalue.comment}
                        onChange={getform}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-secondary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-secondary h-100 p-5">
                <h2 className="text-white mb-4">Get In Touch</h2>
                <div className="d-flex mb-4">
                  <div
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-geo-alt fs-4 text-white" />
                  </div>
                  <div className="ps-3">
                    <h5 className="text-white">Our Office</h5>
                    <span className="text-white">
                      123 Street, New York, USA
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-envelope-open fs-4 text-white" />
                  </div>
                  <div className="ps-3">
                    <h5 className="text-white">Email Us</h5>
                    <span className="text-white">info@example.com</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-phone-vibrate fs-4 text-white" />
                  </div>
                  <div className="ps-3">
                    <h5 className="text-white">Call Us</h5>
                    <span className="text-white">+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      <Footer />
    </div>
  );
};

export default AddContact;
