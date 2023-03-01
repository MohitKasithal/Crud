import { configureStore } from "@reduxjs/toolkit";
import AddProSlice from "./AddProSlice";
import ListSlice from "./ListSlice";
import registerSlice from "./registerSlice";
const store = configureStore({
  reducer: {
    inputValue: AddProSlice,
    register: registerSlice,
    proSilce: ListSlice,
  },
});
export default store;
