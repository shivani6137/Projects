import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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

function ManageBlog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/blogs"); // Assuming your JSON server is running on localhost:3000
    console.log(res.data);
    setData(res.data);
  };

  // Edit
  const [formvalue, setFormvalue] = useState({
    id: "",
    title: "",
    date: "",
    image: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/blogs/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    var result = true;
    if (formvalue.title === "") {
      toast.error("Title is required");
      result = false;
      return false;
    }
    if (formvalue.date === "") {
      toast.error("Date is required");
      result = false;
      return false;
    }
    if (formvalue.image === "") {
      toast.error("Image is required");
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
        `http://localhost:3000/blogs/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        setFormvalue({
          ...formvalue,
          title: "",
          date: "",
          image: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };

  // for delete
  const handleDelete = async (id) => {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.delete(`http://localhost:3000/blogs/${id}`);
    fetch();
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((value, index, arr) => {
            return (
              <TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.title}</TableCell>
                <NameCell>{value.date}</NameCell>
                <TableCell>
                  <img
                    src={value.imgage}
                    alt="Service"
                    style={{ maxWidth: "50%", height: "auto" }}
                  />
                </TableCell>
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
                          <h4 className="modal-title">Edit Products</h4>
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
                                      name="title"
                                      value={formvalue.title}
                                      onChange={getform}
                                      id="name"
                                      placeholder="Title"
                                    />
                                    <label htmlFor="name">Title</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="date"
                                      value={formvalue.date}
                                      onChange={getform}
                                      id="image"
                                      placeholder="Date"
                                    />
                                    <label htmlFor="image">Date</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="image"
                                      value={formvalue.image}
                                      onChange={getform}
                                      id="name"
                                      placeholder="Image"
                                    />
                                    <label htmlFor="name">Image</label>
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
            );
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default ManageBlog;
