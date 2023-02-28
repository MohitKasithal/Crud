import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register";
import Protected from "./Component/Prodected";
import ProductList from "./Pages/ProductList";
import SearchProduct from "./Pages/SearchProduct";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Protected Cmp={Login} />} />
            <Route
              path="/Update/:id"
              element={<Protected Cmp={UpdateProduct} />}
            />
            <Route path="/Add" element={<Protected Cmp={AddProduct} />} />
            <Route path="/Register" element={<Protected Cmp={Register} />} />
            <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
            <Route path="/" element={<Protected Cmp={ProductList} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
