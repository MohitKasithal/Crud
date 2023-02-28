import Header from "../Component/Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/loginSchema";
function Login() {
  const [visible, setVisible] = useState(true);
  function heandleConfirmEye() {
    setVisible(!visible);
  }
  const initialValues = {
    email: "",
    password: "",
  };
  let navigate = useNavigate("");
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/Add");
    }
  }, []);

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      //   console.log("values", values);
      localStorage.setItem("user-info", JSON.stringify(values));
      navigate("/");
      action.resetForm();
    },
  });

  //   async function login() {
  //     // console.log('data',email,pass)
  //     let item = { email, pass };
  //     localStorage.setItem("user-info", JSON.stringify(item));
  //     // dispatch(loginApi(item))
  //     navigate("/Add");
  //   }

  return (
    <>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center  "
        style={{
          height: "99vh",
          background: "#2c2c2c",
        }}>
        <div>
          <div className="login ">
            <Form
              className="form-log bg-white"
              style={{ width: "350px", height: "350px" }}
              onSubmit={handleSubmit}>
              <h3> Login Page</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="bg-dark text-white"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p style={{ textAlign: "left", color: "blue" }}>
                    {errors.email}
                  </p>
                ) : (
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="bg-dark text-white"
                  type={visible ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />{" "}
                <button
                  type={"button"}
                  className="eye2 bg-dark text-white"
                  onClick={heandleConfirmEye}>
                  {visible ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                </button>
                {errors.password && touched.password ? (
                  <p style={{ textAlign: "left", color: "blue" }}>
                    {errors.password}
                  </p>
                ) : null}
              </Form.Group>

              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
/**
 *  let result= await fetch('http://localhost:3000/Login',
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
             
        })
        result=await result.json( );
        localStorage.setItem("user-info",JSON.stringify(result));
        
 */
