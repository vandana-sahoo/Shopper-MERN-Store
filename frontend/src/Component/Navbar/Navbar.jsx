import React, { useContext, useRef, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Navbar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import nav_dropdown from "../assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {/* Use Link instead of link */}
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link style={{ textDecoration: "none" }} to="/Men">
            Men
          </Link>{" "}
          {/* Use Link instead of link */}
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link style={{ textDecoration: "none" }} to="/Women">
            Women
          </Link>{" "}
          {/* Use Link instead of link */}
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Kid")}>
          <Link style={{ textDecoration: "none" }} to="/Kid">
            Kid
          </Link>{" "}
          {/* Use Link instead of link */}
          {menu === "Kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
       {localStorage.getItem('auth-token')?
       <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
       : <Link to="login">
       <button>Login</button>
     </Link>}


       
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
