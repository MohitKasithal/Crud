import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Header() {
  const [userData, setUserData] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  function handleLogout() {
    localStorage.clear();
    navigate("/Register");
  }
  const data = localStorage.getItem("user-info");
  useEffect(() => {
    if (data) {
      setUserData(true);
    }
  }, [data]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-container col-sm-12">
          <Navbar.Brand href="#home" className="logo">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper  ">
            {userData ? (
              <>
                <Link to={"/"}>ProductList</Link>
                <Link to={"/Search"}>Search</Link>
                <Link to={"/Add"}>AddProduct</Link>
              </>
            ) : (
              <>
                <Link to={"/Register"}>Register</Link>
                <Link to={"/Login"}>Login</Link>
              </>
            )}
          </Nav>
          {userData ? (
            <Nav>
              <NavDropdown className="drop" title={user && user.name}>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
