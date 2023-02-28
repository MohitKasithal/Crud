import { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../Component/Header";
function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    let result = await fetch("http://localhost:3000/addProduct?q=" + key);
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <Header />
      <div
        className="form-group d-flex align-items-center justify-content-center"
        style={{
          height: "700px",
          background: "#2c2c2c",
        }}>
        <div className="col-sm-8 bg-white p-3">
          <h2>Search Product</h2>
          <hr
            style={{
              color: "darkblue",
              border: "7",
              borderTop: "2px solid",
              opacity: "50",
            }}
          />
          <br />
          <input
            type={"text"}
            onChange={(e) => search(e.target.value)}
            className="form-control bg-dark text-white "
            placeholder="search"
          />
          <br />
          {data.length > 0 ? (
            <Table className="col-sm-8      tableoflist" hover striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img style={{ width: "50px" }} src={item.companyName} />
                    </td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default SearchProduct;
