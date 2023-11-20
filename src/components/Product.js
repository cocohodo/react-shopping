import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";
import "./Product.css";
import requests from "../api/requests.js";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

export default function Product(fetchURL) {
    // const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
          try {
            const request = await axios.get(fetchURL.fetchURL);
            setProducts(request.data);
          } catch (error) {
            console.error("상품 데이터를 불러오는 데 실패하였습니다. : ", error);
          } finally {
          }
        };
    
        fetchProductData();
      }, [fetchURL]);

  return (
    <div className="products">
        <p className="products__total">Showing : {products.length} items</p>
        <div className="product-container">
            {products.map((product) => {
                return (
                    <div key={product.id} className="product">
                        <img className="product__img" src={product.image} alt={product.title}/>
                        <p className="product__title">{product.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
                      
  )
}
