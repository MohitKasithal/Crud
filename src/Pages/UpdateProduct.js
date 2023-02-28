import Header from "../Component/Header";
import React, { useState, useEffect } from "react";
import withRouter from "../Component/wrapper";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {
//   update,
//   UpdateItem,
//   UpdateApi,
//   updateDetails,
// } from "../Store/updateSlice";
// import { ListApi } from "../Store/ListSlice";
function UpdateProduct(props) {
  // console.log(props)
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [companyName, setcompanyName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://localhost:3000/addProduct/" + props.params.id
      );
      response = await response.json();
      setData(response);
      // setName(response.name);
      // setcompanyName(response.companyName);
      // setPrice(response.price);
      // setDescription(response.description);
    }
    fetchMyAPI();
  }, [data]);

  async function handelEditProduct(id) {
    const item = { name, companyName, description, price };
    navigate("/");
    // const formdata = new FormData();
    // // formdata.append(" id", id);
    // formdata.append("name", name);
    // formdata.append("description", description);
    // formdata.append("price", price);
    // formdata.append("companyName",companyName);

    let result = await fetch(
      "http://localhost:3000/addProduct/" + id + "?_method=PUT",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: formdata,
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));

    // console.log(result, "result from update");
  }
  return (
    <>
      <Header />

      <div
        className="form-group d-flex align-items-center justify-content-center  "
        style={{
          height: "99vh",
          background: "#2c2c2c",
        }}>
        <div className="form   d-flex align-items-center  flex-column bg-white  div-update">
          <h3 className="text-muted pt-2">Update Product</h3>
          <form onSubmit={() => handelEditProduct(data.id)} className="form">
            <input
              type={"text"}
              defaultValue={data.name}
              className="form-control  inp-br "
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />{" "}
            <br />
            <input
              type={"text"}
              defaultValue={data.companyName}
              className="form-control inp-br"
              onChange={(e) => setcompanyName(e.target.value)}
            />{" "}
            <br />
            <input
              defaultValue={data.description}
              type={"text"}
              className="form-control inp-br"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />{" "}
            <br />
            <input
              defaultValue={data.price}
              type={"number"}
              className="form-control inp-br"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />{" "}
            <br />
            <div className="btn-div">
              <Button
                variant="success"
                type="submit"
                onClick={() => handelEditProduct(data.id)}>
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default withRouter(UpdateProduct);
/**
 *  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://localhost:3000/addProduct/" + props.params.id
      );
      response = await response.json();
      setData(response);
    }
    fetchMyAPI();
  }, [])
 */
