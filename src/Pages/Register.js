import { Button } from "react-bootstrap";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";
import { type } from "@testing-library/user-event/dist/type";

function Register() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  function changeEye() {
    setVisible(!visible);
  }
  function confirmEye() {
    setVisible2(!visible2);
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
    Confirm_Password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        localStorage.setItem("user-info", JSON.stringify(values));
        navigate("/Add");
        action.resetForm();
      },
    });

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });

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
          <form
            onSubmit={handleSubmit}
            className="d-flex   flex-column p-4 col-sm-3  mt-2  square   shadow  "
            style={{
              width: "350px",
              background: "#fff",
            }}>
            <h3
              style={{
                border: "2px solid #004e92",
                textAlign: "center",
                width: "100%",
                padding: "2px",
                color: "#004e92",
                borderRadius: "25px",
              }}>
              REGISTER
            </h3>
            <div className="form-input">
              <input
                type={"text"}
                value={values.name}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                className="form-control  "
              />
            </div>
            {errors.name && touched.name ? (
              <p style={{ textAlign: "left", color: "blue" }}>{errors.name}</p>
            ) : null}
            <div className="form-input">
              <input
                type={"text"}
                value={values.email}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className="form-control  "
              />
            </div>
            {errors.email && touched.email ? (
              <p style={{ textAlign: "left", color: "blue" }}>{errors.email}</p>
            ) : null}
            <div className="form-input" style={{ position: "relative" }}>
              <input
                type={visible ? "password" : "text"}
                value={values.pass}
                name={"password"}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                className="form-control  "
              />
              <button
                value={type}
                type={"button"}
                className="eye"
                onClick={changeEye}>
                {visible ? <AiOutlineEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            {errors.password && touched.password ? (
              <p style={{ textAlign: "left", color: "blue" }}>
                {errors.password}
              </p>
            ) : null}
            <div className="form-input" style={{ position: "relative" }}>
              <input
                type={visible2 ? "password" : "text"}
                value={values.Confirm_Password}
                name={"Confirm_Password"}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm Password"
                className="form-control"
              />
              <button type={"button"} className="eye" onClick={confirmEye}>
                {visible2 ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            {errors.Confirm_Password && touched.Confirm_Password ? (
              <p style={{ textAlign: "left", color: "blue" }}>
                {errors.Confirm_Password}
              </p>
            ) : null}
            <Button
              type="submit"
              className="btn btn-success "
              style={{
                width: "100%",
                borderRadius: "25px",
              }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
