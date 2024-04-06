import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    axios
      .get("http://localhost:3000/feedbacks") // Assuming your JSON server is running on localhost:3000
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback data:", error);
      });
  }, []);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/feedbacks"); // Assuming your JSON server is running on localhost:3000
    console.log(res.data);
    setFeedbacks(res.data);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/feedbacks/${id}`);
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
            <TableHeadCell>Feedback</TableHeadCell>
            <TableHeadCell>Rating</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell>{feedback.id}</TableCell>
              <TableCell>{feedback.name}</TableCell>
              <TableCell>{feedback.email}</TableCell>
              <TableCell>{feedback.feedback}</TableCell>
              <TableCell>{feedback.rating}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <DeleteButton onClick={() => handleDelete(feedback.id)}>
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

export default Feedback;
