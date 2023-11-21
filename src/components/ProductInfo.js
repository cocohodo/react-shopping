import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./ProductInfo.css";

export default function ProductInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selected = useSelector((state) => state.select);

    useEffect(() => {}, [selected]);

    const addToCart = (product) => {
        dispatch({ type: "addCartItem", payload: product });
      };
    const {title,price,description,category,image} = selected;
  return (
    <div className="detail__item">
      <img className="item-image" src={image} alt={title}></img>
      <div className="item-info-container">
        <div className="item-info">
          <p className="item-category">{category}</p>
          <p className="item-title">{title}</p>
          <p className="item-price">$ {price}</p>
          <p className="item-desc">{description}</p>
        </div>
        <div className="item-buttons">
          <button
            className="item-button-cart"
            onClick={() => addToCart(selected)}
          >
            장바구니에 담기
          </button>
          <button
            className="item-button-tocart"
            onClick={() => navigate("/shoppingcart")}
          >
            장바구니로 이동
          </button>
        </div>
      </div>
    </div>
  )
}
