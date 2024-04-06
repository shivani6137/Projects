import React, { useState } from "react";

import axios from "axios";

function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/blogs", formData);
    console.log(res);
    // Reset form data after successful submission
    if (res.status === 201) {
      setFormData({
        title: "",
        date: "",
        image: "",
      });
      alert("Blog added successfully");
      return false;
    }
  };

  return (
    <div>
      {/* Blog Start */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Blog list Start */}
          <div className="col-lg-8 container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Blog
              </button>
            </form>
          </div>
          {/* Blog list End */}
        </div>
      </div>
      {/* Blog End */}
    </div>
  );
}

export default AddBlog;
