import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      redirect("/adminlogin");
    }
  });

  const redirect = useNavigate();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const getform = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };

  const validation = () => {
    var result = true;

    if (formValue.username === "") {
      toast.error("Username Field is required");
      result = false;
      return false;
    }
    if (formValue.password === "") {
      toast.error("Password Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/admin?username=${formValue.username}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password === formValue.password) {
          // create session
          localStorage.setItem("adminid", res.data[0].id);
          localStorage.setItem("adminname", res.data[0].name);

          toast.success("Login Success");
          redirect("/dashboard");
        } else {
          toast.error("Password incorrect");
          return false;
        }
      } else {
        toast.error("Username does not Exist");
        return false;
      }
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Welcome to Farm Vegetable Admin Panel</h2>
      <form onSubmit={submithandel}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            // id="username"
            name="username"
            value={formValue.username}
            onChange={getform}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            // id="password"
            type="password"
            name="password"
            value={formValue.password}
            onChange={getform}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
