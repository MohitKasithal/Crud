const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getListApi = createAsyncThunk("ProSlice/getData", async () => {
  let response = await fetch("http://localhost:3000/addProduct");
  response = await response.json();
  return response;
});
export const deleteListItem = createAsyncThunk("deleteItem", async (id) => {
  let result = await fetch(`http://localhost:3000/addProduct/${id}`, {
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
      console.log(action.payload, ">>>> action");
      state.users = state.users.filter(
        (item) => item !== action.payload,
        ...state
      );
    },
  },
  extraReducers: {
    [getListApi.pending]: (state) => {
      state.loading = true;
    },
    [getListApi.fulfilled]: (state, { payload }) => {
      return { ...state, users: payload };
    },
    [getListApi.rejected]: () => {
      //  console.log("rejected")
    },
    [deleteListItem.pending]: (state) => {
      state.loading = true;
    },
    [deleteListItem.fulfilled]: (state, action) => {
      const restItem = state.users.filter(
        (item) => item.id !== action.payload.id,
        ...state
      );
      return restItem;
    },
    [deleteListItem.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { deleteUser, update } = ListSlice.actions;
export default ListSlice.reducer;
