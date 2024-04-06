import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
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

const FormFileInput = styled.input`
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
  background-color: #3bb77e;
  color: #fff;
  cursor: pointer;
`;

const AddProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_id: "",
    name: "",
    desc: "",
    price: "",
    img: "",
    status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Available",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandle = async (e) => {
    e.preventDefault(); //stop page relaod
    const res = await axios.post("http://localhost:3000/services", formvalue);
    console.log(res);
    if (res.status === 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        cate_id: "",
        name: "",
        desc: "",
        price: "",
        img: "",
        status: "",
      });
      alert("Products added successfully");
      return false;
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Products</FormTitle>
      <form action="" method="post" onSubmit={submithandle}>
        <FormGroup>
          <FormLabel>Category Name:</FormLabel>

          <FormSelect
            name="cate_id"
            value={formvalue.cate_id}
            onChange={getform}
            required
          >
            <option value="">
              ------- Select Categories of Products ---------
            </option>
            {data.map((value, index, arr) => {
              return <option value={value.id}>{value.cate_name}</option>;
            })}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>Product Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formvalue.name}
            onChange={getform}
            required
          />
        </FormGroup>
        {/* <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormTextarea
            name="desc"
            value={formvalue.desc}
            onChange={getform}
            rows="4"
            required
          />
        </FormGroup> */}
        <FormGroup>
          <FormLabel>Price:</FormLabel>
          <FormInput
            type="number"
            name="price"
            value={formvalue.price}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Product Image:</FormLabel>
          <FormFileInput
            type="url"
            name="img"
            value={formvalue.img}
            onChange={getform}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status:</FormLabel>
          <FormSelect name="status" value={formvalue.status} onChange={getform}>
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </FormSelect>
        </FormGroup>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddProducts;
