import React from "react";
// import { BsFillTrashFill } from "react-icons/bs";
import "./ShoppingCartProduct.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
  const { id, image, category, title, price, quantity } = item;
  const dispatch = useDispatch();

  const incrementQuantity = (id) => {
    dispatch({ type: "incrementCartItem", payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "decrementCartItem", payload: id });
  };

  const deleteItem = (id) => {
    dispatch({ type: "deleteCartItem", payload: id });
  };

  return (
    <div className="cart__item">
      <img className="cart__item__image" src={image} alt={title} />
      <div className="cart__item__info__container">
        <div className="cart__item__info">
          <p className="cart__item__category">{category}</p>
          <Link className="cart__item__title" to={`/product/${id}`}>
            {title}
          </Link>
          <p className="cart__item__cost">
            {price} X {quantity} = $ {(price * quantity).toFixed(2)}
          </p>
        </div>

        <div className="cart__item__quantity__container">
          <button
            className="cart__button__decrement"
            onClick={() => decrementQuantity(id)}
          >
            -
          </button>
          <p className="cart__item__quantity">{quantity}</p>
          <button
            className="cart__button__increment"
            onClick={() => incrementQuantity(id)}
          >
            +
          </button>
        </div>
      </div>
      <button className="cart__item__delete" onClick={() => deleteItem(id)}>
        {/* <BsFillTrashFill /> */}
      </button>
    </div>
  );
}