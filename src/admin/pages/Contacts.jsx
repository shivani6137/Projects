import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  },[]);

  
  const fetch = async () => {
    const res = await axios.get('http://localhost:3000/contacts') // Assuming your JSON server is running on localhost:3000
      console.log(res.data);
      setData(res.data);
  };


  const handleDelete = async(id) => {
   const res = await axios.delete(`http://localhost:3000/contacts/${id}`);
    fetch();
  };
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Comment</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((value, index, arr) => (
            <TableRow key={value.id}>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.email}</TableCell>
              <TableCell>{value.comment}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <AddButton>Edit</AddButton>
                  <DeleteButton onClick={()=>handleDelete(value.id)}>Delete</DeleteButton>
                </ButtonContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default Contacts;
