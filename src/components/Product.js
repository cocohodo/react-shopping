import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";
import "./Product.css";
import requests from "../api/requests.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Product(fetchURL) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
          try {
            const request = await axios.get(fetchURL.fetchURL);
            setProducts(request.data);
          } catch (error) {
            console.error("상품 데이터를 불러오는 데 실패하였습니다. ", error);
          } finally {
          }
        };
    
        fetchProductData();
      }, [fetchURL]);

      const addToCart = (product) => {
        dispatch({ type: "addCartItem", payload: product });
      };

  return (
    <div className="products">
        <p className="products__total">Showing : {products.length} items</p>
        <div className="product-container">
            {products.map((product) => {
                return (
                    <div key={product.id} className="product">
                        <Link
                          className="product__info__primary"
                          to={`/product/${product.id}`}
                        >
                          {""}
                        <img className="product__img" src={product.image} alt={product.title}/>
                        <p className="product__title">{product.title}</p>
                        </Link>
                        <div className="product__footer">
                          <Link to='/shoppingcart' className="product__cart-btn" onClick={() => addToCart(product)}>장바구니에 담기</Link>
                          <p className="product__price">$ {product.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
                      
  )
}
