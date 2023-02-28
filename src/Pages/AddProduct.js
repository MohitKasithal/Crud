import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import { addProducts } from "../Store/AddProSlice";

function AddProduct() {
  const navigate = useNavigate();
  const inputValue = useSelector((state) => state.inputValue.post);

  const [name, setName] = useState();
  const [companyName, setcompanyName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  function handleformData() {
    dispatch(addProducts({ name, companyName, description, price }));
    navigate("/");
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
        <div className="formAdd col-sm-5   d-flex align-items-center  flex-column bg-white  ">
          <h3 className="text-muted pt-2">Add Product</h3>
          <form onSubmit={() => handleformData()} className="form">
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
            />{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              onChange={(e) => setcompanyName(e.target.value)}
            />{" "}
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />{" "}
            <input
              type={"number"}
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />{" "}
            <div className="btn-div">
              <Button variant="success" type="submit">
                AddProduct
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddProduct;

/**
 * const [companyName_path, setcompanyName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
   
    const handleInputName = (e) => {
        dispatch ( setName(e.target.value));
      }
    const handleInputcompanyName = (e) => {
        dispatch (setcompanyName(e.target.companyNames[0]));
      }
    const handleInputPrice = (e) => {
        dispatch(setPrice(e.target.value));
      }
    const handleInputDes = (e) => {
        dispatch(setDescription(e.target.value));
      }
      function formData (){
        dispatch(fetchProducts(inputValue))
      }
 */
