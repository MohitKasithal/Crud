import { configureStore } from "@reduxjs/toolkit";
import AddProSlice from "./AddProSlice";
import ListSlice from "./ListSlice";
import registerSlice from "./registerSlice";
import updateSlice from "./updateSlice";
const store = configureStore({
  reducer: {
    inputValue: AddProSlice,
    register: registerSlice,
    proSilce: ListSlice,
    // updata: updateSlice,
  },
});
export default store;
