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
  max-width: 1000px;
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
  width: 70%;
`;

const AddButton = styled(ActionButton)`
  background-color: #1aa260;
  color: #fff;
  width: 80px;
`;

const DeleteButton = styled(ActionButton)`
  background-color: #7e3517;
  color: #fff;
  width: 80px;
`;
const StatusButton = styled(ActionButton)`
  background-color: #ee9a4d;
  color: #fff;
  width: 150px;
  height: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function ManageCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/categories"); // Assuming your JSON server is running on localhost:3000
    console.log(res.data);
    setData(res.data);
  };

  // Edit
  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_name: "",
    cate_img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    var result = true;
    if (formvalue.cate_name === "") {
      toast.error(" Category Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.cate_img === "") {
      toast.error("Category Image Field is required");
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
        `http://localhost:3000/categories/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        setFormvalue({
          ...formvalue,
          cate_name: "",
          cate_img: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };

  // for delete
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  };

  // for status
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
              <TableCell>
                <img
                  src={value.cate_img}
                  alt="Category"
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              </TableCell>
              <TableCell>
                <ButtonContainer>
                  <StatusButton onClick={() => statusHandle(value.id)}>
                    {value.status}
                  </StatusButton>
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
                        <h4 className="modal-title">Edit Categories</h4>
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
                                    name="cate_name"
                                    value={formvalue.cate_name}
                                    onChange={getform}
                                    id="name"
                                    placeholder="Category Name"
                                  />
                                  <label htmlFor="name"> Category Name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="cate_img"
                                    value={formvalue.cate_img}
                                    onChange={getform}
                                    id="image"
                                    placeholder="Category Image"
                                  />
                                  <label htmlFor="image">Category Image</label>
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

export default ManageCategories;
