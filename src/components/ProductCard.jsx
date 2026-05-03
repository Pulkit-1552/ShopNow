import React from "react";

const ProductCard = ({ product, onAdd }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} style={styles.img} />

      <h4 style={styles.title}> {product.title}</h4>
      
      <p>₹ {product.price}</p>

      <button onClick={() => onAdd(product)} style={styles.btn}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "180px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "120px",
    objectFit: "contain",
  },
  title: {
    fontSize: "14px",
  },
  btn: {
    marginTop: "5px",
    padding: "6px",
    cursor: "pointer",
  },
};

export default ProductCard;