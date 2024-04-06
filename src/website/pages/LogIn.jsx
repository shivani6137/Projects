import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const redirect = useNavigate(); // redirect any routes

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      redirect("/");
    }
  });

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;

    if (formvalue.email === "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }
    if (formvalue.password === "") {
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
        `http://localhost:3000/customer?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password === formvalue.password) {
          if (res.data[0].status === "Unblock") {
            // create session
            localStorage.setItem("userid", res.data[0].id);
            localStorage.setItem("uname", res.data[0].name);

            toast.success("Login Success");
            redirect("/");
          } else {
            toast.error("Blocked account so contact us...");
            return false;
          }
        } else {
          toast.error("Password incorrect");
          return false;
        }
      } else {
        toast.error("Email does not Exist");
        return false;
      }
    }
  };

  return (
    <div className="center">
      <div className="signup-form">
        <h2>Customer Log In</h2>
        <form action="" method="post" onSubmit={submithandel}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formvalue.email}
            onChange={getform}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formvalue.password}
            onChange={getform}
          />
          <input
            type="submit"
            value="Log In"
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              margin: "20px 0px",
            }}
          />
          <Link to="/signup">If you not Registered then Register Here</Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
