import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import Products from "../components/Products";
import ProductDetailWrapper from "../components/ProductDetailWrapper";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/Productdetail/:id"
                element={<ProductDetailWrapper />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
