import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import "./ProductImage.css";
import Product from "../components/Product";

const ProductImage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const formattedData = data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        isLike: false,
      }));

      setProducts(formattedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isLike: !product.isLike } : product
      )
    );
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Vortex color="#8b1f99" height={70} width={70} />
        </div>
      ) : (
        <div className="product-gallery">
          <ul className="product-list">
            {products.map((product) => (
              <Product
                key={product.id}
                productItems={product}
                onClickLike={handleFavoriteToggle}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProductImage;
