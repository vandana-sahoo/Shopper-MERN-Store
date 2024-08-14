import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;

// import React from "react";
// import "./Admin.css";
// import Sidebar from "../../Components/Sidebar/Sidebar";
// import { Routes, Route } from "react-router-dom";
// import AddProduct from "../../Components/AddProduct/AddProduct";
// import ListProduct from "../../Components/ListProduct/ListProduct";

// const Admin = () => {
//   return (
//     <div className="admin">
//       <Sidebar />
//       <div className="admin-content">
//         <Routes>
//           <Route path="addproduct" element={<AddProduct />} />
//           <Route path="listproduct" element={<ListProduct />} />
//           <Route path="*" element={<div>Page Not Found</div>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Admin;
