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

// export function report() {
//   return (
//     <div>
//       <MDBContainer
//         fluid
//         className="d-flex align-items-center justify-content-center bg-image"
//         style={{
//           backgroundImage:
//             "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//         }}>
//         <div className="mask gradient-custom-3"></div>
//         <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
//           <MDBCardBody className="px-5">
//             <h2 className="text-uppercase text-center mb-5">
//               Create an account
//             </h2>
//             <MDBInput
//               wrapperClass="mb-4"
//               label="Your Name"
//               size="lg"
//               id="form1"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <MDBInput
//               wrapperClass="mb-4"
//               label="Your Email"
//               size="lg"
//               id="form2"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <MDBInput
//               wrapperClass="mb-4"
//               label="Password"
//               size="lg"
//               id="form3"
//               type="password"
//               value={pass}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="d-flex flex-row justify-content-center mb-4">
//               <MDBCheckbox
//                 name="flexCheck"
//                 id="flexCheckDefault"
//                 label="I agree all statements in Terms of service"
//               />
//             </div>
//             <MDBBtn
//               className="mb-4 w-100 gradient-custom-4"
//               size="lg"
//               onClick={signUp}>
//               Register
//             </MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBContainer>
//     </div>
//   );
// }

/**
 *   let result= await fetch('http://localhost:3000/Ragister',
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result=await result.json();
    //    console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate('/Add')
     }
 */

/***
      *  < form className=" p-5 col-sm-6 offset-sm-3 mt-5 square bg-secondary shadow rounded-4 rounded-1">
                <input required type={'text'} value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                <br />
                <input required type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                <br />
                <input required type={'text'} value={pass} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control' />
                <br />
                <Button onClick={signUp} className="btn btn-primary">Sign up</Button>
            </form>



             <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          height: "750px",
        }}>
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              required
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              onClick={signUp}>
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
   
      */
/**function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();

  //   const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  async function signUp(e) {
    e.preventDefault();
    let item = { name, pass, email };
    localStorage.setItem("user-info", JSON.stringify(item));
    // dispatch(registerAPIData( { name, pass, email } ))
    navigate("/Add");
  }
  return (
    <>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          height: "725px",
        }}>
        <form
          onSubmit={signUp}
          className=" p-4 col-sm-4  mt-2  square bg-secondary shadow rounded-2 rounded-1">
          <h3
            style={{
              border: "1px solid #004e92",
              width: "auto",
              padding: "2px",
              color: "#004e92",
            }}>
            REGISTER 
          </h3>
          <input
            required
            type={"text"}
            value={name}
            name={"name"}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="form-control"
          />
          <br />
          <input
            required
            type={"text"}
            value={email}
            name={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-control"
          />
          <br />
          <input
            required
            type={"text"}
            value={pass}
            name={"password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control"
          />
          <br />
          <Button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
            }}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
} */
