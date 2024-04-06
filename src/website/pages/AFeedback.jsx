import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AFeedback() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = async (e) => {
    e.preventDefault(); //stop page reload
    const res = await axios.post("http://localhost:3000/feedbacks", formvalue);
    if (res.status === 201) {
      setFormvalue({
        id: "",
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
      alert("Details submitted successfully");
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
              <h1 className="display-1 text-white mb-md-4">Feedback</h1>
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
      {/* feedback Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 1000 }}>
            <h6 className="text-primary text-uppercase">Feedback Form</h6>
            <h1 className="display-5">We Value Your Feedback</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-10 container">
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
                      <textarea
                        className="form-control bg-light border-0 px-4 py-3"
                        rows={4}
                        placeholder="Your Feedback"
                        name="feedback"
                        required
                        value={formvalue.feedback}
                        onChange={getform}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Rating:</label>
                      <select
                        className="form-select bg-light border-0 px-4"
                        name="rating"
                        value={formvalue.rating}
                        onChange={getform}
                      >
                        <option value="">Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                      </select>
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
          </div>
        </div>
      </div>
      {/* feedback End */}

      <Footer />
    </div>
  );
}

export default AFeedback;
