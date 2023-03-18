import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  pass: "",
  loading: false,
  error: false,
};
export const registerAPIData = createAsyncThunk("register", async (data) => {
  console.log(data);
  let result = await fetch("http://localhost:8000/Ragister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(result, "result");
  result = await result.json(data);
  //    console.log(result)
  localStorage.setItem("user-info", JSON.stringify(result));
});
const RegisterSlice = createSlice({
  name: "register",
  initialState,
});

export default RegisterSlice.reducer;
