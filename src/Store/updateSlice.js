const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// export const UpdateApi = createAsyncThunk("fromUpdate/getData", async () => {
//   let response = await fetch("http://localhost:3000/addProduct");
//   response = await response.json();
//   // console.log(response, "respose");
//   return response;
// });
export const updateDetails = createAsyncThunk(
  "updateDetails",
  async (id, data) => {
    console.log("data", data);
    let result = await fetch(
      "http://localhost:3000/addProduct/" + id + "?_method=PUT",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log(result, "result from update");
    return result;
  }
);

const UpdateSlice = createSlice({
  name: "Update",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateAction: (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },

    extraReducers: {
      [updateDetails.fulfilled]: (state, action) => {
        state.users = state.filter((item) => item.id !== action.payload);

        return { ...state, users: action.payload };
      },
    },
  },
});
export const { update } = UpdateSlice.actions;

export default UpdateSlice.reducer;
// reducer for update item details for redux-toolkit?
