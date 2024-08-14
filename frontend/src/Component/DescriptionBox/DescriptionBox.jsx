import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of product or services over the internate serves as a virtual
          marketplace where businesses and individual showcase their products,
          interact with customers, and conduct transcation without the need for
          a physical presence. -commerce website have gained immense popularity
          due to their convenience assesibility, and the global reach they
          offer.
        </p>
        <p>
          E-commerce website typically display products or services a detailed
          descriptions, images, prices, and any avilable variations (e.g.,
          sizes,colors). Each product usually has its own dedi with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
