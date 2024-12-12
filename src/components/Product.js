import React, { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { productItems, onClickLike } = props;
  const { id, image, title, price, isLike } = productItems;

  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const handleLikeClick = () => {
    onClickLike(id);
  };

  const handlePriceButtonClick = () => {
    setIsPriceVisible((prevState) => !prevState);
  };

  return (
    <li className="product-item-wrapper">
      <div className="product-card">
        <Link to={`/products/${id}`} className="image-link">
          <img src={image} alt="Product" className="product-image" />
        </Link>
        <div className="details-section">
          <h4 className="product-title">{title}</h4>
          <IoHeartSharp
            size={20}
            color={isLike ? "red" : "gray"}
            className="like-icon"
            onClick={handleLikeClick}
          />
        </div>
        <div className="price-section">
          {isPriceVisible ? (
            <p className="product-price">RS.{price * 75}/-</p>
          ) : (
            <button
              className="product-price-button"
              onClick={handlePriceButtonClick}
            >
              Click to see price
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Product;
