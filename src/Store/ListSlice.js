const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getListApi = createAsyncThunk("ProSlice/getData", async () => {
  let response = await fetch("http://localhost:8000/Product");
  response = await response.json();
  return response;
});
export const deleteListItem = createAsyncThunk("deleteItem", async (id) => {
  let result = await fetch(`http://localhost:8000/Product/${id}`, {
    method: "DELETE",
  });
  return result;
});

const ListSlice = createSlice({
  name: "proSilce",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const res = state.users.filter((item) => item.id !== id);
      return { ...state, res };
    },
  },
  // extraReducers: {
  //   [getListApi.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getListApi.fulfilled]: (state, { payload }) => {
  //     return { ...state, users: payload };
  //   },
  //   [getListApi.rejected]: () => {
  //     //  console.log("rejected")
  //   },
  //   // [deleteListItem.pending]: (state) => {
  //   //   state.loading = true;
  //   // },
  //   // [deleteListItem.fulfilled]: (state, action) => {
  //   //   console.log(action.payload);

  //   //   const Data = state.users.filter((item) => item.id !== action.payload.id);
  //   //   return
  //   // },
  //   // [deleteListItem.rejected]: () => {
  //   //   console.log("rejected");
  //   // },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getListApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getListApi.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.loading = false;
      })
      .addCase(getListApi.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteListItem.fulfilled, (state, { payload }) => {
        const { id } = payload;
        const res = state.users.filter((item) => item.id !== id);
        return { ...state, res };
      });
  },
});

export const { deleteUser, update } = ListSlice.actions;
export default ListSlice.reducer;
