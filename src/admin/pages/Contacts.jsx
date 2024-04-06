import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 50px 100px;
`;

const StyledTable = styled.table`
  width: 130%;
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

function Contacts() {
  // const redirect = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/contacts"); // Assuming your JSON server is running on localhost:3000
    console.log(res.data);
    setData(res.data);
  };
  // Edit
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/contacts/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    var result = true;
    if (formvalue.name === "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.email === "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }
    if (formvalue.mobile === "") {
      toast.error("Mobile Field is required");
      result = false;
      return false;
    }
    if (formvalue.comment === "") {
      toast.error("Message Field is required");
      result = false;
      return false;
    }
    return result;
  };
  //  save edit
  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/contacts/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          mobile: "",
          comment: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };

  // for delete

  const handleDelete = async (id) => {
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
            <TableHeadCell>Mobile No.</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
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
              <TableCell>{value.comment}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <AddButton
                    onClick={() => editdata(value.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Edit
                  </AddButton>
                  <DeleteButton onClick={() => handleDelete(value.id)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Contacts</h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        />
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        <div className="container">
                          <form action="" method="post">
                            <div className="row g-4 mp-2">
                              <div className="col-md-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formvalue.name}
                                    onChange={getform}
                                    id="name"
                                    placeholder="Category Name"
                                  />
                                  <label htmlFor="name">Name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={formvalue.email}
                                    onChange={getform}
                                    id="image"
                                    placeholder="Price"
                                  />
                                  <label htmlFor="image">Email</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={formvalue.mobile}
                                    onChange={getform}
                                    id="name"
                                    placeholder="image"
                                  />
                                  <label htmlFor="name">Mobile</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="comment"
                                    value={formvalue.comment}
                                    onChange={getform}
                                    id="name"
                                    placeholder="image"
                                  />
                                  <label htmlFor="name">Message</label>
                                </div>
                              </div>

                              <div className="col-12">
                                <button
                                  onClick={submithandel}
                                  data-bs-dismiss="modal"
                                  className="btn btn-primary w-100 py-3"
                                  type="submit"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default Contacts;
