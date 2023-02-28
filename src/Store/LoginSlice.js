const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const loginApi = createAsyncThunk("addProduct", async (data) => {
  // console.log(data,"from login")
  let result = await fetch("http://localhost:3000/Login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  result = await result.json();
  localStorage.setItem("user-info", JSON.stringify(result));
});

const LoginSlice = createSlice({
  name: "ProSlice",
  initialState: {
    login: [],
  },
  reducers: {
    reducers: {
      users: (state, action) => {
        state.value = action.payload;
      },
    },
  },
});

export default LoginSlice.reducer;
