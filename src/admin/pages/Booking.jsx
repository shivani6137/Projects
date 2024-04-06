import React, { useState, useEffect } from "react";
import axios from "axios";
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

const AddButton = styled(ActionButton)`
  background-color: #4caf50;
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

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bookings") // Assuming your JSON server is running on localhost:3000
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booking data:", error);
      });
  }, []);

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Customer ID</TableHeadCell>
            <TableHeadCell>Service ID</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.id}</TableCell>
              <TableCell>{booking.cust_id}</TableCell>
              <TableCell>{booking.service_id}</TableCell>
              <TableCell>{booking.status}</TableCell>
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

export default Booking;
