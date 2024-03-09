import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formValue;
    if (username === 'admin@1234' && password === '123456') {
      toast.success('Login successful');
      navigate('/dashboard');
    } else {
      toast.error('Invalid username or password');
    }
  }


 
  return (
    <div className="admin-login-container">
      <h2>Welcome to Farm Vegetable Admin Panel</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formValue.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
       
      </form>
    </div>
  );
};

export default AdminLogin;
