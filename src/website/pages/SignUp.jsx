
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

  const redirect=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('userid'))
    {
        redirect('/');
    }
  },);

  const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const validation=()=>{

    var result=true;
    if(formvalue.name==="")
    {
       toast.error('Name Field is required');
        result=false;
        return false;
    }
    if(formvalue.email==="")
    {
      toast.error('Email Field is required');
        result=false;
        return false;
    }
    if(formvalue.password==="")
    {
      toast.error('Password Field is required');
        result=false;
        return false;
    }
    if(formvalue.mobile==="")
    {
      toast.error('Mobile Field is required');
        result=false;
        return false;
    }
    return result;

  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if(validation())
    {
      const res = await axios.post(`http://localhost:3000/customer`,formvalue);
      //console.log(res);
      if(res.status===201)
      {
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",img:""});
        toast.success('Signup success');
        return false;
      }
    }
  }

      return (
        <div className="center">
          <div className="signup-form">
            <h2>Customer Sign Up</h2>
            <form action="" method="post" onSubmit={submithandel}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formvalue.name}
                onChange={getform}
              />
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
                type="number"
                name="mobile"
                placeholder="mobile"
                value={formvalue.mobile}
                onChange={getform}
              />
              <input
                type="submit"
                value="Sign Up"
                style={{ backgroundColor: '#4CAF50', color: '#fff', margin:'20px 0px' }}
              />
              <Link to="/login">If you already Registered then Login Here</Link>
            </form>
          </div>
        </div>
      );
    }
export default SignUp
