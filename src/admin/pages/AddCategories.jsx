import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
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

const FormSelect = styled.select`
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
  background-color: #3BB77E;
  color: #fff;
  cursor: pointer;
`;

const AddCategories = () => {
  const [formvalue, setFormvalue] = useState({
    id:"",
    cate_name: "",
    cate_img: "",
    status: "" // For handling image upload
  });

  const getform=(e)=>{
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  }

  const submithandle = async (e) =>{
    e.preventDefault(); //stop page relaod
    const res = await axios.post('http://localhost:3000/categories', formvalue) 
    console.log(res);
    if(res.status === 201){
      setFormvalue({
        ...formvalue, 
        id:"",
        cate_name: "",
        cate_img: "",
        status: ""
      });
      alert("Categories added successfully");
      return false;
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Category</FormTitle>
      <form action='' method='post' onSubmit={submithandle}>
        <FormGroup>
          <FormLabel>Category Name:</FormLabel>
          <FormInput
            type="text"
            name="cate_name"
            value={formvalue.cate_name}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Category Image:</FormLabel>
          <FormInput
            type="url"
            name="cate_img"
            value={formvalue.cate_img}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status:</FormLabel>
          <FormSelect
            name="status"
            value={formvalue.status}
            onChange={getform}
          >
            <option value="">Select Status</option>
            <option value="In stock">In Stock</option>
            <option value="Out of stock">Out of Stock</option>
          </FormSelect>
        </FormGroup>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddCategories;
