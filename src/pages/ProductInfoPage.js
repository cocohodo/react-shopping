import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import requests from "../api/requests";
import "./ProductInfoPage.css";
import { useDispatch } from "react-redux";
import ProductInfo from "../components/ProductInfo";

export default function ProductInfoPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${requests.fetchProducts}/${productId}`);
        dispatch({ type: "select", payload: response.data });
      } catch (error) {
        console.error("상품 데이터를 불러오는 데 실패하였습니다. : ", error);
      }
    };

    fetchProductData();
  }, [productId, dispatch]);

  return (
    <div className={`detail detail__${productId}`}>
      <ProductInfo/>
    </div>
  );
}