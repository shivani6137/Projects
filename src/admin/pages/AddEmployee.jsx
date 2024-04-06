import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f2f2f2;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #3bb77e;
  color: #fff;
  cursor: pointer;
`;
const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const AddEmployee = () => {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
    status: "", // For handling image upload
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
    const res = await axios.post("http://localhost:3000/employees", formvalue);
    console.log(res);
    if (res.status === 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: "",
        status: "",
      });
      alert("Employee's details submitted success");
      return false;
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Employee</FormTitle>
      <form action="" method="post" onSubmit={submithandle}>
        <FormGroup>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formvalue.name}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formvalue.email}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password:</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={formvalue.password}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Mobile:</FormLabel>
          <FormInput
            type="text"
            name="mobile"
            value={formvalue.mobile}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Profile Image:</FormLabel>
          <FormInput
            type="url"
            name="img"
            value={formvalue.img}
            onChange={getform}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status:</FormLabel>
          <FormSelect name="status" value={formvalue.status} onChange={getform}>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </FormSelect>
        </FormGroup>

        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddEmployee;
