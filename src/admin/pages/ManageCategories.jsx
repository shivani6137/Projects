import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from "react-toastify";


const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f2f2f2;
  max-width: 1000px;
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
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  width: 70%
`;

const AddButton = styled(ActionButton)`
  background-color: #1AA260;
  color: #fff;
  width: 80px;

`;

const DeleteButton = styled(ActionButton)`
  background-color: #7E3517;
  color: #fff;
  width: 80px;
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

function ManageCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  },[]);

  
  const fetch = async () => {
    const res = await axios.get('http://localhost:3000/categories') // Assuming your JSON server is running on localhost:3000
      console.log(res.data);
      setData(res.data);
  };


  const handleDelete = async(id) => {
   const res= await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  };

  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    if (res.data.status === "In stock") {
      const res = await axios.patch(`http://localhost:3000/categories/${id}`, {
        status: "Out stock",
      });
      if (res.status === 200) {
        toast.success("Status changed to Out Stock successfully");
        fetch();
      }
    } else {
      const res = await axios.patch(`http://localhost:3000/categories/${id}`, {
        status: "In stock",
      });
      if (res.status === 200) {
        toast.success("Status changed to In Stock successfully");
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
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((value, index, arr) => (
            <TableRow key={value.id}>
              <TableCell>{value.id}</TableCell>
              <NameCell>{value.cate_name}</NameCell>
              <TableCell><img src={value.cate_img} alt="Category" style={{ maxWidth: '50%', height: 'auto' }} /></TableCell>
              <TableCell>
                <ButtonContainer>
                <StatusButton
                    onClick={() => statusHandle(value.id)}
                  >
                    {value.status}
                  </StatusButton>
                  <AddButton>Edit</AddButton>
                  <DeleteButton  onClick={()=>handleDelete(value.id)}>Delete</DeleteButton>
                </ButtonContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default ManageCategories;
