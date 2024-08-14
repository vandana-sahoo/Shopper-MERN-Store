import React, { useState, useEffect } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  // State to hold the popular products
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/popularinwomen")
      // .then((response)=>response.json())
      // .then((data)=>setPopularProducts(data));

      .then((response) => {
        if (!response.ok) {
          // Handle error response
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => setPopularProducts(data)) // Update state with data
      .catch((error) => {
        // Handle fetch errors
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
