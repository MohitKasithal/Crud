import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { deleteListItem, deleteUser, getListApi } from "../Store/ListSlice";
function ProductList() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.proSilce);

  useEffect(() => {
    dispatch(getListApi());
  }, []);

  const handleRemoveUser = (id) => {
    dispatch(deleteListItem(id.toString()));
    dispatch(deleteUser(id.toString()));
  };

  return (
    <div className="table h-75">
      <Header />
      <div className=" table-div d-flex align-items-center justify-content-center flex-column   ">
        <Table className="col-sm-3  col-md-12 mt-3" hover striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company</th>
              <th>Description</th>
              <th>Price</th>
              <th> Delete </th>
              <th> Update </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.companyName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveUser(item.id)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Link to={"Update/" + item.id}>
                    <Button variant="success">Update</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
