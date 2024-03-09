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

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/feedbacks') // Assuming your JSON server is running on localhost:3000
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Booking ID</TableHeadCell>
            <TableHeadCell>Customer ID</TableHeadCell>
            <TableHeadCell>Comment</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {feedbacks.map(feedback => (
            <TableRow key={feedback.id}>
              <TableCell>{feedback.id}</TableCell>
              <TableCell>{feedback.booking_id}</TableCell>
              <TableCell>{feedback.cust_id}</TableCell>
              <TableCell>{feedback.comment}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <AddButton>Edit</AddButton>
                  <DeleteButton>Delete</DeleteButton>
                </ButtonContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default Feedback;
