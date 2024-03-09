import axios from "axios";
// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
// import { } from 'react-bootstrap';

const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f2f2f2;
`;

const TableHead = styled.thead`
  background-color: #3bb77e;
  color: #fff;
`;

const TableHeadCell = styled.th`
  padding: 10px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #e0f2f1;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

const AddButton = styled(ActionButton)`
  background-color: #1AA260;
  color: #fff;
`;

const DeleteButton = styled(ActionButton)`
  background-color: #7E3517;
  color: #fff;
`;
const StatusButton = styled(ActionButton)`
  background-color: #EE9A4D;
  color: #fff;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Customer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/customer"); // Assuming your JSON server is running on localhost:3000
    console.log(res.data);
    setData(res.data);
  };

//Edit
//   const [formvalue,setFormvalue]=useState({
//     id:"",
//     name:"",
//     email:"",
//     mobile:"",
//     // img:"",
//   });

//   const editdata = async (id) => {
//     const res = await axios.get(`http://localhost:3000/customer/${id}`);
//     console.log(res.data);
//     setFormvalue(res.data);
// }

// const getform=(e)=>{
//   setFormvalue({...formvalue,[e.target.name]:e.target.value});
//   console.log(formvalue);
// }

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/customer/${id}`);
    fetch();
  };

  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/customer/${id}`);
    if (res.data.status === "Block") {
      const res = await axios.patch(`http://localhost:3000/customer/${id}`, {
        status: "Unblock",
      });
      if (res.status === 200) {
        toast.success("Status Unblock success");
        fetch();
      }
    } else {
      const res = await axios.patch(`http://localhost:3000/customer/${id}`, {
        status: "Block",
      });
      if (res.status === 200) {
        localStorage.removeItem("userid");
        localStorage.removeItem("uname");
        toast.success("Status Block success");
        fetch();
      }
    }
  };

  // const submithandel = async (e) => {
  //   e.preventDefault(); // stop page reload
  //   if(validation())
  //   {
  //     const res = await axios.patch(`http://localhost:3000/customer/${formvalue.id}`,formvalue);
  //     console.log(res);
  //     if(res.status===200)
  //     {
  //       setFormvalue({...formvalue,name:"",email:"",mobile:"",img:""});
  //       toast.success('Update success');
  //       fetch();
  //     }
  //   }
  // };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Mobile</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((value, index, arr) => (
            <TableRow key={value.id}>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.email}</TableCell>
              <TableCell>{value.mobile}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <StatusButton
                    onClick={() => statusHandle(value.id)}
                  >
                    {value.status}
                  </StatusButton>

                  <AddButton>Edit</AddButton>
                  <DeleteButton onClick={() => handleDelete(value.id)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
    
  );
}

export default Customer;
