import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product"; // Import the Product component
import Cart from "./Pages/Cart"; // Ensure Cart is also imported if it's used
import LoginSignup from "./Pages/LoginSignup"; // Ensure LoginSignup is also imported if it's used
import Footer from "./Component/Footer/Footer";
import men_banner from "./Component/assets/banner_mens.png";
import women_banner from "./Component/assets/banner_women.png";
import kid_banner from "./Component/assets/banner_kids.png";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/Women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kid"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
};

export default App;
