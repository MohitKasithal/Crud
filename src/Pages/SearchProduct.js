import { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../Component/Header";
function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    let result = await fetch("http://localhost:8000/Product?q=" + key);
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center"
        style={{
          height: "99vh",
          background: "#2c2c2c",
        }}>
        <div className="form-group col-sm-8  d-flex justify-content-center align-items-center  ">
          <div className="col-sm-8 bg-white p-3 w-100 ">
            <h2 className="searchH2">Search Product</h2>
            <hr
              style={{
                color: "darkblue",
                height: "auto",
                border: "7",
                borderTop: "2px solid",
                opacity: "50",
              }}
            />
            <br />
            <input
              type={"text"}
              onChange={(e) => search(e.target.value)}
              className="form-control bg-dark text-white w-100 "
              placeholder="search"
            />
            <br />
            {data.length > 0 ? (
              <Table
                className="col-sm-8 table-div"
                style={{ color: "green", fontWeight: 500 }}
                hover
                striped
                bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.companyName}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <h1 className="d-flex justify-content-center notFound">
                Not found
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchProduct;
