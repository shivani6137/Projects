import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from "react-toastify";

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f2f2f2;
  max-width: 1100px;
`;

const TableHead = styled.thead`
  background-color: #3BB77E;
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

const NameCell = styled(TableCell)`
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

const AddButton = styled(ActionButton)`
  background-color: #4CAF50;
  color: #fff;
`;

const DeleteButton = styled(ActionButton)`
  background-color: #f44336;
  color: #fff;
`;

const StatusButton = styled(ActionButton)`
  background-color: #EE9A4D;
  color: #fff;
  width: 150px;
  height: 40px
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function ManageProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  },[]);

  
  const fetch = async () => {
    const res = await axios.get('http://localhost:3000/services') // Assuming your JSON server is running on localhost:3000
      console.log(res.data);
      setData(res.data);
  };


  const handleDelete = async(id) => {
   const res= await axios.delete(`http://localhost:3000/services/${id}`);
    fetch();
  };

  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
    if (res.data.status === "Available") {
      const res = await axios.patch(`http://localhost:3000/services/${id}`, {
        status: "Unavailable",
      });
      if (res.status === 200) {
        toast.success("Status changed to Unavailable  successfully");
        fetch();
      }
    } else {
      const res = await axios.patch(`http://localhost:3000/services/${id}`, {
        status: "Available",
      });
      if (res.status === 200) {
        toast.success("Status changed to Available successfully");
        fetch();
      }
    }
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Cate ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            {/* <TableHeadCell>Description</TableHeadCell> */}
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {data.map ((value, index, arr) => {
            return(
              <TableRow>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.cate_id}</TableCell>
              <NameCell>{value.name}</NameCell>
              {/* <TableCell>{value.desc}</TableCell> */}
              <TableCell>{value.price}</TableCell>
              <TableCell><img src={value.img} alt="Service" style={{ maxWidth: '50%', height: 'auto' }} /></TableCell>
              <TableCell>
                <ButtonContainer>
                <StatusButton
                    onClick={() => statusHandle(value.id)}
                  >
                    {value.status}
                  </StatusButton>
                  <AddButton>Edit</AddButton>
                  <DeleteButton onClick={()=>handleDelete(value.id)}>Delete</DeleteButton>
                </ButtonContainer>
              </TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default ManageProducts;
