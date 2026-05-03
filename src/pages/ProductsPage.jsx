import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <div>
      <h2>Products</h2>

<div style = {{display:"flex",flexWrap:"wrap"}}>
     {products.map((p) => (
  <ProductCard key={p.id} product={p} onAdd={addToCart} />
))}
</div>
    </div>
  );
};

export default ProductsPage;