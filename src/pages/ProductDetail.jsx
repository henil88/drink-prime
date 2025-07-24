import React from "react";
import { useParams } from "react-router-dom";
import { useDrinks } from "../context/DrinksContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { getById } = useDrinks();

  const product = getById(id);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.alt} />
      <p>{product.description}</p>
      {/* Add more info if needed */}
    </div>
  );
};

export default ProductDetail;
