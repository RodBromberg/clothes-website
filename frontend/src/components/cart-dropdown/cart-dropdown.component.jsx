import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
