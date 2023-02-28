import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { deleteListItem, deleteUser, getListApi } from "../Store/ListSlice";
function ProductList() {
  // let [data, setData] = useState([]);

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.proSilce);
  // console.log(users);

  useEffect(() => {
    dispatch(getListApi());
  }, []);

  const handleRemoveUser = (id) => {
    dispatch(deleteListItem(id));
    dispatch(deleteUser(id));
  };

  return (
    <div className="table h-75">
      <Header />
      <div className="d-flex align-items-center justify-content-center flex-column">
        <Table className="col-sm-4  mt-3 tableoflist" hover striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
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

//  onClick={handleRemoveUser(item.id)}
//  without clicking any button and data.map with slice method of redux toolkit?

/**
 *  // async function deleteItem(id)
  // {
  //   let result = await fetch('http://localhost:3000/addProduct/'+id,
  //   {
  //       method:"DELETE"
  //     });
  //     result = await result.json();
  //     fetchMyAPI()
  //   }
    
  //   async function fetchMyAPI() {
  //     let response = await  fetch('http://localhost:3000/addProduct')
  //     response = await  response.json();
  //     setData(response);
  //     console.log(response,'response')
  //   }
    
 */
// create a reduer for delete a item with id with redux toolkit?
