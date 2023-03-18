const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addProducts = createAsyncThunk("addProduct", async (data) => {
  const res = await fetch(` http://localhost:8000/Product/ `, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json(data);
});

const AddProSlice = createSlice({
  name: "inputValue",
  initialState: {
    loading: false,
    post: {},
    error: null,
  },
  reducers: {
    users: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [addProducts.pending]: (state) => {
      state.loading = true;
    },
    [addProducts.fulfilled]: (state, action) => {
      // state.loading =  false,
      state.post = action.payload;
    },
    [addProducts.rejected]: (state, action) => {
      // state.error = true,
      // state.post = action.payload
    },
  },
});

export const { users } = AddProSlice.actions;
export default AddProSlice.reducer;
