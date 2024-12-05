import React from "react";

const CartWidget = () => {
  const cartCount = 3; 

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <i className="fas fa-shopping-cart" style={{ fontSize: "24px" }}></i>
      <span
        style={{
          marginLeft: "8px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "4px 8px",
          fontSize: "14px",
        }}
      >
        {cartCount}
      </span>
    </div>
  );
};


export default CartWidget;