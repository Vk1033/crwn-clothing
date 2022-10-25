import "./product-card.styles.scss";
import React from "react";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cart/cart.action";
import CART_ACTION_TYPES from "../../store/cart/cart.type";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCart = () => {
    dispatch(addItem(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
